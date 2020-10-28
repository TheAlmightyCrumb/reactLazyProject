import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import track from './Analytics/Mixpanel';
const Blog = lazy(() => import("./Components/Blog"));
const Bravo = lazy(() => import("./Components/Bravo"));
const ErrorPath = lazy(() => import("./Components/ErrorPath"));

function App() {

  useEffect(() => {
    track("app launched")
  }, [])

  return (
      <Router>
        <Suspense fallback={<b>Loading...</b>}>
          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/bravo" exact component={Bravo} />
            <Route component={ErrorPath} />
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
