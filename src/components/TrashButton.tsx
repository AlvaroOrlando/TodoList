import styles from './TrashButton.module.css'




export function TrashButton({onClick}:any){
    return (
        <button 
            type='button'
            onClick={onClick}
            className={styles.span}>
        </button>
    )
}