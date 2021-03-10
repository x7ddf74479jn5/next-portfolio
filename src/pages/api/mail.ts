import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// const initMiddleware(middleware) {
//     return (req, res) =>
//       new Promise((resolve, reject) => {
//         middleware(req, res, (result) => {
//           if (result instanceof Error) {
//             return reject(result)
//           }
//           return resolve(result)
//         })
//       })
//   }

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "OPTIONS"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

//   (req:NextApiRequest,res:NextApiResponse,cors:any)=>any

// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST', 'OPTIONS'],
//   })
// )

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run cors
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  res.json({ message: "Hello Everyone!" });
}
