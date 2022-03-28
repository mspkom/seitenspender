import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="seitenspender logo" className="App-image" />
        <h1>SEITENSPENDER</h1>
        <p>
          Welcome to SEITENSPENDER, the frontend library of choice for creating
          internet blogs.
        </p>
        <p>You can use SEITENSPENDER on ReactJS, SvelteJS and VueJS.</p>
      </header>
      <div class="forkme">
        <a
          class="forkmeLink"
          href="https://github.com/mspkom/seitenspender"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;
        </a>
      </div>
    </div>
  );
}

export default App;
