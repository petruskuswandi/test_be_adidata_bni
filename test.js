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

// Contoh penggunaan
for (let N = 2; N <= 10; N++) {
    console.log(`N = ${N}`);
    if (N === 2 || N === 10) {
        console.log(`Square = ${createSquare(N)}`);
    } else {
        console.log(`Square = \n${createSquare(N)}`);
    }
    console.log();
}