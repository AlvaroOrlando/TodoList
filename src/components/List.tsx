
import styles from './List.module.css'

interface ListProps {
  id:string;
  onChange: React.ChangeEventHandler;
  content:string;
  checked:boolean
}

export function List({onChange, content, checked}:ListProps){

    return (
      <>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span
         className={styles.text}
        >
          {content}
        </span>
      </>
    )
}