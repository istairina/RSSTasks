import GarageHTML from './components/garage/layout/garage';
import Header from './components/common/layout/header';
import './sass/global.scss';

const body = document.querySelector('body');

if (body) {
  body.appendChild(Header(body));
  body.appendChild(GarageHTML());
}
