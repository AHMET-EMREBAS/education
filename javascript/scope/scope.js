// Scope 


first: {

    let a = 'a';
    let b = 'b';

    second: {
        let secondScopeVariable = 100;

        third: {
            console.log(secondScopeVariable);
        }
    }

    break first;

    console.log(a, b);
}

