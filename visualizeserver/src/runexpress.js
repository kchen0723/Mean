import express from 'express';
const app = express();
var clientPath = '../VisualizeClient/dist/VisualizeClient';
app.use(express.static(clientPath));
app.listen(8889);
console.log("server is runnning");