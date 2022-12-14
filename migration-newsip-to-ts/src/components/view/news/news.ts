import { IArticle } from '../../../types/index';
import './news.css';

class News {
    draw(data: IArticle[]) {
        const news = data.length >= 10 ? data.filter((_item: IArticle, idx: number) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IArticle, idx: number): void => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;

            if (idx % 2) newsItem.classList.add('alt');

            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;

            const bgImage: HTMLImageElement = new Image();
            bgImage.src = item.urlToImage;

            if (bgImage !== null) {
                bgImage.onload = (): void => {
                    newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage})`;
                };
            }

            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescrTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            newsDescrTitle.textContent = item.title;
            const newsDescrSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            newsDescrSource.textContent = item.source.name;
            const newsDescrContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            newsDescrContent.textContent = item.description;
            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElem = document.querySelector('.news') as HTMLElement;
        newsElem.innerHTML = '';
        newsElem.appendChild(fragment);
    }
}

export default News;
