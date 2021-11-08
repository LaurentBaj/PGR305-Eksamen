import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import Artist from "../pages/Artist";
import About from "../pages/About";
import { ArtistView } from "../pages/ArtistView";
import NavigationBar from "../components/shared/NavigationBar";
import { NotFound } from "../pages/NotFound";
import { ArtistProvider } from "../contexts/ArtistContext";
import NewArtist from "../pages/NewArtist";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artists" component={Artist} />
          <Route path="/about" component={About} />
          <Route path="/newArtist" component={NewArtist} />
          <ArtistProvider>
            <Route path={`/artists/:name`} component={ArtistView} />
          </ArtistProvider>
          <Route component={NotFound} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
