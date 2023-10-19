import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import "../styles.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="main">
          <div className="copy-container">
            <h1>Hello, World.</h1>
            <h2>Hello, React!</h2>
          </div>
          <div className="lesson-container">
            <h3 className="section-title">紹介ページ</h3>
            <div className="lesson-card">
              <div className="lesson-item">
                <p>HTML & CSS</p>
                {/* TODO 画像のリサイズ, アスペクト比保つ */}
                <img
                  src={img1}
                  alt="Description"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-item">
                <p>Sass</p>
                <img src={img2} style={{ width: "250px", height: "250px" }} />
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-item">
                <p>JavaScript</p>
                <img src={img3} style={{ width: "250px", height: "250px" }} />
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-item">
                <p>React</p>
                <img src={img4} style={{ width: "250px", height: "250px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
