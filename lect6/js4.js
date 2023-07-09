const add = (...args) => {
   let sum = 0;
   for(let arg of args){
    sum+=arg;
   }
   return sum;
};

console.log(add(10 , 20 , 30 , 50 , 60));