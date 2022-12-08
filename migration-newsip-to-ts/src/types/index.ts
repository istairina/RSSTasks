interface ISources {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
}

interface IResponse {
  sources: ISources,
}
