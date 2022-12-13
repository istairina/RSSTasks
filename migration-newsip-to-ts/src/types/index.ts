import News from "../components/view/news/news";
import Sources from "../components/view/sources/sources";

export interface ISource {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
  status: string,
  sources: Array<ISource>,
  //sources?: ISource,

}

export interface IArticle {
  source: {
    id: string,
    name: string,
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
  status: string,
  totalResults: number,
  articles: Array<IArticle>,
  //articles?: Array<IArticle>,
  //id?: string;
  //name?: string;
}

export interface IDrawArticle {
  status: string,
  totalResults: number,
  articles: Array<IArticle>,
}

export interface IDrawSource {
  status: string,
  sources: Array<ISource>,
}


export interface IOptions {
  apiKey?: string,
  sources?: string,
}




export type loaderCallback  = (data: ISource[] | IArticle[]) => void | (() => void);
export type sourceCallback = (data: ISource[]) => void;
export type articleCallback = (data: IArticle) => void | (() => void);

//export type articleCallback = (data: ISource | IArticle) => void;


/* export interface IResponse {
  status: string,
  sources: Array<ISource>,
} */

/* export interface IKey {
  [key: string]: number | string;
} */
