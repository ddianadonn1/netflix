import express from "express";
const app = express();
// to make app understand json
app.use(express.json());
let movieList = [];
// routes
app.get("/say-hello", (req, res) => {
  return res.status(200).send("Hello");
});
// add movie
app.post("/movie/add", (req, res) => {
  movieList.push(req.body);
  console.log(movieList);
  return res.status(200).send({ message: "added successfully..." });
});
// get movies
app.get('/movie/list',(req,res)=>{
    return res.status(200).send({message:'success',movies: movieList});
});
// delete a movie
app.delete('movie/delete',(req,res)=>{
  
})
// network port and server
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
