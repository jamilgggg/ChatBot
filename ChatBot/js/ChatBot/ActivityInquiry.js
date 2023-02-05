$(document).ready(function () {
    $("#ChatLog").animate({left : '2500px'},500,function() {
        $("#ChatLog").append(
            "<div class='chat'>"+
            "<div class='chatbot-photo'> <img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Kumusta! This is Activity Inquiry</p>"+
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
function PreviousQuestion()
{
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choice1();
}
function Choice1()
{
    $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-primary' onclick='Recreational()'>Recreational and Indoor</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='SeaSports()'>Sea Sports</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-primary' onclick='Sports()'>Sports</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='Swimming()'>Swimming</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='ExitChat()'>Exit ChatBot</button>" 
        );
      });
}
function Choice2()
{
    $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-primary' onclick='DiffSports()'>List of different sports</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='BodyDevelopment()'>Body Development</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-primary' onclick='IndoorAmenities()'>Indoor Amenities</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='PreviousQuestion()'>Previous Question</button>" 
        );
      });
}
function Choice3()
{
    $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-primary' onclick='Safety()'>Is it safe?</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='Trust()'>Can we trust your people and staff?</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-primary' onclick='SeaActivity()'>List of available activities</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='PreviousQuestion()'>Previous Question</button>" 
        );
      });
}
function Recreational()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>I would like to ask about recreational and indoor sports.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>What would you like to inquire in particular? </p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function DiffSports()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>What are the available indoor sports in your hotel?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>These are the indoor sports available in the hotel.<br>"+
            "<b>*Table Tennis</b><br>"+
            "<b>*Board Games</b><br>"+
            "(Available in Kid's Entertainment and Board Games Room)<br>"+
            "<b>*Volleyball</b><br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function BodyDevelopment()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>Do you have some activities and facilities provided for body development?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Yes. As advocates for physical fitness, we provided amenities for body development for our guests.<br>"+
            "Here are some:<br><br>"+
            "<b>*The CHI, SPA (Ocean Club Members Only)</b><br>"+
            "<b>*Thai Massage and Spa</b><br>"+
            "<b>*Boxing and Fitness Gym</b><br>"+
            "<b>*Yoga Center</b><br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function IndoorAmenities()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>What are the available amenities inside the hotel?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>These are the list of available indoor amenities in the hotel.<br>"+
            "<b>*Exercise Rooms and Gym</b><br>"+
            "<b>*Spa and Massage Rooms</b><br>"+
            "<b>*Yoga Center</b><br>"+
            "<b>*Entertainment Rooms</b><br>"+
            "<b>*Indoor Swimming Pool</b><br>"+
            "<b>*Lounge with food and drinks</b><br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function SeaSports()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>I would like to inquire about sea sports.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>What would you like to inquire in particular? </p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice3();
}
function Safety()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>Is water sports safe in general?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>With proper equipments and trained staff, we can ensure your safety in sea sports adventure.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice3();
}
function Trust()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>Can we trust your people and staff?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>We hired experts both locals and foreigners to maximize your enjoyment while in comfort.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice3();
}
function SeaActivity()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>What are the available sea activities and sports?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>These are the list of available sea activities.<br><br>"+
            "<b>*Beach Swimming</b><br>"+
            "<b>*Water Trampoline</b><br>"+
            "<b>*Banana Boat Ride</b><br>"+
            "<b>*Island Hopping</b><br>"+
            "<b>*JetSki Ride</b><br>"+
            "<b>*Parasailing</b><br>"+
            "<b>*Paragliding</b><br>"+
            "<b>*Windsurfing</b><br>"+
            "<b>*Surfing</b><br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice3();
}
function Sports()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>What are the available sports in your hotel?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>These are the list of available sports.<br><br>"+
            "<b>*Basketball</b><br>"+
            "<b>*Volleyball</b><br>"+
            "<b>*Badminton</b><br>"+
            "<b>*Tennis</b><br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice1();
}
function Swimming()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user3'>"+
            " <p class='chat-message'>Where can the guests swim?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>The <b>Palms Hotel</b> has 5 swimming pools. You can swim in 4 pools except on the Ocean Wing pool. You can also visit the beach, clear-water and white sand beach</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice1();
}