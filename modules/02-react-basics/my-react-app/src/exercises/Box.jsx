import styles from "./Box.module.css";

function Box() {
  return (
    <div className={styles.box} style={{ color: "purple", fontSize: "40px" }}>
      Lorem ipsum
    </div>
  );
}

export default Box;

