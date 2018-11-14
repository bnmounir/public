// var answer = prompt("Are We There Yet?");
// while(answer != "yes") {
//     var answer = prompt("Are We There Yet?");
// }
// alert("YeY we Made IT!!!!!!!!!");

var answer = prompt("Are We There Yet?");
while(answer.indexOf("yes") === -1){
    var answer = prompt("Are We There Yet?");
}
alert("YeY we Made IT!!!!!!!!!");