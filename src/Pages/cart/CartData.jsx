import styles from "./CartData.module.css";
import lcdMonitor from "../../assets/LCD_Monitor.png";

export default function CartData() {
  return (
    <>
      <td className={styles.product}>
        <span className={styles.productImage}>
          <img src={lcdMonitor} alt="img" className={styles.image} />
          Hello
        </span>

        <span>$123</span>

        <span className={styles.quantityInput}>
          <input type="number" />
        </span>

        <span>$12332</span>
      </td>

      <td className={styles.product}>
        <span className={styles.productImage}>
          <img src={lcdMonitor} alt="img" className={styles.image} />
          Hello
        </span>

        <span>$123</span>
        <span className={styles.quantityInput}>
          <input type="number" />
        </span>
        <span>$12332</span>
      </td>
    </>
  );
}
