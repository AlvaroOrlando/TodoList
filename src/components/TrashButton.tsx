import styles from './TrashButton.module.css'


interface TrashButtonProps {
    onClick: React.MouseEventHandler;
  }

export function TrashButton({onClick}:TrashButtonProps){
    return (
        <button 
            type='button'
            onClick={onClick}
            className={styles.span}>
        </button>
    )
}