import styles from '../components/CreateButton.module.css';
import plus from '../assets/plus.png'

export function CreateButton(){
    return (
        <button  
         type="submit"
         className={styles.button}>
            <span className={styles.text}>Criar</span>
            <span className={styles.plus}>
                <img src={plus} alt="" />
            </span>
        </button>
    )
}