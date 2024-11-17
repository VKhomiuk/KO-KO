import {useNavigate} from "react-router-dom";
import styles from "./BetBlock.module.css";
import {useDispatch} from "react-redux";
import {itemsActionCreator} from "../../store/reducers/items/actions";

const BetBlock = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { name, description, price, id, counter } = props;

    const handleRemoveItem = () => {
        dispatch(itemsActionCreator.removeItem(id))
    }

    const handleIncreaseCounter = () => {
        dispatch(itemsActionCreator.changeCounter({id, counter: counter + 1 }))
    }

    const handleDecreaseCounter = () => {
        if (counter !== 0) {
            dispatch(itemsActionCreator.changeCounter({id, counter: counter - 1 }))
        }
    }

    const handleUpdateItem = () => {
        navigate(`/update-item/${id}`)
    }

    return (
        <div className={styles.betWrapper}>
            <div className={styles.betHeader}>
                <span className={styles.title}>{name}</span>
                <span className={styles.id}>ID: {id}</span>
            </div>
            <div className={styles.betBody}>
                <div className={styles.descriptionWrapper}>
                    <span className={styles.description}>{description}</span>
                    <span className={styles.price}>{price} ₴</span>
                </div>
                <div className={styles.counterWrapper}>
                    <div onClick={handleDecreaseCounter} className={styles.count}>-</div>
                    <span className={styles.counter}>{counter}</span>
                    <div onClick={handleIncreaseCounter} className={styles.count}>+</div>
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
                <button onClick={handleRemoveItem} data-button-type="red" className={styles.button}>
                    <span className={styles.buttonText}>Remove</span>
                </button>
                <button onClick={handleUpdateItem}  data-button-type="yellow" className={styles.button}>
                    <span className={styles.buttonText}>Update</span>
                </button>
            </div>
        </div>
    );
};

export default BetBlock;
