import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../../store/reducers/items/selector";
import {useNavigate, useParams} from "react-router-dom";
import styles from "../Home/Home.module.css";
import {useEffect, useState} from "react";
import {itemsActionCreator} from "../../store/reducers/items/actions";


const CreateItem = () => {
    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        price: ''
    })
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const items = useSelector(getItems)

    const params = useParams();

    const { id } = params

    const editItem = items.find(item => item.id === +id)

    useEffect(() => {
        if (editItem) {
            setNewItem(editItem)
        }
    }, []);

    const handleCreateItem = () => {
        if (id) {
            dispatch(itemsActionCreator.updateItem({
                ...newItem,
                id: +id
            }))
            navigate('/')
            return
        }
        dispatch(itemsActionCreator.addItem({
            ...newItem,
            id: items.length + 1,
            counter: 0
        }))
        navigate('/')
    }

    const handleNameChange = (e) => {
        setNewItem({
            ...newItem,
            name: e.target.value
        })
    }

    const handleDescriptionChange = (e) => {
        setNewItem({
            ...newItem,
            description: e.target.value
        })
    }

    const handlePriceChange = (e) => {
        setNewItem({
            ...newItem,
            price: e.target.value
        })
    }

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.searchWrapper}>
                    <div className={styles.searchTitle}>Create Item</div>
                    <div className={styles.inputWrapper}>
                        <input onChange={handleNameChange} className={styles.input} value={newItem.name} placeholder="Name"/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input onChange={handleDescriptionChange} className={styles.input} value={newItem.description} placeholder="Description"/>
                    </div><
                    div className={styles.inputWrapper}>
                        <input onChange={handlePriceChange} className={styles.input} value={newItem.price} type='number' placeholder="Price"/>
                    </div>
                </div>
            </div>
            <div className={styles.addRoomWrapper}>
                <button onClick={handleCreateItem} className={styles.addRoomButton}>
                    <span className={styles.addRoomText}>{id ? 'UPDATE ITEM' : 'CREATE ITEM'}</span>
                </button>
            </div>
        </main>
    );
};

export default CreateItem;
