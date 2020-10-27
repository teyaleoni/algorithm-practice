// 1. https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, ar) {
  // sort the array in ascending order
  let sorted = ar.sort((a, b) => a - b);
  //   holds how many pairs there will be
  let pairs = 0;

  //   Loop through the array stopping at the last index
  for (let i = 0; i < n - 1; i++) {
    // if the first sock is equal to the next sock, increase the pairs
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      //  skip the next sock because we already compared them
      i += 1;
    }
  }
  return pairs;
}

// 2. https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function countingValleys(steps, path) {
  // Represents how many valleys there will be
  let valleys = 0;
  // Keeps track of what steps the hiker is taking
  let elevation = 0;
  // Loop through the string
  for (let i = 0; i < steps; i++) {
    //   If the letter is D decrease the elevation
    if (path[i] == "D") {
      elevation--;
    } else {
      // if the elevation reached -1 increment the valleys
      if (elevation == -1) {
        valleys++;
      }
      // increase the elevation by 1
      elevation++;
    }
  }
  return valleys;
}
