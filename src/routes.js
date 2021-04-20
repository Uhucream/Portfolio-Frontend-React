import TopPage from './components/pages/TopPage.js'

const routes = [
  {
    path: "/",
    exact: true,
    children: <TopPage />
  },
];

export default routes