// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
   
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
   
//     default:
//       alert( 'We hope that this page looks ok!' );
// }  

var browser = prompt("What browser do you use? ", "");

if (browser == 'Edge'){
    alert( "You've got the Edge!" );
}else if (browser == 'Chrome'||'Firefox'||'Safari'||'Opera'){
    alert( 'Okay we support this browser too' );
}
else alert( 'We hope that this page looks ok!' );
