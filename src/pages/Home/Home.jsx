import BetBlock from '../../components/BetBlock/BetBlock';
import styles from './Home.module.css'
import {useSelector} from "react-redux";
import {getItems} from "../../store/reducers/items/selector";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Home = () => {
    const [searchValue, setSearchValue] = useState('')

    const navigate = useNavigate()

    const items = useSelector(getItems)

    const handleCreateItem = () => {
        navigate('/create-item')
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.searchWrapper}>
                    <div className={styles.searchTitle}>Find Item</div>
                    <div className={styles.inputWrapper}>
                        <input onChange={handleSearch} className={styles.input} placeholder="Name"/>
                    </div>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.searchWrapper}>
                    <div className={styles.searchTitle}>ITEMS LIST</div>
                    {
                        // @ts-ignore
                        items && items
                            .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((item, index) => (
                            <BetBlock rating={0} key={index} {...item} />
                        ))}
                </div>
            </div>
            <div className={styles.addRoomWrapper}>
                <button onClick={handleCreateItem} className={styles.addRoomButton}>
                    <span className={styles.addRoomText}>CREATE ITEM</span>
                </button>
            </div>
        </main>
    );
};

export default Home;
