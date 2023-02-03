
import '../assets/rocket.png'
import rocket from '../assets/rocket.png';
import todo from '../assets/todo.png';
import { LogoImg } from './LogoImg';
import styles from './Logo.module.css'



export function Logo(){
    return (
        <div className={styles.logo}>
        <LogoImg
            className={styles.rocket}
            src={rocket}
            width="22px"
            height="36px"
        />
        <LogoImg
            className={styles.todo}
            src={todo}
            width="92px"
            height="30px"
        />
        </div>
    )
}