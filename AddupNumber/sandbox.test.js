'use strict';

function addup(initialValue){
let result=0;
for(let i=1;i<=initialValue;i++){
  result += i
}
return result;
}

describe("adding up until a certain number", () => {
  it('should return 6 when passing 5',() => {
    expect(addup(5)).toEqual(15);
  });
});