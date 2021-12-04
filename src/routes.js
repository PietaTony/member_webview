import MainPage from './components/MainPage';
import TemplatePage from './components/TemplatePage';
import PrintListPage from './components/PrintListPage';

const ROUTES = [
  {
    path: '/',
    exact: true,
    component: MainPage,
  },
  {
    path: '/template',
    component: TemplatePage,
  },
  {
    path: '/printList',
    component: PrintListPage,
  }
];

export default ROUTES;
