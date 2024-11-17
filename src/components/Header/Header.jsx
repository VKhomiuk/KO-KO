import React from "react";
import {useLocation} from "react-router-dom";
import styles from './Header.module.css';
import Tab from "../Tab/Tab";

const Header = () => {
    const location = useLocation();


    const tabsConfig = [
        {
            pathname: '/',
            title: 'Home'
        },
        {
            pathname: '/calculation',
            title: 'Calculation'
        }
    ]

    return (
        <header className={styles.header}>
            <div className={styles.connectWalletWrapper} style={{
                justifyContent: 'flex-start'
            }}>
                <div className={styles.logoWrapper}>
                    {/*<img alt='tonLogo' src={TonLogo}/>*/}
                    {/*<BetLogo className={styles.logo} />*/}
                </div>
            </div>
            <div className={styles.navigationWrapper}>
                {tabsConfig.map(tab => {
                    return (
                        <Tab
                            key={tab.pathname}
                            title={tab.title}
                            path={tab.pathname}
                            isActive={location.pathname === tab.pathname}
                        />
                    )
                })}
            </div>
        </header>
    );
}

export default React.memo(Header);
