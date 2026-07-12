console.log("Prime Triplets (3 primes with difference of 2)");
const primeTriplets = (limit) => {
    let Triplets = [];
    const isPrime = (num) => {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= limit - 4; i++) {
        if (isPrime(i) && isPrime(i + 2) && isPrime(i + 4)) {
            Triplets.push([i, i + 2, i + 4]);
        }
    }

 return Triplets;
}
console.log(primeTriplets(100));