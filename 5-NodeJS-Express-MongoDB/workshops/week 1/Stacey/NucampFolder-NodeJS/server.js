const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

// BREAK *************************************************************************************

app.all('/promotions', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/promotions', (req, res) => {
    res.end('Will send all the promotion to you');
});

app.post('/promotions', (req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/promotions', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
});

app.delete('/promotions', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/promotions/:promotionId', (req, res) => {
    res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
});

app.post('/promotions/:promotionId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.campsiteId}`);
});

app.put('/promotions/:promotionId', (req, res) => {
    res.write(`Updating the promotion: ${req.params.campsiteId}\n`);
    res.end(`Will update the promotion: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/promotions/:promotionId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

// BREAK *************************************************************************************

app.all('/partners', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/partners', (req, res) => {
    res.end('Will send all the partner to you');
});

app.post('/partners', (req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/partners', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
});

app.delete('/partners', (req, res) => {
    res.end('Deleting all partners');
});

app.get('/partners/:partnerId', (req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
});

app.post('/partners/:partnerId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.campsiteId}`);
});

app.put('/partners/:partnerId', (req, res) => {
    res.write(`Updating the partner: ${req.params.campsiteId}\n`);
    res.end(`Will update the partner: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/partners/:partnerId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

// BREAK *************************************************************************************

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
