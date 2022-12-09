export interface ISource {
  id: string,
  name: string,
  description?: string,
  url?: string,
  category?: string,
  language?: string,
  country?: string,

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
}

export interface IResponse {
  status: string,
  sources: Array<ISource>,
  key?: string
}

export interface IKey {
  [key: string]: number | string;
}
