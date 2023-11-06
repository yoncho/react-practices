import update from 'react-addons-update';
import fs, { stat } from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};


const updateOrder = update(state.order, {
    // property update
    receive:{
        $set: '강남구 논현동'
    },
    // nest 객체 property 변경
    payment:{
        method: {
            $set: 'Mobile'
        }
    },
    // array 객체 property 변경
    products: {
        0: {
            amount:{
                $set: 200
            }
        },
        // array 요소 추가 
        $push: [{
            no: "s002-002",
            name: "블루 양말",
            price: 2000,
            amount: 10
        }]
    }
    
});

console.log(updateOrder, state.order)

