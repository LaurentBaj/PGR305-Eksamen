import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";
import { Link } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumItem } from "./AlbumItem";

export const AlbumList: FC = () => {
    const { albums, loading } = useContext(ArtistContext) as ArtistContextType;

    const createArtistList = () => {
        if (loading) {
            return (
                <Col className="text-center">
                    <LoadingSpinner />
                </Col>
            );
        }

        return albums.map((album: IAlbum, key: number) => {
            return (
                <>
                    <AlbumItem name={album.name} songs={album.songs} artist_id={""} />
                </>
            );
        });
    };

    return <Row className="g-4">{createArtistList()}</Row>;
};

