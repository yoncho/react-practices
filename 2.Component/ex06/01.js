import fs, { stat } from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({
    no: "p002-003",
    name: "블루 양말",
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateOrderProducts1, state.order.products === updateOrderProducts1);
console.log("==================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts2 = state.order.products.concat({
    no: "p002-003",
    name: "블루 양말",
    price: 2000,
    amount: 1
});

console.log(state.order.products, updateOrderProducts2, state.order.products === updateOrderProducts2);

console.log("==================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts3 = [...state.order.products, {
    no: "p002-003",
    name: "블루 양말",
    price: 2000,
    amount: 1
}];

console.log(state.order.products, updateOrderProducts3, state.order.products === updateOrderProducts3);

// const updateOrderProducts1 = state.order.products;
// updateOrderProducts1.push({
//     no: "p002-003",
//     name: "블루 양말",
//     price: 2000,
//     amount: 1
// });