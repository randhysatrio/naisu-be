require('dotenv').config();
const app = require('express')();
const cors = require('cors');

app.use(cors());

app.use('/', (req, res) => {
    res.send('Naisu abis');
});

app.listen(process.env.PORT, () =>
    console.log(`Naisu API running at PORT: ${process.env.PORT}`)
);
