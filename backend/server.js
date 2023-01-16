const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

const authHeader = {
  auth: {
    username: process.env.USER_NAME,
    password: process.env.API_KEY,
  },
};

app.get("/sprints", (req, res) => {
  axios
    .get(`${process.env.BASE_URL}/board/1/sprint/?state=active`, authHeader)
    .then((result) => {
      res.send(result.data.values);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/sprint/:id", (req, res) => {
  axios
    .get(`${process.env.BASE_URL}/sprint/${req.params.id}`, authHeader)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/tasks/:id", (req, res) => {
  axios
    .get(
      `${process.env.BASE_URL}/board/1/sprint/${req.params.id}/issue`,
      authHeader
    )
    .then((result) => {
      res.send(result.data.issues);
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
