import './App.css';
import routes from './routes.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          {routes.map((config, i) => (
            <Route key={i} {...config} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
