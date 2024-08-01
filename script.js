function CalcuCahnge(ToAmount, denominations) {
    for (let i = 0; i < denominations.length - 1; i++) {
        for (let j = i + 1; j < denominations.length; j++) {
            if (denominations[i] < denominations[j]) {
                const temp = denominations[i];
                denominations[i] = denominations[j];
                denominations[j] = temp;
            }
        }
    }
    const change = {};

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];


        const count = Math.floor(ToAmount / denomination);

        ToAmount -= count * denomination;
        change[denomination] = count;
    }
    return change;
}

const ToAmount = 389;
const denominations = [1, 5, 10, 20, 100];
const result = CalcuCahnge(ToAmount, denominations);
console.log(result); 