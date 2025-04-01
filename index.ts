import express from 'express';
import views from './src/Views/Views';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/",views);

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});