import * as sendgrid from "@sendgrid/mail";
import type { IncomingMessage, ServerResponse } from "http";
import http from "http";
import { apiResolver } from "next/dist/next-server/server/api-utils";
import * as handler from "src/pages/api/contact";
import type { FormData } from "src/types/api";
import request from "supertest";

jest.mock("@sendgrid/mail", () => {
  return {
    setApiKey: jest.fn(),
    send: jest.fn().mockImplementation(() => {
      return Promise.resolve({ response: "ok" });
    }),
  };
});

describe("API Test", () => {
  let server: http.Server;
  const mockedApiPreviewProps = {
    previewModeId: "",
    previewModeEncryptionKey: "",
    previewModeSigningKey: "",
  };
  // サーバで受け取るリクエストの処理
  const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
    if (typeof req.url !== "string") {
      throw "error";
    }
    const url = new URL(`http://localhost${req.url}`); // URLの形式に合わせる
    const query = Object.fromEntries(url.searchParams); // クエリパラメータを連想配列に変換
    return apiResolver(req, res, query, handler, mockedApiPreviewProps, false);
  };

  beforeAll(() => {
    // サーバ作成
    server = http.createServer(requestHandler);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    // サーバ停止
    server.close();
  });

  test("should success if requests by POST method with valid payload", async () => {
    const data: FormData = {
      name: "name",
      email: "email@test.com",
      category: "",
      description: "description",
    };

    const agent = await request.agent(server).post("/api/contact").send(data);
    expect(agent.status).toEqual(200);
    expect(sendgrid.send).toHaveBeenCalledTimes(2);
  });

  test("should fail if requests by GET method", async () => {
    const agent = await request.agent(server).get("/api/contact");
    expect(agent.status).toEqual(405);
    expect(agent.text).toMatch(/Not Allowed/);
    expect(sendgrid.send).not.toBeCalled();
  });

  test("should fail if requests by POST method with blank body", async () => {
    const agent = await request.agent(server).post("/api/contact").send();
    expect(agent.status).toEqual(400);
    expect(agent.text).toMatch(/nothing/);
    expect(sendgrid.send).not.toBeCalled();
  });

  test("should fail if requests by POST method with invalid payload", async () => {
    const data: FormData = {
      name: "name",
      email: "email",
      category: "",
      description: "description",
    };

    try {
      const agent = await request.agent(server).post("/api/contact").send(data);
      expect(agent.status).toBe(500);
    } catch (e) {
      expect(e).toMatch(/error/i);
      expect(sendgrid.send).not.toBeCalled();
    }
  });
});
