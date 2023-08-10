import "./App.css";
import calling from "./Images/calling.png";
import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="left-container">
          <Left />
        </div>
        <div className="right-container">
          <div>
            <img src={calling} alt="video call" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

export const Left = () => {
  return (
    <div className="content-container">
      <h1>Stay Updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on: </p>
      <ul>
        <li>
          {" "}
          <FontAwesomeIcon className="icon" icon={faCheckCircle} /> Product
          discovery and bulding what matters
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faCheckCircle} />
          Measuring to ensure updates are a success
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faCheckCircle} />
          And much more
        </li>
      </ul>
      <div className="email-container">
        <label for="email">Email</label>
        <input placeholder="enter email here" type="email" id="email" />
        <div className="btn-container"><a href=""><button>Subscribe to a Monthly Newsletter</button></a></div>
      </div>
    </div>
  );
};
