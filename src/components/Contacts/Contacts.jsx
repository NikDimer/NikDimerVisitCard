import styles from './styles.module.css'
import Image from 'next/image'
import classnames from 'classnames'

import tgIcon from '../../../src/assets/images/tg-icon.png'
import ghIcon from '../../../src/assets/images/gh-icon.png'
import gmIcon from '../../../src/assets/images/gm-icon.png'

export default function Contacts() {
    return (
        <div className={styles.ContactsMain}>
            <h1 className={styles.ContactsTitle}>Связаться со мной</h1>
            <form className={styles.ContactsForm} action="" method="post">
                <input className={classnames(styles.ContactsFormItem, styles.ContactsFormName)} id='name' type='text' placeholder='Ваше имя' required={true} />
                <input className={classnames(styles.ContactsFormItem, styles.ContactsFormTheme)} id='theme' type='text' placeholder='Тема сообщения' required={true} />
                <input className={classnames(styles.ContactsFormItem, styles.ContactsFormBackContact)} id='contact' type='text' placeholder='Ваша почта или telegram' required={true} />
                <textarea className={classnames(styles.ContactsFormItem, styles.ContactsFormMessageText)} id='message' placeholder='Ваше сообщение' required={true} />
                <input className={classnames(styles.ContactsFormItem, styles.ContactsFormSubmitButton)} value='Отравить' type='submit'/* onClick={
                    async () => {
                        let params = 'name=' + encodeURIComponent(document.getElementById("name").value) +
                            'theme=' + encodeURIComponent(document.getElementById("theme").value) +
                            'contact=' + encodeURIComponent(document.getElementById("contact").value) +
                            'message=' + encodeURIComponent(document.getElementById("message").value);
                        let url = 'http://localhost:3000/api/hello?' + params;
                        let response = await fetch(url);

                        let hell = await response.json(); // читаем ответ в формате JSON

                        console.log(hell);
                    }
                }*//>
            </form>
            <div className={styles.ContactsIconsGroup}>
                <Image className={styles.ContactsIconsGroupItem} src={tgIcon} />
                <Image className={styles.ContactsIconsGroupItem} src={ghIcon} />
                <Image className={styles.ContactsIconsGroupItem} src={gmIcon} />
            </div>
        </div>
    )
}