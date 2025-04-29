import express from 'express'
import { PORT } from './app/config/config.js';
import router from './app/routes/apiUsers.js';

const app = express();

app.use("/api/v1", router)

app.listen(PORT, ()=> {
    console.log("Server Running On " + PORT);
})