import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactPlayer from "react-player"

function App() {
  return (
    <div className="contain">
      {/* <div className="max-width"> */}
        <div className="container">
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" controls>
          </ReactPlayer>
        </div>
        <div className="container2">
          <ReactPlayer url="https://www.youtube.com/watch?v=j5qgU361KAU">
          </ReactPlayer>
        </div>
      {/* </div> */}
    </div>
    
  
  );




}

export default App;
