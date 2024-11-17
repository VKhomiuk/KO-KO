import {useSelector} from "react-redux";
import {getItems} from "../../store/reducers/items/selector";
import ExcelExport from "../../components/ExcelExport/ExcelExport";
import styles from './Calculation.module.css'

const Home = () => {

    const items = useSelector(getItems)

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.searchWrapper}>
                    <div className={styles.searchTitle}>Calculations</div>
                </div>
                <div>
                    {items.filter(({counter}) => counter > 0).length && items
                        .filter(({counter}) => counter > 0)
                        .map(({id, name, price, counter, description}) => (
                            <div key={id} className={styles.item}>
                                <div>
                                    <div className={styles.itemName}>{name}</div>
                                    <div className={styles.itemPrice}>{description}</div>
                                </div>

                                <div className={styles.itemTotal}>{price * counter} ₴</div>
                            </div>
                        ))}

                    <div className={styles.separator}/>
                    <div className={styles.totalWrapper}>
                        <span className={styles.total}>Total:</span>
                        <span className={styles.totalPrice}>{items.reduce((acc, {price, counter}) => acc + price * counter, 0)} ₴</span>
                    </div>
                </div>
            </div>
            <ExcelExport data={
                items
                    .filter(({counter}) => counter > 0)
                    .map(({id, name, price, counter}) => ({id, name, price, counter, total: price * counter}))
                    .concat({id: '', name: '', price: '', counter: '', total: items.reduce((acc, {price, counter}) => acc + price * counter, 0)})
            } fileName={`calculation${new Date()}`}/>
        </main>
    );
};

export default Home;
