document.getElementById('normal-memory').addEventListener('click',function(){
    const normalMemory =document.getElementById('only-memory');
    normalMemory.innerText=0;
});
document.getElementById('extra-memory').addEventListener('click',function(){
    const subTotal =document.getElementById('only-memory');
    subTotal.innerText=200;
    const normalMemory=document.getElementById('total-price')
    normalMemory.innerText =parseInt(subTotal.innerText)+1299;
     
})
document.getElementById('normal-storage').addEventListener('click',function(){
const normalStorage =document.getElementById('storage');
normalStorage.innerText=0;
})
document.getElementById('extra-storage1').addEventListener('click',function(){
const normalStorage =document.getElementById('storage')
normalStorage.innerText=250;
const subTotal =document.getElementById('total-price');
subTotal.innerText=parseInt(normalStorage.innerText )+1299;
})
document.getElementById('extra-storage2').addEventListener('click',function(){
const normalStorage =document.getElementById('storage')
normalStorage.innerText=350;
const subTotal =document.getElementById('total-price');
subTotal.innerText=parseInt(normalStorage.innerText)+1299;
})
document.getElementById('normal-delivery').addEventListener('click',function(){
    const normalDelivey=document.getElementById('delivey-cost');
    normalDelivey.innerText=0;
});
document.getElementById('extra-delivery').addEventListener('click',function(){
    
    const extraDelivey = document.getElementById('delivey-cost');
    extraDelivey.innerText=20;
    const totalDelivey=document.getElementById('total-price');
    totalDelivey.innerText=parseInt(extraDelivey.innerText)+1299
})