import CharacterType from "../interfaces/Character";
import styles from "../styles/Character.module.css";

interface Props {
  data: CharacterType;
}

const Character: React.FC<Props> = ({ data }) => {
  return (
    <div className={`${styles["char-info"]}`}>
      <h2>{data.name}</h2>
      <div className={`${styles["char-image-container"]}`}>
        <img
          className={`${styles["char-image"]} ${styles["move-animation"]}`}
          src={data.img}
        ></img>
      </div>
      <p>{data.description}</p>
    </div>
  );
};
export default Character;
