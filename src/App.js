import "./App.css";
import calling from "./Images/calling.png";
import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="left-container">
          <Left />
        </div>
        <div className="right-container">
          <div className="img-container">
            <img id="main-img" src={calling} alt="video call" />
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
        <div className="btn-container">
          <Link to="/success">
            {" "}
            <a>
              <button>Subscribe to a Monthly Newsletter</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Success = () => {
  return (
    <>
      <div className="App">
        <div className="tc">
          <Link to="/">
            {" "}
            <FontAwesomeIcon size="2x" className="icon home" icon={faHome} />
          </Link>

          <div className="main-container success">
            <div className="content-container success">
              <div className="icon-container">
                <FontAwesomeIcon
                  className="icon"
                  size="3x"
                  icon={faCheckCircle}
                />
              </div>
              <h1>Thanks for Subscribing</h1>
              <p>
                a confirmation email has been sent to{" "}
                <span>JohnDoe123@gmail.com</span>. Please open it and click the
                button inside to confirm your subscription
              </p>
              <button>Lorem sample text</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
