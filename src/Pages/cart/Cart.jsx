import { Button, Input } from "@mui/material";
import styles from "./Cart.module.css";
import CartData from "./CartData";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <main className={styles.main}>
        <table className={styles.table}>
          <tr className={styles.tableHeader}>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>

          <CartData />
        </table>

        <div className={styles.cartBtns}>
          <Button>Return to Shop</Button>
          <Button>Update Cart</Button>
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.coupon}>
            <Input type="text" placeholder="Coupon Code" />
            <Button>Apply Coupon</Button>
          </div>

          <div className={styles.cartTotal}>
            <h2>Cart Total</h2>
            <p>
              Subtotal:<span>123</span>
            </p>
            <p>
              Shipping:<span>Free</span>
            </p>
            <p className="border-none">
              Total:<span>123</span>
            </p>

            <div className={styles.checkoutBtn}>
              <Link to="/cart/checkout">
                <Button>Process to Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
