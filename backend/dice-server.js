let port = 8080;
let express = require('express');
let app =express();
const path = require('path');

app.set("views", path.join (__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'files')));

app.get('/dicepage', (req, res) => {
    number = Math.floor(Math.random() * 6) + 1;

    res.render("dicepage", { numberResponse: number });

    //res.send('Random number = ' + number.toString());
});

app.listen(port, () => {
    console.log('Running on port: ' + port);
});