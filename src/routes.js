import MainPage from './components/MainPage';
import TemplatePage from './components/TemplatePage';
import DesignerPage from './components/DesignerPage';

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
    path: '/designer',
    component: DesignerPage,
  },
];

export default ROUTES;
