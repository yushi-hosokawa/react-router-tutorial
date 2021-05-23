import { Link } from "react-router-dom";

export const Page2 = () => {
  const params = 334;
  const name = "hogehoge";
  return (
    <div>
      <h1>Page2のページ</h1>
      <Link to={`/page2/${params}`}>URL Parameter</Link>
      <br />
      <Link to={`/page2/${params}?name=${name}`}>URL QueryParameter</Link>
    </div>
  );
};
