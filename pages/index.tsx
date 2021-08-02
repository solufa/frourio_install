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

  const onClick = useCallback(() => {
    alert("クリックされました")
  }, [])

  const clickWhiteStone = useCallback(() => {
    alert("白い石がクリックされました")
  }, [])

  const clickBlackStone = useCallback(() => {
    alert("黒い石がクリックされました")
  }, [])

  const noStone = useCallback(() => {
    alert("ここに石はありません")
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
        <div className="wrapper" onClick={onClick}>
          <div className={styles.square}>
            <div className={styles.squareIn}>
                <div className={styles.box1} onClick={noStone}></div>
                <div className={styles.box2} onClick={noStone}></div>
                <div className={styles.box3} onClick={noStone}></div>
                <div className={styles.box4} onClick={noStone}></div>
                <div className={styles.box5} onClick={noStone}></div>
                <div className={styles.box6} onClick={noStone}></div>
                <div className={styles.box7} onClick={noStone}></div>
                <div className={styles.box8} onClick={noStone}></div>
                <div className={styles.box9} onClick={noStone}></div>
                <div className={styles.box10} onClick={noStone}></div>
                <div className={styles.box11} onClick={noStone}></div>
                <div className={styles.box12} onClick={noStone}></div>
                <div className={styles.box13} onClick={noStone}></div>
                <div className={styles.box14} onClick={noStone}></div>
                <div className={styles.box15} onClick={noStone}></div>
                <div className={styles.box16} onClick={noStone}></div>
                <div className={styles.box17} onClick={noStone}></div>
                <div className={styles.box18} onClick={noStone}></div>
                <div className={styles.box19} onClick={noStone}></div>
                <div className={styles.box20} onClick={noStone}></div>
                <div className={styles.box21} onClick={noStone}></div>
                <div className={styles.box22} onClick={noStone}></div>
                <div className={styles.box23} onClick={noStone}></div>
                <div className={styles.box24} onClick={noStone}></div>
                <div className={styles.box25} onClick={noStone}></div>
                <div className={styles.box26} onClick={noStone}></div>
                <div className={styles.box27} onClick={noStone}></div>
                <div className={styles.box28}>
                  <div className={styles.stone1} onClick={clickBlackStone}></div>
                </div>
                <div className={styles.box29}>
                  <div className={styles.stone2} onClick={clickWhiteStone}></div>
                </div>
                <div className={styles.box30} onClick={noStone}></div>
                <div className={styles.box31} onClick={noStone}></div>
                <div className={styles.box32} onClick={noStone}></div>
                <div className={styles.box33} onClick={noStone}></div>
                <div className={styles.box34} onClick={noStone}></div>
                <div className={styles.box35} onClick={noStone}></div>
                <div className={styles.box36}>
                  <div className={styles.stone4} onClick={clickWhiteStone}></div>
                </div>
                <div className={styles.box37}>
                  <div className={styles.stone3} onClick={clickBlackStone}></div>
                </div>
                <div className={styles.box38} onClick={noStone}></div>
                <div className={styles.box39} onClick={noStone}></div>
                <div className={styles.box40} onClick={noStone}></div>
                <div className={styles.box41} onClick={noStone}></div>
                <div className={styles.box42} onClick={noStone}></div>
                <div className={styles.box43} onClick={noStone}></div>
                <div className={styles.box44} onClick={noStone}></div>
                <div className={styles.box45} onClick={noStone}></div>
                <div className={styles.box46} onClick={noStone}></div>
                <div className={styles.box47} onClick={noStone}></div>
                <div className={styles.box48} onClick={noStone}></div>
                <div className={styles.box49} onClick={noStone}></div>
                <div className={styles.box50} onClick={noStone}></div>
                <div className={styles.box51} onClick={noStone}></div>
                <div className={styles.box52} onClick={noStone}></div>
                <div className={styles.box53} onClick={noStone}></div>
                <div className={styles.box54} onClick={noStone}></div>
                <div className={styles.box55} onClick={noStone}></div>
                <div className={styles.box56} onClick={noStone}></div>
                <div className={styles.box57} onClick={noStone}></div>
                <div className={styles.box58} onClick={noStone}></div>
                <div className={styles.box59} onClick={noStone}></div>
                <div className={styles.box60} onClick={noStone}></div>
                <div className={styles.box61} onClick={noStone}></div>
                <div className={styles.box62} onClick={noStone}></div>
                <div className={styles.box63} onClick={noStone}></div>
                <div className={styles.box64} onClick={noStone}></div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
