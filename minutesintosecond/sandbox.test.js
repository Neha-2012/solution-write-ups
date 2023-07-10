function minutesintoSeconds(initialValue){
  return initialValue*60;
}

describe ("minutesintoSeconds convert minutes into seconds",()=>{
it ('should return 360 seconds when i pass 6 minute',()=>{
 expect(minutesintoSeconds(6)).toEqual(360);
})
})
    
