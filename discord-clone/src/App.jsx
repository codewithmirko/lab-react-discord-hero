import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import bigPicture from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <nav className="navMenu">
        <img className="discordLogo" src={discordLogo} alt="" />
        <img className="menuIcon" src={menuIcon} alt="" />
      </nav>
      <header className="heroSection">
        <h1>Imagine a place...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, oe a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button className="primaryBtn">Download for Mac</button>
        <button className="secondaryBtn">Open discord in your browser</button>
        <img className="heroPicture" src={bigPicture} alt="" />
      </header>
    </div>
  );
}

export default App;
