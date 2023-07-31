import { useState } from "react"
import { useEffect } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import AdminDeleteCourse from "./AdminDeleteCourse";

export default function AdminCourse(props){
    const Navigate = useNavigate();
    return (
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
          // marginTop:"100px",
          marginRight: "5px",
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
            <Button
              variant="contained"
              onClick={() => {
                Navigate("/coursee/" + props.course.courseId);
              }}
            >
              Update Course
            </Button>
            <br />
            <br />
            <Button
              variant="contained"
              onClick={() => {
                alert('Are U Sure to Delete');
                  fetch(
                    "https://vidhyapith-full-stack-app.vercel.app/admin/courses/delete/" +
                      props.course.courseId,
                    {
                      method: "DELETE",
                      headers: {
                        "Content-type": "application/json",
                        auth: "bearer " + localStorage.getItem("token"),
                      },
                    }
                  ).then((res) => {
                    res.json().then((data) => {
                      window.location = "/";
                    });
                  });
                
              }}
            >
              Delete Course
            </Button>
          </Typography>
        </div>
        <br />
        <br />
      </Card>
    );
}
