import logo from "./logo.svg";
import "./App.css";
import Arrow from "./arrow";
import WorkCard from "./workcard";

function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="left-panel">
        <div className="photo-placeholder">
          <img
            src={require("./Sanu,SohumPhoto.png")}
            className="sohum-photo"
            alt="logo"
          />
        </div>
      </div>
      <div className="right-panel">
        <div className="navbar">
          <span className="nav-item">Home</span>
          <span className="nav-item">My Work</span>
          <span className="nav-item">About Me</span>
          <span className="nav-item">Contact</span>
        </div>
        <div className="content">
          <p className="intro-text">
            Hi 👋 I'm Sohum. I'm a product-manager, entrepreneur, and developer.
            I love people and bring a psychology-first perspective to all the
            products I built.
          </p>
          <div className="button-container">
            <button className="button">See My Work</button>
            <button className="button">Contact Me</button>
          </div>
          <Arrow fill="#000000" height="50px" width="50px" />
        </div>
      </div>
      </div>
      <div className="worksection">
        <div className="worktitle">
          <h1>My Work</h1>
        </div>
        <div className="workcards">
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    </div>
  );
}

export default App;
