import styles from './page.module.css'
import TodoList from './todolist'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <TodoList />
      </div>
    </main>
  )
}
