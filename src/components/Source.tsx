import { useState } from "react";
import styles from "../styles/Source.module.css";
let audio = new Audio("darkness.mp3");

interface Props {
  data: { name: string; img: string; url: string };
}

const Source: React.FC<Props> = ({ data }) => {
  function easterEgg(name: string) {
    if (name === "χ") {
      audio.play();
      setActivated(true);
    }
  }
  const [activated, setActivated] = useState(false);
  return (
    <div className={`${styles["source"]}`}>
      <a href={data.url} target="_blank">
        <div className={`${styles["source-icon"]}`}>
          <img src={data.img}></img>
        </div>
      </a>
      <span
        onClick={() => easterEgg(data.name)}
        className={`${styles["label"]}`}
      >
        {activated ? "DARKNESS!!!!!" : data.name}
        <span></span>
      </span>
    </div>
  );
};
export default Source;
