import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import UserBanner from '~/components/UserBanner'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import { getAllJSDocTagsOfKind } from 'typescript'

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

  const onClick = () => {
    alert(`クリックされました`)
  }

  const clickWhiteStone = (x: number, y: number) => {
    alert(`上から${x}行目、左から${y}行目の白い石がクリックされました`)
  }

  const clickBlackStone = (x: number, y: number) => {
    alert(`上から${x}行目、左から${y}行目の黒い石がクリックされました`)
  }

  const noStone = (x: number, y: number) => {
    alert(`上から${x}行目、左から${y}行目に石はありません`)
  }

  if (error) return <div>failed to load</div>
  if (!tasks) return <div>loading...</div>
  
  return (
    <div className={styles.container}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className="wrapper" onClick={onClick}>
          <div className={styles.square}>
            <div className={styles.squareIn}>
                <div className={styles.cell} onClick={() => {noStone(1, 1)}}></div>
                <div className={styles.cell} onClick={() => {noStone(1, 2)}}></div>
                <div className={styles.cell} onClick={() => {noStone(1, 3)}}></div>
                <div className={styles.cell} onClick={() => {noStone(1, 4)}}></div>
                <div className={styles.cell} onClick={() => {noStone(1, 5)}}></div>
                <div className={styles.cell} onClick={() => {noStone(1, 6)}}></div>
                <div className={styles.cell} onClick={() => {noStone(1, 7)}}></div>
                <div className={styles.cell} onClick={() => {noStone(1, 8)}}></div>
                <div className={styles.cell} onClick={() => {noStone(2, 1)}}></div>
                <div className={styles.cell} onClick={() => {noStone(2, 2)}}></div>
                <div className={styles.cell} onClick={() => {noStone(2, 3)}}></div>
                <div className={styles.cell} onClick={() => {noStone(2, 4)}}></div>
                <div className={styles.cell} onClick={() => {noStone(2, 5)}}></div>
                <div className={styles.cell} onClick={() => {noStone(2, 6)}}></div>
                <div className={styles.cell} onClick={() => {noStone(2, 7)}}></div>
                <div className={styles.cell} onClick={() => {noStone(2, 8)}}></div>
                <div className={styles.cell} onClick={() => {noStone(3, 1)}}></div>
                <div className={styles.cell} onClick={() => {noStone(3, 2)}}></div>
                <div className={styles.cell} onClick={() => {noStone(3, 3)}}></div>
                <div className={styles.cell} onClick={() => {noStone(3, 4)}}></div>
                <div className={styles.cell} onClick={() => {noStone(3, 5)}}></div>
                <div className={styles.cell} onClick={() => {noStone(3, 6)}}></div>
                <div className={styles.cell} onClick={() => {noStone(3, 7)}}></div>
                <div className={styles.cell} onClick={() => {noStone(3, 8)}}></div>
                <div className={styles.cell} onClick={() => {noStone(4, 1)}}></div>
                <div className={styles.cell} onClick={() => {noStone(4, 2)}}></div>
                <div className={styles.cell} onClick={() => {noStone(4, 3)}}></div>
                <div className={styles.cell}>
                  <div className={styles.stone1} onClick={() => {clickBlackStone(4, 4)}}></div>
                </div>
                <div className={styles.cell}>
                  <div className={styles.stone2} onClick={() => {clickWhiteStone(4, 5)}}></div>
                </div>
                <div className={styles.cell} onClick={() => {noStone(4, 6)}}></div>
                <div className={styles.cell} onClick={() => {noStone(4, 7)}}></div>
                <div className={styles.cell} onClick={() => {noStone(4, 8)}}></div>
                <div className={styles.cell} onClick={() => {noStone(5, 1)}}></div>
                <div className={styles.cell} onClick={() => {noStone(5, 2)}}></div>
                <div className={styles.cell} onClick={() => {noStone(5, 3)}}></div>
                <div className={styles.cell}>
                  <div className={styles.stone4} onClick={() => {clickWhiteStone(5, 4)}}></div>
                </div>
                <div className={styles.cell}>
                  <div className={styles.stone3} onClick={() => {clickBlackStone(5, 5)}}></div>
                </div>
                <div className={styles.cell} onClick={() => {noStone(5, 6)}}></div>
                <div className={styles.cell} onClick={() => {noStone(5, 7)}}></div>
                <div className={styles.cell} onClick={() => {noStone(5, 8)}}></div>
                <div className={styles.cell} onClick={() => {noStone(6, 1)}}></div>
                <div className={styles.cell} onClick={() => {noStone(6, 2)}}></div>
                <div className={styles.cell} onClick={() => {noStone(6, 3)}}></div>
                <div className={styles.cell} onClick={() => {noStone(6, 4)}}></div>
                <div className={styles.cell} onClick={() => {noStone(6, 5)}}></div>
                <div className={styles.cell} onClick={() => {noStone(6, 6)}}></div>
                <div className={styles.cell} onClick={() => {noStone(6, 7)}}></div>
                <div className={styles.cell} onClick={() => {noStone(6, 8)}}></div>
                <div className={styles.cell} onClick={() => {noStone(7, 1)}}></div>
                <div className={styles.cell} onClick={() => {noStone(7, 2)}}></div>
                <div className={styles.cell} onClick={() => {noStone(7, 3)}}></div>
                <div className={styles.cell} onClick={() => {noStone(7, 4)}}></div>
                <div className={styles.cell} onClick={() => {noStone(7, 5)}}></div>
                <div className={styles.cell} onClick={() => {noStone(7, 6)}}></div>
                <div className={styles.cell} onClick={() => {noStone(7, 7)}}></div>
                <div className={styles.cell} onClick={() => {noStone(7, 8)}}></div>
                <div className={styles.cell} onClick={() => {noStone(8, 1)}}></div>
                <div className={styles.cell} onClick={() => {noStone(8, 2)}}></div>
                <div className={styles.cell} onClick={() => {noStone(8, 3)}}></div>
                <div className={styles.cell} onClick={() => {noStone(8, 4)}}></div>
                <div className={styles.cell} onClick={() => {noStone(8, 5)}}></div>
                <div className={styles.cell} onClick={() => {noStone(8, 6)}}></div>
                <div className={styles.cell} onClick={() => {noStone(8, 7)}}></div>
                <div className={styles.cell} onClick={() => {noStone(8, 8)}}></div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
