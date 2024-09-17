const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

function createSquare(N) {
    if (N <= 2) {
        return "Nilai terlalu kecil";
    } else if (N >= 10) {
        return "Nilai terlalu besar";
    } else {
        const topBottom = "=".repeat(5);
        const middle = "|" + " ".repeat(5) + "|";
        
        const square = topBottom + " " + middle.repeat(N-2) + " " + topBottom;
        
        return square;
    }
}

app.post('/square', (req, res) => {
    const N = req.body.N;
    
    if (typeof N !== 'number' || !Number.isInteger(N)) {
        return res.status(400).json({ error: 'N harus berupa bilangan bulat' });
    }
    
    const square = createSquare(N);
    res.json({ square: square });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});