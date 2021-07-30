import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import UserBanner from '~/components/UserBanner'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'

const Home = () => {
  const { data: tasks, error, revalidate } = useAspidaSWR(apiClient.tasks)
  const [label, setLabel] = useState('')
  const inputLabel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    []
  )

  const createTask = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!label) return

      await apiClient.tasks.post({ body: { label } })
      setLabel('')
      revalidate()
    },
    [label]
  )

  const toggleDone = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
    revalidate()
  }, [])

  const deleteTask = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).delete()
    revalidate()
  }, [])

  if (error) return <div>failed to load</div>
  if (!tasks) return <div>loading...</div>
  
  return (
    <div className={styles.container}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.square}>
          <div className={styles.squareIn}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
            <div className={styles.box4}></div>
            <div className={styles.box5}></div>
            <div className={styles.box6}></div>
            <div className={styles.box7}></div>
            <div className={styles.box8}></div>
            <div className={styles.box9}></div>
            <div className={styles.box10}></div>
            <div className={styles.box11}></div>
            <div className={styles.box12}></div>
            <div className={styles.box13}></div>
            <div className={styles.box14}></div>
            <div className={styles.box15}></div>
            <div className={styles.box16}></div>
            <div className={styles.box17}></div>
            <div className={styles.box18}></div>
            <div className={styles.box19}></div>
            <div className={styles.box20}></div>
            <div className={styles.box21}></div>
            <div className={styles.box22}></div>
            <div className={styles.box23}></div>
            <div className={styles.box24}></div>
            <div className={styles.box25}></div>
            <div className={styles.box26}></div>
            <div className={styles.box27}></div>
            <div className={styles.box28}>
              <div className={styles.circle1}></div>
            </div>
            <div className={styles.box29}>
              <div className={styles.circle2}></div>
            </div>
            <div className={styles.box30}></div>
            <div className={styles.box31}></div>
            <div className={styles.box32}></div>
            <div className={styles.box33}></div>
            <div className={styles.box34}></div>
            <div className={styles.box35}></div>
            <div className={styles.box36}>
              <div className={styles.circle4}></div>
            </div>
            <div className={styles.box37}>
              <div className={styles.circle3}></div>
            </div>
            <div className={styles.box38}></div>
            <div className={styles.box39}></div>
            <div className={styles.box40}></div>
            <div className={styles.box41}></div>
            <div className={styles.box42}></div>
            <div className={styles.box43}></div>
            <div className={styles.box44}></div>
            <div className={styles.box45}></div>
            <div className={styles.box46}></div>
            <div className={styles.box47}></div>
            <div className={styles.box48}></div>
            <div className={styles.box49}></div>
            <div className={styles.box50}></div>
            <div className={styles.box51}></div>
            <div className={styles.box52}></div>
            <div className={styles.box53}></div>
            <div className={styles.box54}></div>
            <div className={styles.box55}></div>
            <div className={styles.box56}></div>
            <div className={styles.box57}></div>
            <div className={styles.box58}></div>
            <div className={styles.box59}></div>
            <div className={styles.box60}></div>
            <div className={styles.box61}></div>
            <div className={styles.box62}></div>
            <div className={styles.box63}></div>
            <div className={styles.box64}></div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home
