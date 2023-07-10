function remainderofTwoNumbers (x,y){
    return x%y;

}

describe("Remainder of Two numbers",()=>{
it("should return 1 when i pass (7,2)",()=>{
    expect(remainderofTwoNumbers(7,2)).toEqual(1);
})
})