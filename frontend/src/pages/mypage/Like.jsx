import { useState, useEffect, useRef } from 'react'
import { useRoot } from '@hooks/RootProvider.jsx'
import { useNavigate } from "react-router-dom";
import { FastAPI } from '@utils/Network.js'

const Like = () => {
  const { isStorage, getBoardFile, getUserNo, targetImage } = useRoot()
  const navigate = useNavigate();
  const [list, setList] = useState([])
  useEffect(() => {
    if(isStorage("access")) { 
      // const arr = {fileNo: null}
      // setList([...list, arr])
      FastAPI("POST", `/like/${getUserNo()}`)
      .then(res => {
        if(res.status) {
          console.log(res.result)
          setList(res.result)
        }
      })
    } else {
      navigate("/");
    }
  }, [])
  return (
    <div className="grid">
      {list?.map((row, index) => {
        return (
          <div className="grid-card" key={index} onClick={()=>targetImage(row)}>
            <img src={getBoardFile(row.attachPath)} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Like