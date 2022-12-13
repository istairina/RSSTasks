// import { loader } from 'webpack';
import { ISource, IArticle } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: ISource) => void) {
        super.getResp<ISource>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: IArticle) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;
        while (target !== newsContainer && target !== null && newsContainer !== null) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId !== null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<IArticle>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target.parentNode !== null) {
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;
