function addHashFn(key:string, prime:number) {
  let hash:number = 0
  let i:number = 0
  for (hash = key.length, i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
    return (hash % prime);
  }
}

// let res = addHashFn("a", 26)
// let res1 = addHashFn("z", 26)
// console.log(res)
// console.log(res1)

function powerHashFn(key:string, prime:number) {
  let hash:number = 0
  let i:number = 0
  for (hash = key.length, i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i) * Math.pow(prime, i);
    return hash
  }
}

let powerRes = powerHashFn("z", 27)

console.log(powerRes)

function hornerHashFn(key:string, prime:number) {
  const H = 37;
  let total:number = 0;
  for (var i = 0; i < key.length; i++) {
    total +=  H * total + key.charCodeAt(i);
  }
  total = total % prime;
  if(total < 0 ){
    total += prime - 1;
  }
  return parseInt(total + "");
}
