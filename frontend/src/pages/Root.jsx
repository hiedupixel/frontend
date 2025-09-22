import { useState, useEffect, useRef } from 'react'
import { useRoot } from '@hooks/RootProvider.jsx'
import { FastAPI } from '@utils/Network.js'
import FreeView from '@pages/component/FreeView.jsx'

const Root = () => {
  const { access, setAccess, modalEvent, isStorage, getBoardFile, isFreeView, setIsFreeView, getUserNo, targetImage } = useRoot()
  const [images, setImages] = useState([])
  
  const promptRef = useRef()

  const getBoards = () => {
    FastAPI("POST", "/board", {})
    .then(res => {
      if(res.status) {
        setImages(res.result)
        setAccess(isStorage("access"))
      } else {
        alert("이미지 목록 조회 중 네트워크 오류가 발생 했습니다.")
      }
    })
  }

  const isChecck = () => {
    if(!access) modalEvent("Login")
  }

  const applyEvent = () => {
    FastAPI("POST", "/gen", {p: promptRef.current.value, no: getUserNo()})
    .then(res => {
      if(res.status){
        getBoards()
      } else {
        alert("이미지 생성이 실패 하였습니다.")
      }
    })
  }

  

  useEffect(() => {
    getBoards()
  }, []);

  return (
    <>
    <main className="main-content">
      <header className="prompt-section">
        <div className="prompt-input-wrapper" onClick={isChecck}>
          {/* <input type="text" ref={promptRef} placeholder="Imagine something... a futuristic city in the style of Van Gogh" /> */}
          <textarea style={{resize:'none'}} ref={promptRef} placeholder="Imagine something... a futuristic city in the style of Van Gogh"></textarea>
          <button type='button' className="btn-generate" disabled={!access} onClick={applyEvent}>Generate</button>
        </div>
      </header>

      <section className="gallery">
        { /* 이미지 반복 */
          images?.map((row, index) => {
            return (
              <div className="gallery-item" key={index} onClick={()=>targetImage(row)}>
                <img src={getBoardFile(row.attachPath)} alt="AI generated image" />
                <div className="overlay">
                  <p className="prompt-text">{row.prompt}</p>
                </div>
            </div>
            )
          })
        }
      </section>
  </main>
  {isFreeView && <FreeView />}
  </>
  )
}

export default Root