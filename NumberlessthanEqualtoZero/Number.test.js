function IsLessThanEqualToZero(value){
    if(value<=0){
        return true;
    }else{
        return false;
    }
}

describe("IsLessThanEqualToZero",()=>{
    it("Should return false When pass the value 5",()=>{
    expect (IsLessThanEqualToZero(5)).toEqual(false);

 })
    })