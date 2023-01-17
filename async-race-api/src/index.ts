import GarageHTML from './components/layout/garage';
import Header from './components/layout/header';
import './sass/global.scss';

const app = document.getElementById('app');

if (app) {
  app.appendChild(Header(app));
  app.appendChild(GarageHTML());
}
