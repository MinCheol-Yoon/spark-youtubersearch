import React, {Component} from 'react';
import './videos.css'


export default function Videos(props) {
  // const style = {
  //   backgroundColor: "#FFF",
  //   display: "flex",
  //   justifyContent: "space-around"
  // }

  // const itemStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   margin: 20,
  // }

  const best = changeToImg(props.bestVideo)
  const latest = changeToImg(props.latestVideo)
  const latest2 = changeToImg(props.latestVideo2)
  
  return(
    <div className="video-contain">
      <div className="video">
        <h3>최고 인기 영상</h3>
        <a href={props.bestVideo} target={'_blank'}><img src={best}/></a>
      </div>
      <div className="video">
        <h3>최근 업로드</h3>
        <div className="latestvideos-box">
          <a href={props.latestVideo} target={'_blank'}><img src={latest}/></a>
          <a href={props.latestVideo2} target={'_blank'}><img src={latest2}/></a>
        </div>
        
      </div>
    </div>
  )
}

function changeToImg(src) {
  const findStr = "watch?v="
  const code = src.split(findStr)[1]
  return `http://img.youtube.com/vi/${code}/mqdefault.jpg`
}