const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

const post = {
  title: "Title for your post ",
  published: true,
  des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa enim impedit eius reiciendis cumque eum saepe perspiciatis, eos optio",
};

const infos = [
  { name: "Mr A", age: 20 },
  { name: "Mr B", age: 22 },
  { name: "Mr C", age: 24 },
  { name: "Mr D", age: 21 },
];

app.get("/", (req, res) => {
  res.render("pages/home", {
    title: "EJS is awesome ( Page created by EJS )",
    post: post,
    infos: infos,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "About",
  });
});

app.get("/help", (req, res) => {
  res.render("pages/help", {
    title: "Help",
  });
});

app.listen(PORT, () => {
  console.log("APP IS RUNNING ON PORT " + PORT);
});
