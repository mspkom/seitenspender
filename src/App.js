import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="seitenspender logo" width="20%" />
        <h1>SEITENSPENDER</h1>
        <p>
          Welcome to SEITENSPENDER, the front-end library of choice for creating
          internet blogs.
        </p>
        <p>You can clone or fork SEITENSPENDER on GitHub.</p>
        <p>
          <a
            href="https://github.com/mspkom/seitenspender"
            target="_blank"
            rel="noreferrer"
          >
            SEITENSPENDER on GitHub
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
