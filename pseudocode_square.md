# CreateSquare Algorithm

This repository contains an algorithm to create a square shape using ASCII characters.

## Algorithm Description

```
ALGORITMA CreateSquare(N)
INPUT: N (bilangan bulat)
OUTPUT: square (string)
1. IF N ≤ 2 THEN
       RETURN "Nilai terlalu kecil"
   ELSE IF N ≥ 10 THEN
       RETURN "Nilai terlalu besar"
   ELSE
       // Lanjutkan ke langkah berikutnya
2. SET topBottom ← string "=" yang diulang 5 kali
   // topBottom sekarang berisi "====="
3. SET middle ← "|" + 5 spasi + "|"
   // middle sekarang berisi "|     |"
4. SET square ← topBottom + " " + (middle diulang (N-2) kali) + " " + topBottom
5. RETURN square
END ALGORITMA
```

## Algorithm Explanation

1. The algorithm takes an integer `N` as input.
2. It first checks if `N` is valid (between 3 and 9, inclusive).
3. If `N` is valid, it creates a square shape using "=" for the top and bottom, and "|" with spaces for the sides.
4. The height of the square is determined by `N`.
5. The resulting square is returned as a string.

## Repository

For the implementation of this algorithm and related code, please visit:

[https://github.com/petruskuswandi/test_be_adidata_bni](https://github.com/petruskuswandi/test_be_adidata_bni)

## Usage

To use this algorithm, clone the repository and follow the instructions provided in the project documentation.

## Contributing

Contributions to improve the algorithm or its implementation are welcome. Please submit a pull request or open an issue on the GitHub repository.

## License

Please refer to the repository for license information.
