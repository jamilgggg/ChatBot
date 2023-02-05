$(document).ready(function () {
    $("#ChatLog").animate({left : '2500px'},500,function() {
        $("#ChatLog").append(
            "<div class='chat'>"+
            "<div class='chatbot-photo'> <img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Hi! Ask me some inquiries about the hotel.</p>"+
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
            "<button type='button' class='btn btn-success' onclick='HotelSafety()'>Is your hotel safe and secured</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='Choice2()'>Few more questions</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='PersonPerRoom()'>No. of person per room</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='ExitChat()'>Exit ChatBot</button>"
        );
      });
}
function Choice2()
{
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='Payment()'>Payment method</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='Pets()'>Are pets allowed?</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='Internet()'>Internet Connection</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='PreviousQuestion()'>Previous Question</button>"
        );
      });
}
function HotelSafety()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user'>"+
            " <p class='chat-message'>Is the hotel safe and secured?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Our hotel is located in a secluded area in Lapu-Lapu City which is heavily guarded with trained armed guards and bomb sniffing dogs. Your safe is our priority</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice1();
}
function PersonPerRoom()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user'>"+
            " <p class='chat-message'>What is the maximum number of person per room?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Each room has a maximum of 2 adults and one children. Except for <b>Presidential Suite</b>, which has the maximum of 3 adults and 3 children.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice1();
}
function Payment()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user'>"+
            " <p class='chat-message'>What are hotel's payment methods?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>We accept following payment methods.<br><br>"+
            " -Cash <br>"+
            " -Valid credit cards <br>"+
            " -Bank Transfers <br>"+
            " -PayMaya <br>"+
            " -Gcash <br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function Pets()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user'>"+
            " <p class='chat-message'>Can we bring pets in hotel?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>We kindly ask you to consult with us for booking your pets. In general, bringing your loyal companions is allowed"+
            "Out of consideration for other guests, please understand that bringing dogs into our hotel restaurant, into rooms with carpets and in the wellness zone is not allowed. We charge <b>PHP 500</b> per day per dog/pet without food. We reserve the right to charge for any required final cleaning of the room.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}
function Internet()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user'>"+
            " <p class='chat-message'>I would like to inquire about the internet connection?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            "<p class='chat-message'> From the gates to the beach, The Palms Hotel has a Wi-Fi connection almost every part of the premises. The hotel is equipped with Fiber internet connection, so uploads wouldn't be a problem.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice2();
}