import { argv } from 'process'


console.log(argv[0])
console.log(argv[1])
console.table({
    first: argv[2],
    second: argv[3],
})



