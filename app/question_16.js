// testNumber = prompt("Input number greater than 100", "");
// testNumber = () => {prompt("Input number greater than 100", "")};
// do {
//     alert("The number is less than 100");
// }
while(true){
    var testNumber = prompt("Input number greater than 100", "");
    if (testNumber >= 100){
        alert("Right!");
        break;
    };
    alert("Wrong!");
};
