import fs, { stat } from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

let updateOrder1 = state.order;
updateOrder1.receive = '강남구 서초구 ...';

console.log(state.order, updateOrder1, updateOrder1 === state.order);
console.log("============================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

// 생성할 결과 / 기본 데이터 / 추가할 데이터
const updateOrder2 = Object.assign({}, state.order, {receive: "강남구 서초구 ..."});
console.log(updateOrder2, updateOrder2 === state.order);
console.log("============================");