for (let index = 0; index <10; index++) {
    const element = index;
    if(element==6){
        console.log("6 is hitting")
    }
    console.log(element)
}


for (let index = 0; index < 5; index++) {
   console.log(`outerloop value :${index}`);
    for (let i = 0; i < 5; i++) {
        console.log(`inner loop value:${i}`);
        
    }
    
}