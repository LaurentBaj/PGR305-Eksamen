import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import Artist from "../pages/Artist";
import About from "../pages/About";
import NavigationBar from "../components/shared/NavigationBar";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/artist" component={Artist}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
