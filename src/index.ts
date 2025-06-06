import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Blog API is running');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});