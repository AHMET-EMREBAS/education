### Readline

```javascript
import { stdin as input, stdout as output, exit } from "process";
import { createInterface } from "readline/promises";

const reader = createInterface({ input, output });

const name = await reader.question("What is your name?".padEnd(20, "."));
const age = await reader.question("How old are you?".padEnd(20, "."));

console.table({ name, age });

exit(1);
```

### Argv

```javascript
import { argv } from "process";

console.log(argv[0]); // Absolute path of node.exe
console.log(argv[1]); // Absolute path of the js file name.
console.table({
  first: argv[2],
  second: argv[3],
});
```
