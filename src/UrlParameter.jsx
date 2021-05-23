import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = () => {
  const { ids } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameterのページ</h1>
      <p> パラメータは{ids}です</p>
      <p> クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
