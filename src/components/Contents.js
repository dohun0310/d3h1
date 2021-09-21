import React from "react";
import dsm from '../img/dsm.png'
import ha from '../img/ha.png'
import jly from '../img/jellyfin.png'
import vsc from '../img/vsc.png'

function Contents() {
  return (
    <>
    <div className="contents">
      <a href="https://d3h1.com" target="_blank" rel="noopener noreferrer">
        <button className="diskstation">
          <img src={dsm} alt="dsmicon" title="dsmicon" />
          <h1>DiskStation</h1>
          <p>어디서나 접속 가능한 클라우드 스토리지</p>
        </button>
      </a>
      <a href="https://ha.d3h1.com" target="_blank" rel="noopener noreferrer">
        <button className="homeassistant">
          <img src={ha} alt="haicon" title="haicon" />
          <h1>Home Assistant</h1>
          <p>스마트홈을 관리, 제어가 가능한 플랫폼</p>
       </button>
      </a>
      <a href="https://jellyfin.d3h1.com" target="_blank" rel="noopener noreferrer">
        <button className="jellyfin">
          <img src={jly} alt="jlyicon" title="jlyicon" />
          <h1>Jellyfin</h1>
          <p>미디어를 스트리밍 하는 서비스</p>
        </button>
      </a>
      <a href="https://vs.d3h1.com" target="_blank" rel="noopener noreferrer">  
        <button className="visualstudiocode">
          <img src={vsc} alt="vscicon" title="vscicon" />
          <h1>Visual Studio Code</h1>
          <p>프로그래머용 텍스트 에디터</p>
        </button>
      </a>
    </div>
    </>
  );
}

export default Contents;
