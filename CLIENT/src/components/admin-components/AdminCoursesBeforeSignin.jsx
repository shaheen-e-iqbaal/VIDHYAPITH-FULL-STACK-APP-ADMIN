import { useState } from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Appbar from "../user-components/Appbar";
import AdminAppbar from "./AdminAppbar";

export default function AdminCoursesBeforeSignin() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(
      "https://vidhyapith-full-stack-app.vercel.app/users/coursesbeforesignin",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) => {
      res.json().then((data) => {
        setCourses(data);
      });
    });
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "50px",
          marginLeft: "280px",
        }}
      >
        {courses.map((value) => {
          return <UserCourse course={value} />;
        })}
      </div>
    </>
  );
}

function UserCourse(props) {
  return (
    <>
    {/* <AdminAppbar></AdminAppbar> */}
      <Card
        variant="outlined"
        style={{
          border: "1px solid black",
          width: "400px",
          //minWidth:"200px",
          //maxWidth:'250px',
          height: "auto",
          minHeight: "400px",
          //maxHeight:'400px',
          marginTop:"40px",
          marginRight: "10px",
          marginBottom: "15px",

          // padding:'5px'
          //paddingBottom:'0px'
        }}
      >
        <div
          style={
            {
              // marginTop:'10px'
            }
          }
        >
          <img
            src={props.course.imageLink}
            alt=""
            style={{
              width: "400px",
              //minWidth:'200px',
              //maxWidth:'250px',
              height: "250px",
              //minHeight:'150px',
              //maxHeight:'400px'
            }}
          />
          <Typography textAlign={"center"} style={{ color: "green" }}>
            <Typography
              style={{
                color: "black",
                fontWeight: "bolder",
                marginTop: "10px",
              }}
            >
              {props.course.title}
            </Typography>
            {props.course.description}
            <br />
            <Typography
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              $ {props.course.price}
            </Typography>

            <br />
          </Typography>
        </div>
        <br />
        <br />
      </Card>
    </>
  );
}
