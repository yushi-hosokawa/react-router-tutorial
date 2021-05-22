import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

//page1のルーティングに必要な情報が書いてあるオブジェクトを持つ配列を作成
//ルーティングに必要なpath,exactが必要か，どのコンポーネントを出力するかをオブジェクトに持つ．
export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
