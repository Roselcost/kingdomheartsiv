import styles from "../styles/Card.module.css";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={`${styles["card"]}`}>
      <div className={`${styles["card-decoration"]}`}></div>
      <div className={`${styles["card-corners"]}`}>
        {[...Array(4)].map((_, i) => (
          <img key={i} src="icons/logo.png"></img>
        ))}
      </div>
      <h2 className={`${styles["card-title"]}`}>{title}</h2>
      <div className={`${styles["card-content"]}`}>{children}</div>
    </div>
  );
};
export default Card;
