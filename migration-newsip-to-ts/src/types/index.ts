import News from "../components/view/news/news";
import Sources from "../components/view/sources/sources";

export interface ISource {
  id: string,
  name: string,
  description?: string,
  url?: string,
  category?: string,
  language?: string,
  country?: string,
  sources?: ISource,

}

export interface IArticle {
  source: ISource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
  articles?: Array<IArticle>,
}

export interface IOptions {
  apiKey?: string;
  sources?: string;
}

export type loaderCallback = (data: ISource[] | IArticle[]) => void | (() => void);


/* export interface IResponse {
  status: string,
  sources: Array<ISource>,
} */

/* export interface IKey {
  [key: string]: number | string;
} */
