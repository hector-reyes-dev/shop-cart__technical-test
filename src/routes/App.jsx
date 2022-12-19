import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Detail from "@pages/Detail";
import "@styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Detail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
