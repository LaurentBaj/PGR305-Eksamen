import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import Artist from "../pages/Artist";
import About from "../pages/About";
import NavigationBar from "../components/shared/NavigationBar";
import { ArtistDetail } from "../pages/ArtistDetail";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/artist" component={Artist}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/artistDetail" component={ArtistDetail} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
