
//const http = require('http');
//const routes = require('./routes.js');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
// Test
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(rootDir, 'views', 'error.html'));
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    });
});


app.listen(3000);

/*const server = http.createServer(app);
server.listen(3000);*/



