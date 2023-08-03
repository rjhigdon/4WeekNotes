import express from "express"
import api from "houseware-mockend"

const app = express();
app.use("/api", api);

app.listen(4004, () => console.log('NOICE'))