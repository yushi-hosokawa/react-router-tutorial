import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

//page1のルーティングに必要な情報が書いてあるオブジェクトを持つ配列を作成
//ルーティングに必要なpath,exactが必要か，どのコンポーネントを出力するかをオブジェクトに持つ．
export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
