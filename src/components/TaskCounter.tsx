import styles from '../components/Tasks.module.css';

export function TaskCounter({quantity,task}:any){

    return (
        <div className={styles.taskCounter}>
            {task}
            <span>
                {quantity}
            </span>
        </div>
    )
}