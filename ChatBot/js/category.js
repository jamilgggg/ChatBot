const roomClick = document.getElementById("roomBtn");
const foodClick = document.getElementById("foodBtn");
const actClick = document.getElementById("activityBtn");
const sovClick = document.getElementById("sovBtn");
const othersClick = document.getElementById("othersBtn");


roomClick.addEventListener("click", function(){
    location.replace("RoomInquiry.html");
});

foodClick.addEventListener("click", function(){
    location.replace("FoodInquiry.html");
});

actClick.addEventListener("click", function(){
    location.replace("ActivityInquiry.html");
});

sovClick.addEventListener("click", function(){
    location.replace("ShopInquiry.html");
});

othersClick.addEventListener("click", function(){
    location.replace("OtherInquiry.html");
});




