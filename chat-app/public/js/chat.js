const socket = io()

socket.on('countUpdated', (count) =>{
       console.log("The number of counts is :",count )
})

document.querySelector('#increment').addEventListener('click',() =>{
     console.log("Button Clicked");
     socket.emit('increment');
});