
import styles from './List.module.css'

export function List({onChange, content,checked}:any){

    return (
      <div className={styles.input_container}>
        <input
          id='input'
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
      </div>
    )
}