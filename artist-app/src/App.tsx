import "bootstrap/dist/css/bootstrap.min.css";
import { ArtistProvider } from "./contexts/ArtistContext";
import Routing from "./routing/Routing";
import "./styles.css";

function App() {
  return (
    <div>
      <ArtistProvider>
        <Routing />
      </ArtistProvider>
    </div>
  );
}

export default App;
