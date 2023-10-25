const express = require('express');
const app = express();
app.get('/', (request, response) => {
    response.send('Hello World!');
});
app.listen(8000, () => {
    console.log('监听中...');
})