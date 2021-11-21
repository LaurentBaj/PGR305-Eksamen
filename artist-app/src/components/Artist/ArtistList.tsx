import { FC, useContext, useEffect, useState } from "react";
import {
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
  Stack,
} from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import ArtistItem from "./ArtistItem";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";
import { Link } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";

const ArtistList: FC = () => {
  const { artists, loading, getArtists } = useContext(
    ArtistContext
  ) as ArtistContextType;

  useEffect(() => {
    getArtists();
  }, []);

  // https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  function search(items: any) {
    return items.filter((item: any) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  const createArtistList = () => {
    if (loading) {
      return (
        <Col className="text-center">
          <LoadingSpinner />
        </Col>
      );
    }

    return search(artists).map((artist: IArtist, key: number) => {
      return (
        <Col key={key}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/artist-details/${artist.id}`}
          >
            <ArtistItem
              id={artist.id}
              name={artist.name}
              image={artist.image}
              description={artist.description}
            />
          </Link>
        </Col>
      );
    });
  };

  return (
    <>
      <Row className="m-3">
        <Link to="/newartist">
          <Button variant="primary">New Artist</Button>
        </Link>
      </Row>
      <Row className="m-3">
        <InputGroup>
          <FormControl
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </InputGroup>
      </Row>

      <Row className="g-4">{createArtistList()}</Row>
    </>
  );
};

export default ArtistList;
