$(document).ready(function () {
    $("#ChatLog").animate({left : '2500px'},500,function() {
        $("#ChatLog").append(
            "<div class='chat'>"+
            "<div class='chatbot-photo'> <img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Hola! Food and  Beverages Inquiries Service</p>"+
            " </div>"
        );
      });
      $("#ChatLog").animate({left : '2500px'},500,function() {
        $("#ChatLog").append(
            "<div class='chat'>"+
            "<div class='chatbot-photo'> <img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>How can I help you today?</p>"+
            " </div>"
        );
      });
      Choice1();
});
function scrollDown()
{
  $('#ChatLog').animate({
    scrollTop: $('#ChatLog').get(0).scrollHeight
  }, 1000); 
}
function ExitChat()
{
     $('#ExitModal').modal('show');
}
function Choice1()
{
    $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='FoodInquiry()'>Ask about Food</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='BeveragesInquiry()'>Ask about Beverages</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='SuggestBest()'>Suggest best restaurant in the hotel</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='ExitChat()'>Exit ChatBot</button>" 
        );
      });
}
function Choice2()
{
    $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='FoodInquiry2()'>Is your food delicious?</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='RestaurantInquiry()'>Ask about restaurants</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='RoomDining()'>Room Dining</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='PreviousQuestion()'>Previous Question</button>" 
        );
      });
}
function Choice3()
{
    $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='GoldenDragon()' >Golden Dragon Restaurant</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='AteJoy()' >Ate Joy's</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success'  onclick='OceanClub()'>Ocean Club</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='WesternRestaurant()'>St.Patrick's</button>" 
        );
      });
}
function Choice4()
{
    $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='BeveragesInquiry2()' >Is liquor available in room dining?</button>"+
            "<span style = 'margin-right:10px;'></span>"
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='BeveragesInquiry3()'>Ask about bars</button>" +
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='PreviousQuestion()'>Previous Question</button>" 
        );
      });
}
function FoodInquiry()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>I would like to inquire about food.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>What would you like to inquire about food?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function FoodInquiry2()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>Is your food delicious?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Our hotel makes the most amazing meals ever, just like your Mama. We have well trained and equipped international chefs and staff that provides you stunning and delicious food.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function RestaurantInquiry()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>I would like to ask about restaurants in your hotel.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>These are the restaurants available in the hotel<br>"+
            "<b>*Golden Dragon Buffet</b><br>"+
            "-Buffet restaurant that serves international cuisine<br>"+
            "<b>*Ate Joy's</b><br>"+
            "-Filipino restaurant that serves local dishes.<br>"+
            "<b>*Ocean Club</b><br>"+
            "-Exclusive Asian restaurant that serve local and sea dishes.<br>"+
            "<b>*St.Patrick's Food and Bar</b><br>"+
            "-Western and European restaurant<br><br>"+
            "Which of these restaurants sparks your interest?<br>"+ 
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice3();
}
function GoldenDragon()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>Golden Dragon sounds interesting.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'><b>Golden Dragon</b> is a buffet restaurant that serves local and international cuisine.. The multi-awarded dining destination features an enviable range of cuisine created with the focus and attention to detail by seasoned culinary artisans.<br>"+
            "<b>Breakfast Buffet</b><br>"+
            "-7:00 AM - 10:00 AM<br>"+
            "<b>Lunch Buffet</b><br>"+
            "-12:00 PM - 3:00 PM<br>"+
            "<b>Dinner Buffet</b><br>"+
            "-6:00 PM - 11:00 PM<br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function AteJoy()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>Ate Joy's Restaurant sounds interesting.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'><b>Ate Joy's</b> is a Filipino restaurant that offers a variety of local snacks and meals.It is a casual dining restaurant that offers great Filipino gastronomic delights.<br>"+
            "<b>Opens</b><br>"+
            "-7:00 AM - 10:00 PM<br>"+
            "<b>What to Expect?</b><br>"+
            "- Common Filipino dishes, from Lechon(Roasted Pork) to Diniguan.<br>"+
            "<b>Award Winning</b><br>"+
            "- Best Restaurant in Cebu 2019.<br>"+
            "<b>Best Seller</b><br>"+
            "- Adobong Manok<br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function OceanClub()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>Ocean Club Restaurant sounds interesting.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'><b>Ocean Club</b> is a exclusive club for guests in Suite accomodation. It has it's own restaurant that provides local dishes and sea foods.<br>"+
            "<b>Opens</b><br>"+
            "-9:00 AM - 12:00 AM<br>"+
            "<b>What to Expect?</b><br>"+
            "- Different types of sea foods, cooked in various ways and of course lechon.<br>"+
            "<b>Amazing view</b><br>"+
            "- This restaurant is nearby the sea. You can enjoy your meals while enjoying the ocean view<br>"+
            "<b>Best Dish</b><br>"+
            "- Butter Garlic Lobster and Caviar<br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function WesternRestaurant()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>St. Patrick's Restaurant sounds interesting.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'><b>St.Patrick's</b> is a Western and European dining restaurant. From American to Italian dishes, you should try visitng this restaurant<br>"+
            "<b>Opens</b><br>"+
            "- 11:00 AM - 10:00 PM<br>"+
            "<b>What to Expect?</b><br>"+
            "- Western Cuisine<br>"+
            "<b>Best Dish</b><br>"+
            "- Cowboy Hamburger"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function RoomDining()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>Can you give information about room dining?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Room service or in-room dining is a hotel service enabling guests to choose items of food and drink for delivery to their hotel room for consumption. The hotel provides you the menu by the time when you check-in.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function SuggestBest()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>Which restaurant is the best, especially for occassions?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},350,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'><b>Ocean Club Restaurant</b> serves the best meals in the hotel premises.<br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},450,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'><b>Ocean Club</b> is a exclusive club for guests in Suite accomodation. It has it's own restaurant that provides local dishes and sea foods.<br>"+
            "<b>Opens</b><br>"+
            "-9:00 AM - 12:00 AM<br>"+
            "<b>What to Expect?</b><br>"+
            "- Different types of sea foods, cooked in various ways and of course lechon.<br>"+
            "<b>Amazing view</b><br>"+
            "- This restaurant is nearby the sea. You can enjoy your meals while enjoying the ocean view<br>"+
            "<b>Best Dish</b><br>"+
            "- Butter Garlic Lobster and Caviar<br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice1();
}
function BeveragesInquiry()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>I would like to inquire about beverages.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>What would you like to inquire about our beverages?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice4();
}
function BeveragesInquiry2()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>Is liquor available in room dining?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Yes, but it is <b style='color:red;'>highly discouraged</b>. There are few bars in the hotel where you can enjoy liquors and have a good time. Any damages caused by alcohol intoxication will be penalized.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice4();
}
function BeveragesInquiry3()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user2'>"+
            " <p class='chat-message'>I would like to ask about bars in your hotel.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>These are the bars available in the hotel<br>"+
            "<b>*Ocean Club Bar</b><br>"+
            "-Offers fruit drinks, cocktails and liquors<br>"+
            "-Opens 2:00 PM - 12:00PM <br>"+
            "<b>*Fruit Delight</b><br>"+
            "-Offers fruit drinks and shakes<br>"+
            "-Opens 9:00 AM - 7:00PM <br>"+
            "<b>*Leprechaun's</b><br>"+
            "-Offers Western and European choice of liquors and beverages.<br>"+
            "-Opens 2:00 PM - 12:00PM <br>"+
            "<b>*Pool Side Bar</b><br>"+
            "-Offers local and international brand of liquors<br>"+
            "-Opens 2:00 PM - 12:00PM <br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice4();
}
function PreviousQuestion()
{
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choice1();
}