import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/getList',(req,res)=>{
    res.send("Está funcionando");
});

app.post('/createList',(req,res)=>{
    
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});