console.log("Sexy primes (difference of 6):");

const sexyPrime = (limit) => {
    let primes = [];
    
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    for (let i = 2; i <= limit - 6; i++) {
        if (isPrime(i) && isPrime(i + 6)) {
            primes.push([i, i + 6]);
        }
    }
    
    return primes;
}

let result = sexyPrime(100);
console.log(`Found ${result.length} sexy prime pairs up to 100:`);
console.log(result);

result.forEach((pair, index) => {
    console.log(`${index + 1}. (${pair[0]}, ${pair[1]})`);
});