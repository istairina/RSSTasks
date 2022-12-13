import { IArticle, IDrawArticle, ISource, IDrawSource } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDrawArticle): void {
        const values: IArticle[] = data?.articles ? data?.articles : [];
        if (values != undefined) {
            this.news.draw(values);
        }
    }

    drawSources(data: IDrawSource): void {
        const values: ISource[] = data?.sources ? data?.sources : [];
        if (values != undefined) {
            this.sources.draw(values);
        }
    }
}

export default AppView;
