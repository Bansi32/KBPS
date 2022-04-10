const express = require("express");
const cors = require("cors");
require("dotenv").config();
require('./helpers/connect');
const path = require('path');
// set up express

const app = express();
app.use(express.json());
app.use(cors());




// set up routes

app.use("/users", require("./routes/users"));
app.use(require('./routes/payment'));

// deployment
if (process.env.NODE_ENV === 'PRODUCTION')
{
    
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    });
}



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
