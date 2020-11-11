require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const routes = require('./routes');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 200 
  }

  app.use(cors(corsOptions))
  app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if(token){
        token = token.substring(7)
    } 

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if(err || !decodedUser){
            return res.status(401).send(`ERROR: ${err}`);
        }
        req.user = decodedUser;

        next();
    })
}

app.use('/auth', routes.auth);
app.use('/auth/verify', verifyToken, routes.auth);
app.use('/profile', verifyToken, routes.profile);


app.use('/trails', routes.trail);
app.use('/reviews', routes.review);


app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}`)
})