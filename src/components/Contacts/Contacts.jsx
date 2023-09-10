import styles from './styles.module.css'
import Image from 'next/image'
import classnames from 'classnames'

import tgIcon from '@/src/assets/images/tg-icon.png'
import ghIcon from '@/src/assets/images/gh-icon.png'
import gmIcon from '@/src/assets/images/gm-icon.png'

export default function Contacts() {
    return (
        <div className={styles.ContactsMain}>
            <h1 className={styles.ContactsTitle}>Связаться со мной</h1>
            <form className={styles.ContactsForm}>
                <input className={classnames(styles.ContactsFormItem, styles.ContactsFormName)} type='text' placeholder='Ваше имя' required={true} />
                <input className={classnames(styles.ContactsFormItem, styles.ContactsFormTheme)} type='text' placeholder='Тема сообщения' required={true} />
                <input className={classnames(styles.ContactsFormItem, styles.ContactsFormBackContact)} type='text' placeholder='Ваша почта или telegram' required={true} />
                <textarea className={classnames(styles.ContactsFormItem, styles.ContactsFormMessageText)} placeholder='Ваше сообщение' required={true} />
                <input className={classnames(styles.ContactsFormItem, styles.ContactsFormSubmitButton)} value='Отправить' type='submit' />
            </form>
            <div className={styles.ContactsIconsGroup}>
                <Image className={styles.ContactsIconsGroupItem} src={tgIcon} />
                <Image className={styles.ContactsIconsGroupItem} src={ghIcon} />
                <Image className={styles.ContactsIconsGroupItem} src={gmIcon} />
            </div>
        </div>
    )
}