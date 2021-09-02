import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute';

const app = express();
const port = 3000;

app.use(cors());
app.use("/users", userRoute);

app.listen(port, () => {
    console.log(`TypeScript NodeJs Api running on: ${port}`);
});
