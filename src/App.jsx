import { Header } from './components/header'
import {Post} from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Fipao"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vitae pariatur! Repudiandae dignissimos totam mollitia quos recusandae? Veritatis, totam nemo! Minima voluptatibus repellat dignissimos expedita atque veniam exercitationem repellendus nihil!"
          />
          <Post
            author="John"
            content="Outra msg"
          />

        </main>
      </div>
    </div>
   
  )
}



