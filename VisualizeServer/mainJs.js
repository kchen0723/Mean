var express = require('express');
const app = express();
var clientPath = '../VisualizeClient/dist/VisualizeClient';
app.use(express.static(clientPath));
app.listen(8885);
console.log("server is runnning");