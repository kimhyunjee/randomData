import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/dogView">
        <button>Dog View</button>
      </Link>
      <Link to="/randomQuotes">
        <button>Random Quotes</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/todo">
        <button>Todo</button>
      </Link>
      <Link to="/simpleCounter">
        <button>Simple Counter</button>
      </Link>
      <Link to="/randomColor">
        <button>Random Color</button>
      </Link>
      <Link to="/watch">
        <button>Stop Watch</button>
      </Link>
    </>
  );
}

export default App;
