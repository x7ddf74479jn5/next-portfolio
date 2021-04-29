import ExternalLink from "src/components/samples/ExternalLink";

type GridRow<T> = {
  header: string;
  data: T;
};

type GridRowList = GridRow<string[]>;
type GridRowParagraph = GridRow<string>;
type GridRowLink = GridRow<{ href?: string; label?: string; description?: string }>;

const GridRowList: React.VFC<GridRowList> = ({ header, data }) => {
  return (
    <div>
      <h3>{header}</h3>
      <ul>
        {data.map((data, index) => {
          return <li key={index}>{data}</li>;
        })}
      </ul>
    </div>
  );
};

const GridRowParagraph: React.VFC<GridRowParagraph> = ({ header, data }) => {
  return (
    <div>
      <h3>{header}</h3>
      <p>{data}</p>
    </div>
  );
};
const GridRowLink: React.VFC<GridRowLink> = ({ header, data }) => {
  return (
    <div>
      <h3>{header}</h3>
      {data.description && <p>{data.description}</p>}
      {data.href && data.label && (
        <p>
          <ExternalLink label={data.label} url={data.href} />
        </p>
      )}
    </div>
  );
};

export { GridRowLink,GridRowList, GridRowParagraph };
