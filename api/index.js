const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = 3001;
const users = require("./routes/users");
const bodyParser = require("body-parser");

const app = express();
app.use(
  morgan({
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", users);

app.get("/", (req, res) => {
  console.log("api test OK on / ");
  res.send([
    {
      msg: "sukses",
    },
  ]);
});

app.listen(port, () => {
  console.log(`server berhasil dinyalakan pada http://localhost:${port}`);
});
