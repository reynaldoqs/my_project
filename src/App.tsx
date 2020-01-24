import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = (lazy(() => (import('./views/Home'))))
const Detail = (lazy(() => (import('./views/Detail'))))

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={(<div>loading...</div>)}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/terrible">
            <Detail />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
