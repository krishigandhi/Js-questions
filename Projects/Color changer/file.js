const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
     console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        // switch(e.target.id){
        //     case '1' :
        //     body.style.backgroundColor = 'black';
        //     break;

        // }
        if (e.target.id === 'black'){
            body.style.backgroundColor= e.target.id;
        }
        if (e.target.id === 'grey'){
            body.style.backgroundColor= e.target.id;
        }if (e.target.id === 'red'){
            body.style.backgroundColor= e.target.id;
        }if (e.target.id === 'yellow'){
            body.style.backgroundColor= e.target.id;
        }
    })
});
//Switch Case
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button){
//     console.log(button);
//     button.addEventListener('click',function(e){
//         console.log(e);
//         console.log(e.target);
//         switch (e.target.id) {
//             case 'black':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'grey':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'red':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'yellow':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             default:
//                 // Handle default case here if needed
//                 break;
//         }
//     });
// });
