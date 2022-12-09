import { ISource } from '../../../types/index';
import './sources.css';
class Sources {
    draw(data: ISource) {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const tempArr: Array<string> = Object.keys(data);
        const arrLength: number = tempArr.length;
        for (let i = 0; i < arrLength; i++) {
            const str = String(i);
            const item: string | ISource | undefined = data[str as keyof typeof data];
            let itemName = '';
            let itemId = '';
            if (item) {
                itemName = String(item['name' as keyof typeof item]);
                itemId = String(item['id' as keyof typeof item]);
            }

            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceItemName.textContent = itemName;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceItem.setAttribute('data-source-id', itemId);
            fragment.append(sourceClone);
        }

        const sourcesElem = document.querySelector('.sources') as HTMLElement;
        sourcesElem.append(fragment);
    }
}

export default Sources;
