// 1. https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, ar) {
  let sorted = ar.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i += 1;
    }
  }
  return pairs;
}

// 2. https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function countingValleys(steps, path) {
  let valleys = 0;
  let elevation = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == "D") {
      elevation--;
    } else {
      if (elevation == -1) {
        valleys++;
      }
      elevation++;
    }
  }
  return valleys;
}
