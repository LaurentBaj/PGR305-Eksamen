import "./App.css";
import { ArtistProvider } from "./contexts/ArtistContext";
import ArtistList from "./components/Artist/ArtistList";

function App() {
  return (
    <div>
      <h1>Artist Page</h1>
      <ArtistProvider>
        <ArtistList />
      </ArtistProvider>
    </div>
  );
}

export default App;
