import express from "express";
const app = express();
import uploadRoutes from "./routes/uploadRoutes.js";

app.use("/api", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000; // Use environment variable PORT if available, otherwise default to 3000.
app.listen(port, () => {
  console.log("Example app listening on port port!", port);
});

//Run app, then load http://localhost:port in a browser to see the output.
