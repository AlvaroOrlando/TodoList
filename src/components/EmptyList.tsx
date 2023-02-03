import Clipboard from '../assets/Clipboard.png';
import styles from './EmptyList.module.css';



export function EmptyList(){
  
    return (
      <div className={styles.empty}>
        <img src={Clipboard} alt="Clipboard" />
        <div className={styles.text}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p className={styles.text2}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    )
  }

     