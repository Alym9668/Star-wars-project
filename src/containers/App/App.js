import styles from '../App/App.module.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import routesConfig from '../../routes/routesConfig';
import Header from '../../components/Header/Header';

function App() {
  return (
    <>
    <BrowserRouter>
        <div className={styles.wraper}>
          <Header/>
            <Switch>
              {routesConfig.map((route, index)=>(
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                /> 

              ))}
            </Switch>
        </div>




    
    
    </BrowserRouter>

    </>
  );
}

export default App;
