function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function add() {
    };
}

function returnsAnAnonymousFunction() {
    return () => {
        statements
      };
}