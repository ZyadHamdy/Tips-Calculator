// function calcTips() {
//     if (myDuration.value == '20%') {
//         myDiv.innerHTML = myPrice.value + (myPrice.value / 100) * (30 / numOfPeople);

//     } else if (myDuration.value == '20%') {
//         total = myPrice.value + (myPrice.value / 100) * (20 / numOfPeople.value);

//     } else if (myDuration.value == '15%') {
//         total = myPrice.value + (myPrice.value / 100) * (15 / numOfPeople.value);

//     } else if (myDuration.value == '10%') {
//         total = myPrice.value + (myPrice.value / 100) * (10 / numOfPeople.value);

//     } else if (myDuration.value == '5%') {
//         total = myPrice.value + (myPrice.value / 100) * (50 / numOfPeople.value);

//     }
//     myDiv.innerHTML = total;
// }






function calcTips() {
    var valueprice = parseInt(document.getElementById("price").value);
    var select = document.getElementById("duration").value;
    var num = parseInt(document.getElementById("pepole").value);
    var x;
    var total;

    if (select === "Outstanding") {
        x = 30 / num;
        total = valueprice + (valueprice / 100) * x;
    } else if (select === "Good") {
        x = 20 / num;
        total = valueprice + (valueprice / 100) * x;
    } else if (select === "It Was Ok") {
        x = 15 / num;
        total = valueprice + (valueprice / 100) * x;
    } else if (select === "Bad") {
        x = 10 / num;
        total = valueprice + (valueprice / 100) * x;
    } else if (select === "Terrible") {
        x = 5 / num;
        total = valueprice + (valueprice / 100) * x;
    }
    document.getElementById("span").innerHTML = "tips amount " + '<br>' + total + '$';
}

// function calcTips() {
//     var myPrice = parseInt(document.getElementById("price").value);
//     var myDuration = document.getElementById("duration").value;
//     var numOfPeople = parseInt(document.getElementById("People").value);
//     var x;
//     var total;
//     if (myDuration === "Outstanding") {
//         x = 30 / numOfPeople;
//         total = myPrice + (myPrice / 100) * x;
//     } else if (myDuration === "Good") {

//         x = 20 / numOfPeople;
//         total = myPrice + (myPrice / 100) * x;
//     } else if (myDuration === "It Was Ok") {

//         x = 15 / numOfPeople;
//         total = myPrice + (myPrice / 100) * x;
//     } else if (myDuration === "Bad") {

//         x = 10 / numOfPeople;
//         total = myPrice + (myPrice / 100) * x;
//     } else if (myDuration === "Tirrible") {

//         x = 5 / numOfPeople;
//         total = myPrice + (myPrice / 100) * x;
//     }
//     document.getElementById("span").innerHTML = total;
// }