import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import Artist from "../pages/Artist";
import { ArtistDetails } from "../pages/ArtistDetails";
import NavigationBar from "../components/shared/NavigationBar";
import { NotFound } from "../pages/NotFound";
import { EditArtist } from "../pages/EditArtist";
import { NewArtist } from "../pages/NewArtist";
import { AlbumForm } from "../components/Album/AlbumForm";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/artists" component={Artist} />
          <Route path="/newArtist" component={NewArtist} />
          <Route path={`/artist-details/:id`} component={ArtistDetails} />
          <Route path={`/artist-edit/:id`} component={EditArtist} />
          <Route path={`/newAlbum/:id`} component={AlbumForm} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
