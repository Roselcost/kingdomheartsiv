import WorldType from "../interfaces/World";
import styles from "../styles/World.module.css";

interface Props {
  data: WorldType;
}

const World: React.FC<Props> = ({ data }) => {
  return (
    <div className={`${styles["world"]}`}>
      <div
        style={{
          backgroundImage: `url('${data.img}')`,
        }}
        className={`${styles["world-bg"]}`}
      ></div>
      <div className={`${styles["world-info"]}`}>
        <img className={`${styles["world-image"]}`} src={data.img}></img>
        <div className={`${styles["world-details"]}`}>
          <h2>{data.name}</h2>
          <div className={`${styles["world-details-decoration"]}`}>
            <span className={`${styles["first-appearance"]}`}>
              First appearance
            </span>
            <span className={`${styles["appears"]}`}> {data.media}</span>
          </div>
          <p className={`${styles["description"]}`}>{data.description}</p>
        </div>
      </div>
    </div>
  );
};
export default World;
