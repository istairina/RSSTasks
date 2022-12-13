import { IDrawArticle, ISource } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const docSources: HTMLElement | null = document.querySelector('.sources');
        if (docSources !== null) {
            docSources.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: IDrawArticle) => this.view.drawNews(data))
            );
        }

        this.controller.getSources((data: ISource) => this.view.drawSources(data));
    }
}

export default App;
