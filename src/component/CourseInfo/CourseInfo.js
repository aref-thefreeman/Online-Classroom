import React from "react";
import onlineCourse from "../../fakeData/courseDetails";
import { useState } from "react";
import UnitCourse from "../unitCourse/UnitCourse";
import Cart from "../CartInfo/Cart";
import "./CourseInfo.css";

const CourseInfo = () => {
  //Load data
  const first12 = onlineCourse.slice(0, 12);

  const [courses, setCourses] = useState(first12);
  console.log("Courses", courses);

  //cart update
  const [cart, setCart] = useState([]);
  console.log("Old Cart", cart.length);

  const handleCourse = (clickedCourse) => {
    console.log("Course added", clickedCourse);

    //cart update
    const newCart = [...cart, clickedCourse];
    setCart(newCart);
  };

  return (
    <div className="course-info">
      <div className="single-course">
        {courses.map((oneCourse) => (
          <UnitCourse
            //passing course to the child
            course={oneCourse}
            handleCourses={handleCourse}
          ></UnitCourse>
        ))}
      </div>

      <div className="cart-course">
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default CourseInfo;
