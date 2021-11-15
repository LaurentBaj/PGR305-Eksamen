import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import Artist from "../pages/Artist";
import About from "../pages/About";
import { ArtistDetails } from "../pages/ArtistDetails";
import NavigationBar from "../components/shared/NavigationBar";
import { NotFound } from "../pages/NotFound";
import NewArtist from "../pages/NewArtist";
import { EditArtistForm } from "../components/Artist/EditArtistForm";
import { EditArtist } from "../components/Artist/EditArtist";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/artists" component={Artist} />
          <Route path="/newArtist" component={NewArtist} />
          <Route path={`/artist-details/:id`} component={ArtistDetails} />
          <Route path={`/artist-edit/:id`} component={EditArtist} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
