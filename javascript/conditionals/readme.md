### If-else statement

#### Truetie

- true
- 1,2,3,4,5,.....
- -1,-2,-3,-4,....
- "", "some", "false","0"

#### Falsy

- false
- 0
- null
- undefined
- NaN

#### Example

```javascript
const condition = false;

if (condition) {
  console.log("Condition is true");
}

// Only there one line of code!
if (condition) console.log("condition is true");

// Nested if statements
if (condition) {
  if (condition2) {
    if (condition3) {
    }
  }
}

first: if (condition) {
  second: if (condition2) {
    third: if (condition3) {
    }
    fifth: if (condition5) {
      break first;
    }

    sixth: if (condition6) {
      console.log("Condition 6");
    }
  }
  forth: if (condition4) {
    console.log("Codnition 4");
  }
}
```
