import { ISource } from './src/types/index';
import './sources.css';

class Sources {
    draw(data: ISource) {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        // data.forEach((item: ISource) => {

        for (const key in data) {
            //let item: ISource = data;
            console.log('key ' + data[key]);
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceItemName.textContent = data.name;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceItem.setAttribute('data-source-id', data.id);

            fragment.append(sourceClone);
        }
        // );

        const sourcesElem = document.querySelector('.sources') as HTMLElement;
        sourcesElem.append(fragment);
    }
}

export default Sources;
