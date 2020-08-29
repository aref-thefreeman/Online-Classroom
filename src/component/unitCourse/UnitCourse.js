import React from "react";
import "./UnitCourse.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const UnitCourse = (props) => {
  const { id, courseName, price, ratings } = props.course;

  return (
    <div className="unit-course">
      <div className="course-details">
        <p className="course-title">Course title: {courseName}</p>
        <p>Price of the course: ${price} </p>
        <p>ratings: {ratings}</p>
        <p>Props product:{id}</p>
      </div>

      <div className="button">
        <button
          onClick={() => props.handleCourses(props.course)}
          className="btn-cart"
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now
        </button>
      </div>
    </div>
  );
};

export default UnitCourse;
