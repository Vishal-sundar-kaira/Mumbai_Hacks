// const connectToMongo=require('./db')
const express = require('express')
// connectToMongo();
var cors = require('cors')
const app = express()
const port = 5000
const { spawn } = require('child_process');
// app.use(cors())
app.use(express.json());//middleware is necessary for link respose to perfrom json
//Available routes
app.post('/api/crop', (req, res) => {
  const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18 } = req.body;
  const inputArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18];
  //  const inputArray = ["A", "B", "C", "A", "B", "C","A", "B", "C", "A", "B", "C","A", "B", "C", "A", "B", "C"];
   
   const childProcess = spawn('python', ['prakruti.py',...inputArray]);
 
   let output = '';
 
   childProcess.stdout.on('data', (data) => {
     output += data.toString();
   });
 
   childProcess.stderr.on('data', (data) => {
     console.error(data.toString());
   });
 
   childProcess.on('close', (code) => {
     console.log(`child process exited with code ${code}`);
     res.json({ output });
   });
 });
 

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})