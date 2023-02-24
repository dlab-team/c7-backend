import express from 'express';
const app = express()
const PORT = 3005

app.get("/", (req, res) => { 
  res.send("Hello World! again");
})

app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})