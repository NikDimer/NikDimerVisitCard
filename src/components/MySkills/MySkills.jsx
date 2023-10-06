import styles from './styles.module.css'
import Image from 'next/image'
import classnames from 'classnames'

import mine1 from '../../../src/assets/images/mine 1.png'
import mine2 from '../../../src/assets/images/mine 2.png'
import mine3 from '../../../src/assets/images/mine 3.png'
import mine4 from '../../../src/assets/images/mine 4.png'
import mine5 from '../../../src/assets/images/mine 5.png'
import mine6 from '../../../src/assets/images/mine 6.png'

export default function MySkills() {
    return (
        <div className={styles.MySkillsMain}>
            <h1 className={styles.MySkillsTitle}>Мои технологии</h1>
            <ul className={styles.MySkillsList}>
                <li className={styles.MySkillsListItem}><Image src={mine1} /></li>
                <li className={styles.MySkillsListItem}><Image src={mine2} /></li>
                <li className={styles.MySkillsListItem}><Image src={mine3} /></li>
                <li className={styles.MySkillsListItem}><Image src={mine4} /></li>
                <li className={styles.MySkillsListItem}><Image src={mine5} /></li>
                <li className={styles.MySkillsListItem}><Image src={mine6} /></li>
            </ul>
            <div className={styles.MySkillsDescriptionList}>
                <p className={styles.MySkillsDescriptionListItem}>Кроме того у меня есть теоретическое понимание БЭМ, я имею неплохие навыки роботы с Next.js, Swiper.js, Three.js, приходилось сталкиваться с JQuery, SQL, PHP, Python(немного Flask и Django, простые tg-боты).</p>
                <p className={styles.MySkillsDescriptionListItem}>Могу верстать адаптивно и кроссбраузерно. Более или менее умею писать unit тесты при помощи hermione и jest, но пока ещё этому учусь. Знаю основы асинхронного Js. Умею работать с Git.</p>
                <p className={styles.MySkillsDescriptionListItem}>Я довольно быстро осваиваю новое, особенно если брать во внимание то, что многие технологии похожи между собой, если требуются какие-то другие(в том числе узкоспециализированные) знания, не перечисленные выше, я могу в довольно сжатые сроки изучить необходимые технологии.</p>
            </div>
        </div>
    )
}