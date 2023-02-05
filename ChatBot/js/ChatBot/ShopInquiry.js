$(document).ready(function () {
    $("#ChatLog").animate({left : '2500px'},500,function() {
        $("#ChatLog").append(
            "<div class='chat'>"+
            "<div class='chatbot-photo'> <img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>This is Shops Inquiry</p>"+
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
            "<button type='button' class='btn btn-primary' onclick='ShopInquiry1()'>What kinds of shops do you have? </button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='ShopInquiry2()'>Are items affordable?</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-primary'  onclick='ShopInquiry3()'>List of all available shops</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-primary'  onclick='ExitChat()'>Exit ChatBot</button>" 
        );
      });
}
function ShopInquiry1()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user4'>"+
            " <p class='chat-message'>What kinds of shops do you have here?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Most of the shops visible in the hotel are souvernir shops and food marts. Try visiting them!</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice1();
}
function ShopInquiry2()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user4'>"+
            " <p class='chat-message'>Are the items affordable?</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>These items from the shops have reasonable price. It's not too expensive and it's not too cheap.</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice1();
}
function ShopInquiry3()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
        $("#ChatLog").append(
            "<div class='chat user4'>"+
            " <p class='chat-message'>List all the available shops in the hotel</p>"+
            " </div>"
        );
      });
      scrollDown();
      $("#ChatLog").animate({left : '2500px'},300,function() {
        $("#ChatLog").append(
            "<div class='chat bot'>"+
            "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>These are the list of available shops.<br><br>"+
            "<b>*Island Souvenir</b><br>"+
            "-Local souvenir shops and variety of items.<br>"+
            "<b>*Guitar Store</b><br>"+
            "<b>*Filipino Delicacies</b><br>"+
            "-Local delicacies such as dried mangoes<br>"+
            "<b>*Family Mart</b><br>"+
            "-Convenience Store<br>"+
            "<b>*Duty Free</b><br>"+
            "</p>"+
            " </div>"
        );
      });
      scrollDown();
      $( "#reply" ).empty();
      $( "#secondspace" ).empty();
      Choice1();
}