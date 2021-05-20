import Image from "./Image";
import "./Game.css";
import catImage from "./images/cat.jpg";
import dogImage from "./images/dogs.jpg";
import elephantImage from "./images/elephant.jpg";
import giraffeImage from "./images/giraffe.jpg";

const Game = () => {
  const button1 = (
    <Image
      id="button1"
      text="1"
      key="1"
      onClick={disableButton}
      src={catImage}
      alt="cat"
    />
  );
  const button2 = (
    <Image
      id="button2"
      text="2"
      key="2"
      onClick={disableButton}
      src={dogImage}
      alt="dog"
    />
  );
  const button3 = (
    <Image
      id="button3"
      text="3"
      key="3"
      onClick={disableButton}
      src={elephantImage}
      alt="elephant"
    />
  );
  const button4 = (
    <Image
      id="button4"
      text="4"
      key="4"
      onClick={disableButton}
      src={giraffeImage}
      alt="giraffe"
    />
  );

  var startTime;
  var endTime;

  function disableButton() {
    endTime = performance.now();
    console.log(endTime - startTime);
  }

  let arrayOfButtons = [{ button1 }, { button2 }, { button3 }, { button4 }];

  function enableButton() {
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;

    var random = Math.random() * arrayOfButtons.length;
    var number = Math.floor(random) + 1;
    const name = "button" + number;
    var button = document.getElementById(name);

    setTimeout(() => {
      button.disabled = false;
      startTime = performance.now();
    }, 3000);
  }

  return (
    <div className="game">
      <div className="images">
        {button1}
        {button2}
        {button3}
        {button4}
      </div>
      <button className="game_button" onClick={enableButton}>
        Start Game
      </button>
    </div>
  );
};

export default Game;
