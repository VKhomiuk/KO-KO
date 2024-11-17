import styles from "./Tab.module.css";
import React, {useId} from "react";
import {Link} from "react-router-dom";

const Tab = (props) => {
    const {path, isActive, title} = props;

    const key = useId()

    return (
        <Link to={path} data-active={isActive} className={styles.tab}
                key={key}>
            <span>
                {title}
            </span>
        </Link>
    )
}

export default Tab;
