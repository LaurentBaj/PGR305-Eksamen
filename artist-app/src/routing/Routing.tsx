import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import Artist from "../pages/Artist";
import About from "../pages/About";
import NavigationBar from "../components/shared/NavigationBar";
import { ArtistDetail } from "../pages/ArtistDetail";
import { NotFound } from "../pages/NotFound";
import {ArtistProvider} from "../contexts/ArtistContext";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists" component={Artist} />
            <Route path="/about" component={About} />
            <ArtistProvider>
                <Route path={`/artists/:name`} component={ArtistDetail} />
            </ArtistProvider>
            <Route component={NotFound} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
