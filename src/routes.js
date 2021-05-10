import MainPage from './components/MainPage';
import TemplatePage from './components/TemplatePage';
import TestPage from './components/TestPage';

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
    path: '/test',
    component: TestPage,
  }
];

export default ROUTES;
