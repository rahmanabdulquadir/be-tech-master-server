const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require("./data/courses.json");
const course = require("./data/course.json");

app.get("/", (req, res) => {
  res.send("courses API running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find(c.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("courses server in running on", port);
});
