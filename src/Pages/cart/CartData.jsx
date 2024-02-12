import styles from "./CartData.module.css";
import lcdMonitor from "../../assets/LCD_Monitor.png";

const products = [
  {
    image: lcdMonitor,
    name: "LCD Monitor",
    price: 123,
    total: 234,
  },
  {
    image: lcdMonitor,
    name: "LCD Monitor",
    price: 123,
    total: 234,
  },

  {
    image: lcdMonitor,
    name: "LCD Monitor",
    price: 123,
    total: 234,
  },
  {
    image: lcdMonitor,
    name: "LCD Monitor",
    price: 123,
    total: 234,
  },
];

export default function CartData() {
  return (
    <>
      {products.map((product) => (
        <tr key={product.name}>
          <td className={styles.product}>
            <span className={styles.productImage}>
              <img src={product.image} alt="img" className={styles.image} />
              {product.name}
            </span>
            <span>${product.price}</span>
            <span className={styles.quantityInput}>
              <input type="number" />
            </span>
            <span>${product.total}</span>
          </td>
        </tr>
      ))}
    </>
  );
}
