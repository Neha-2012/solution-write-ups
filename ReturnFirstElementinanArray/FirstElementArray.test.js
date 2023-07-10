function getFirstElement(arr){
    return arr[0];
}

describe("Return First Element in an Array",() => {
    it("should return 1 when i pass arr([1,2,3])",()=>{
    expect (getFirstElement([1,2,3])).toEqual(1);

    })

})