// Кэш необходим, чтобы по возможности сократить количество вычислений
// То есть вычисление с одними параметрами произошло, сохраняем это где-либо, чтобы если ещё раз с теми же параметрами будет вызов этой функции просто достать готовый уже посчитанный результат

// Удобно реализовать в JS через замыкания
function cash(func) {
    const cash = {};
    
    return function(n) {
        if(!cash[n]) {
            cash[n] = func(n);
            return `Посчитано сейчас: ${cash[n]}`
        }

        return `Взято из кэша: ${cash[n]}`;
    }
}

function factorial(n) {
    let result = 1;

    if(n === 1) return result;

    result *= n * factorial(n-1);

    return result;
}

function factorialWithIteration(n) {
    let result = 1;

    while(n !== 1) {
        result *= n;
        n = n - 1;
    }

    return result
}

const factorialWithCash = cash(factorial);

console.log(factorialWithCash(5));
console.log(factorialWithCash(5));
console.log(factorialWithCash(3));