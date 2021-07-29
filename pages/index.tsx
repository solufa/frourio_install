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
            <div className={styles.parent}></div>
          </div>
          <div className={styles.child}>
            <div className={styles.square_border1}></div>
            <div className={styles.square_border2}></div>
            <div className={styles.square_border3}></div>
            <div className={styles.square_border4}></div>
            <div className={styles.square_border5}></div>
            <div className={styles.square_border6}></div>
            <div className={styles.square_border7}></div>
            <div className={styles.square_border8}></div>
            <div className={styles.square_border9}></div>
            <div className={styles.square_border10}></div>
            <div className={styles.square_border11}></div>
            <div className={styles.square_border12}></div>
            <div className={styles.square_border13}></div>
            <div className={styles.square_border14}></div>
            <div className={styles.square_border15}></div>
            <div className={styles.square_border16}></div>
            <div className={styles.square_border17}></div>
            <div className={styles.square_border18}></div>
            <div className={styles.square_border19}></div>
            <div className={styles.square_border20}></div>
            <div className={styles.square_border21}></div>
            <div className={styles.square_border22}></div>
            <div className={styles.square_border23}></div>
            <div className={styles.square_border24}></div>
            <div className={styles.square_border25}></div>
            <div className={styles.square_border26}></div>
            <div className={styles.square_border27}></div>
            <div className={styles.square_border28}></div>
            <div className={styles.square_border29}></div>
            <div className={styles.square_border30}></div>
            <div className={styles.square_border31}></div>
            <div className={styles.square_border32}></div>
            <div className={styles.square_border33}></div>
            <div className={styles.square_border34}></div>
            <div className={styles.square_border35}></div>
            <div className={styles.square_border36}></div>
            <div className={styles.square_border37}></div>
            <div className={styles.square_border38}></div>
            <div className={styles.square_border39}></div>
            <div className={styles.square_border40}></div>
            <div className={styles.square_border41}></div>
            <div className={styles.square_border42}></div>
            <div className={styles.square_border43}></div>
            <div className={styles.square_border44}></div>
            <div className={styles.square_border45}></div>
            <div className={styles.square_border46}></div>
            <div className={styles.square_border47}></div>
            <div className={styles.square_border48}></div>
            <div className={styles.square_border49}></div>
            <div className={styles.square_border50}></div>
            <div className={styles.square_border51}></div>
            <div className={styles.square_border52}></div>
            <div className={styles.square_border53}></div>
            <div className={styles.square_border54}></div>
            <div className={styles.square_border55}></div>
            <div className={styles.square_border56}></div>
            <div className={styles.square_border57}></div>
            <div className={styles.square_border58}></div>
            <div className={styles.square_border59}></div>
            <div className={styles.square_border60}></div>
            <div className={styles.square_border61}></div>
            <div className={styles.square_border62}></div>
            <div className={styles.square_border63}></div>
            <div className={styles.square_border64}></div>
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
