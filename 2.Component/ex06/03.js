import fs, { stat } from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder = Object.assign({}, state.order, {
    receive: '강남구 논현동 135-4'
});

updateOrder.payment.method = "Mobile";

console.log(state.order, updateOrder);

