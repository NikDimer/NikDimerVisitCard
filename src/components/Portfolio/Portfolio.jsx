import styles from './styles.module.css'
import Image from 'next/image'
import classnames from 'classnames'

import { filtersList } from '../../constants/mock.js'


export default function Portfolio() {
    return (
        <div className={styles.PortfolioMain}>
            <h1 className={styles.PortfolioTitle}>Портфолио</h1>

            <ul className={styles.PortfolioFiltersGroup}>
                {filtersList.map((filter) => {
                    return (
                        <li className={styles.PortfolioFiltersGroupItem} onClick={() => {
                            if (document || false) {
                                let tz = document.querySelector('.' + styles.PortfolioFiltersGroup + '>li:nth-child(' + filter.num + ')');
                                if (tz.classList.contains(styles.PortfolioFiltersGroupItemActive)) {
                                    tz.classList.remove(styles.PortfolioFiltersGroupItemActive);
                                } else {
                                    tz.classList.add(styles.PortfolioFiltersGroupItemActive);
                                }
                            }
                        }}
                            key={filter.id}
                        >
                            <p className={styles.PortfolioFiltersGroupItemText}>{filter.name}</p>
                        </li>
                    )
                })}
            </ul>
            <ul className={styles.PortfolioProjectCardsGroup}>
                <li className={styles.PortfolioProjectCardsGroupItem}></li>
                <li className={styles.PortfolioProjectCardsGroupItem}></li>
                <li className={styles.PortfolioProjectCardsGroupItem}></li>
                <li className={styles.PortfolioProjectCardsGroupItem}></li>
                <li className={styles.PortfolioProjectCardsGroupItem}></li>
                <li className={styles.PortfolioProjectCardsGroupItem}></li>
            </ul>
            <p className={styles.PortfolioAllProjectsLinkText}>Все примеры работ</p>
        </div >
    )
}