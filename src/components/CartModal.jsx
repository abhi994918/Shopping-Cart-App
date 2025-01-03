import styles from "../styles/CartModal.module.css"
import { useValue } from "../itemContext";

function CartModal(){
   const {toggle,cart,total,reset} = useValue();
    return(
        
        <div className={styles.cartModal}>
            <div className={styles.closeButton}  onClick={toggle}>Close</div>
            <div className={styles.clearButton} onClick={reset}>Clear</div>
       

        <div className={styles.itemContainer}>
            {cart.map((item)=>
            {
                return(
                    <div className={styles.cartCard} key={item.id}>
                    <h1>{item.name}</h1>
                    <h3>x {item.qty}</h3>
                    <h3>{item.qty * item.price}</h3>
                    </div>
                )
            })}

        </div>

        <div className={styles.total}>
            <div className={styles.totalText}>Total</div>
            <div className={styles.totalPrice}> &#x20B9; {total}</div>

        </div>

        </div>
    )
}
export default CartModal;



