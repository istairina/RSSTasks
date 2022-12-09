import { IArticle, ISource } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IArticle) {
        const values = data?.articles ? data?.articles : undefined;
        if (values != undefined) {
            this.news.draw(values);
        }
    }

    drawSources(data: ISource) {
        const values = data?.sources ? data?.sources : undefined;
        if (values != undefined) {
            this.sources.draw(values);
        }
    }
}

export default AppView;
