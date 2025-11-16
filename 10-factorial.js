function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const arg = parseInt(process.argv[2], 10);
const result = isNaN(arg) ? 1 : factorial(arg);

console.log(result);
