import { useEffect } from "react";
import styles from "../styles/Fullscreen.module.css";

import Card from "./Card";

interface Props {
  currentScreenshot: string;
  setCurrentScreenshot: any;
  iterate: any;
}

const Fullscreen: React.FC<Props> = ({
  currentScreenshot,
  setCurrentScreenshot,
  iterate,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        setCurrentScreenshot(-1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`${styles["fullscreen-container"]}`}>
      <div
        className={`${styles["overlay"]}`}
        onClick={() => setCurrentScreenshot(-1)}
      ></div>
      <div className={`${styles["fullscreen-content"]}`}>
        <button
          onClick={() => setCurrentScreenshot(-1)}
          className={`${styles["close-button"]} ${styles["control"]}`}
        >
          <span className={`${styles["chi"]}`}>χ</span>
        </button>
        <Card>
          <img
            style={{ maxWidth: "100%", maxHeight: "80dvh" }}
            src={currentScreenshot}
          ></img>
          <div className={`${styles["controls"]}`}>
            <button
              onClick={() => {
                iterate(-1);
              }}
              className={`${styles["control"]}`}
            >
              <img src="icons/menuglove.png"></img>
            </button>
            <button
              onClick={() => {
                iterate(1);
              }}
              className={`${styles["control"]}`}
            >
              <img src="icons/menuglove.png"></img>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Fullscreen;
