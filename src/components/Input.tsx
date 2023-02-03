import styles from '../components/Input.module.css'



export function Input(props:any){
  
  return (
        <input
          placeholder='Adicione uma nova tarefa' 
          className={styles.input}
          name="task"
          required
         {...props}
          >
        </input>
  )
}