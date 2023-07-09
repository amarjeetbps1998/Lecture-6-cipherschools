const myFunction = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("This is Inside");
            resolve();
        }, 200);
    });
};

myFunction()
    .then(() =>{
        console.log("Resolve");
    })
    .catch(() => {
        console.error("Reject");
    });