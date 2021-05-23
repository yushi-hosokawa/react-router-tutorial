import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAのページ</h1>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
