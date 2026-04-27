(function vedika(){
    // named iife
    console.log('testing for IIFE')
}
)() ;//here we used semicolon bcz if we want excute named or unamed iife then it should excuted both then semicolon divide this 

((name)=>{
    console.log(`print my name ${name}`);
})('vedika')
// iife is used for  Avoid global variable pollution ,Create private Scope, Run code Immediately



