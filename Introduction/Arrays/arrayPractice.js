console.log("what ever I have done in this week i will do practice of it");
const Arrays = {
    isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    },
    primeInArray(arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (this.isPrime(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    },
    nonPrimeInArray(arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (!(this.isPrime(arr[i]))) {
                result.push(arr[i]);
            }
        }
        return result;
    },
    countPrimes(arr) {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (this.isPrime(arr[i])) {
                count++
            }
        }
        return count;
    },
    largestPrime(arr) {
        let result = [];
        let largest = -1;
        for (let i = 0; i < arr.length; i++) {
            if (this.isPrime(arr[i]) && arr[i] > largest) {

                largest = arr[i];
            }

        }
        return largest;

    },
    twinPrimesInArray(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let first = arr[i];
                let second = arr[j];
                if (this.isPrime(first) && this.isPrime(second)) {
                    if (Math.abs(first - second) === 2) {
                        result.push([first, second]);
                    }
                }
            }
        }
        return result;
    },
    sexyPrime(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let first = arr[i];
                let second = arr[j];
                if (this.isPrime(arr[i]) && this.isPrime(arr[j])) {
                    if (Math.abs(first - second) === 6) {
                        result.push([first, second])
                    }
                }
            }

        }
        return result;
    }

}
console.log(Arrays.primeInArray([3, 2, 5, 8, 12, 11]));
console.log(Arrays.nonPrimeInArray([3, 2, 5, 8, 12, 11]));
console.log(Arrays.countPrimes([3, 2, 5, 8, 12, 11]));
console.log(Arrays.largestPrime([3, 2, 5, 8, 12, 11]));
console.log(Arrays.twinPrimesInArray([3, 2, 5, 8, 12, 11]));
console.log(Arrays.sexyPrime([3, 2, 5, 8, 12, 11]));