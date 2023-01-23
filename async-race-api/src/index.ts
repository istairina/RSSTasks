import GarageHTML from './components/garage/layout/garage';
import Header from './components/common/layout/header';
import './sass/global.scss';

const body = document.querySelector('body');

if (body) {
  body.appendChild(Header(body));
  body.appendChild(GarageHTML());
}

console.log(`Приветствую! Пара моментов на всякий случай:
1. Когда идет гонка, то все кнопки неактивны, кроме Select - можно менять цвет, название.
2. После окончания гонки надо вернуть машинки на место (Reset), чтобы все кнопки снова стали активны.
`);
