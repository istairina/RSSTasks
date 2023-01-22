import GarageHTML from './components/garage/layout/garage';
import Header from './components/common/layout/header';
import './sass/global.scss';

const app = document.getElementById('app');

if (app) {
  app.appendChild(Header(app));
  app.appendChild(GarageHTML([]));
}
