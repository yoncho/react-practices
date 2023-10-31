// block scope (es6)
var user = [{
  no: 1,
  name: 'micole',
  email: 'micole@naver.com'
}, {
  no: 2,
  name: 'dooly',
  email: 'dooly@naver.com'
}, {
  no: 3,
  name: 'ddochi',
  email: 'ddochi@naver.com'
}];

// 객체분해(es6)
function print({
  no,
  name,
  email
}) {
  //template string(es6)

  console.log(`${no}:${name}:${email}`);
}

// for ~ of (es6)
for (var _user of users) {}
