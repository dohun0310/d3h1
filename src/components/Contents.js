import React from "react";
import dsm from '../img/dsm.png'
import ha from '../img/ha.png'
import jly from '../img/jellyfin.png'
import vsc from '../img/vsc.png'

function Contents() {
  return (
    <>
      <div className="diskstation">
        <a href="#https://d3h1.com">
          <img src={dsm} alt="dsmicon" title="dsmicon"></img>
          <div className="dsmtext">
            <h1>DiskStation</h1>
            <p>어디서나 접근 가능한 클라우드 스토리지</p>
          </div>
        </a>
      </div>
      <div className="homeassistant">
        <a href="https://ha.d3h1.com">
          <img src={ha} alt="haicon" title="haicon"></img>
          <div className="hatext">
            <h1>Home Assistant</h1>
            <p>스마트홈을 관리, 제어</p>
          </div>
        </a>
      </div>
      <div className="jellyfin">
        <a href="https://jellyfin.d3h1.com">
          <img src={jly} alt="jlyicon" title="jlyicon"></img>
          <div className="jlytext">
            <h1>Jellyfin</h1>
            <p>드라마나 영화를 스트리밍</p>
          </div>
        </a>
      </div>
    <div className="visualstudiocode">
      <a href="https://vs.d3h1.com">
        <img src={vsc} alt="vscicon" title="vscicon"></img>
        <div className="vsctext">
          <h1>Visual Studio Code</h1>
          <p>프로그래머용 에디터터</p>
        </div>
      </a>
    </div>
    </>
  );
}

export default Contents;
