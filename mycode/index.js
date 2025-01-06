function hello (){
    setTimeout(()=>{
        console.log('Hola mundo desde docker');
        hello();
    },2000);
}

hello();
