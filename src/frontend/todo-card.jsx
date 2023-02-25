import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./todo-card.css"
export default function TodoCard() {
  const [availableTodo, setAvailableTodo] = useState([]);
  useEffect(() => {
    fetchToDoData();
    console.log(availableTodo.data);
  }, []);
  async function fetchToDoData() {
    await fetch("http://localhost:5000/todo/")
      .then((response) =>
        response.json().catch((err) => {
          console.log(err);
          return {};
        })
      )
      .then((data) => {
        setAvailableTodo({ data1: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="todoCards">
        {
            availableTodo.data1 &&
            availableTodo.data1.map(todo=>{
                return(
                    <Card sx={{ maxWidth: 345 }} key={todo.taskID} className="individual-card">
                    <CardActionArea>
                      {/* <CardMedia
                              component="img"
                              height="140"
                              image="/static/images/cards/contemplative-reptile.jpg"
                              alt="green iguana"
                            /> */}
                      <CardContent>
                        <h2>{todo?.taskID}</h2>
                        <h2>{todo?.taskHeader}</h2>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                )
            })
        }
    </div>
  );
}
