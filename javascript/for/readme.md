### For statement

```javascript
for (const value of arr) {
  // console.log(value);
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let arr = [1, 2, 3, 4, 5, 6];

for (const propertyName in obj) {
  console.log(propertyName);
}

for (const value of arr) {
  console.log(value);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (; true; ) {
  console.log("infinite loop");
}

for (let i = 0; i < 10; i++) {
  for (let k = 0; k < 10; k++) {
    console.log(`${i} X ${k} = ${i * k}`);
  }
}
```
