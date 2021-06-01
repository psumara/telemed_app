import { Fragment } from "react";
import "./Result.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ResultOverlay = (props) => {
  return (
    <div className="result">
      <div className="content">{props.children}</div>
      <button className="try_again_button" onClick={props.onClose}>
        Spróbuj ponownie
      </button>
      <a href="/scoreboard">
        <button className="try_again_button" onClick={props.onClose}>
          Zobacz najlepsze wyniki
        </button>
      </a>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Result = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ResultOverlay onClose={props.onClose}>{props.children}</ResultOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Result;
