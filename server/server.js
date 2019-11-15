const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");

const app = express();
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Config
const db = require("./config/keys").mongoURI;
console.log(db)
// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(`This is the error:`, err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use(routes);

const port = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port}!`));