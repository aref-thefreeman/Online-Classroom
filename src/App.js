import React from "react";
import "./App.css";
import CourseInfo from "./component/CourseInfo/CourseInfo";
import Cart from "./component/CartInfo/Cart";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseInfo></CourseInfo>

      {/* bootstrap class */}
      <p className="text-muted copyright-class">Copyright, 2020</p>
    </div>
  );
}

export default App;
