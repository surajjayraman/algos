const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {

    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
      continue;
    }
    
    if (i % multiples[1] === 0) {
      console.log(words[1]);
      continue;
    }
    
    if (i % multiples[0] === 0) {
      console.log(words[0]);
      continue;
    }
    
    console.log(i);
  }
};

loopyLighthouse([15,20], [2, 5], ["Batty", "Beacon"]);