import express from 'express';
import cors from 'cors';
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(
    cors({
        origin: '*'
    })
)

import post from './routes/routes.js'

app.use('/api/posts', post)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})