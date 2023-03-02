const express = require('express');
const app = express();
const connectDB = require('./config/db')
connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));


//routes
app.use('/',require('./routes/home'))
app.use('/api/files',require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download',require('./routes/download'))

app.listen(3000,()=>{
    console.log(`server running at port 3000`);
})