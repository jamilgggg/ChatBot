$(document).ready(function () {
    $("#ChatLog").animate({left : '2500px'},500,function() {
        $("#ChatLog").append(
            "<div class='chat'>"+
            "<div class='chatbot-photo'> <img src='images/robotchat.jpg' class='chathead'></div>"+
            " <p class='chat-message'>Hi! Rooms Inquiries Service</p>"+
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
      $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='RoomInquiry1()'>Rooms comfortable?</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='RoomSuites()'>Ask about rooms and suites</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='RoomInquiry2()'>Are the rooms scary?</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='ExitChat()'>Exit ChatBot</button>" 
        );
      });
    
});
function scrollDown()
{
  $('#ChatLog').animate({
    scrollTop: $('#ChatLog').get(0).scrollHeight
  }, 1000); 
}
function  Choices2()
{
      $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='SuggestBest()'>Give me the best room/suite</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='RoomSuites()'>Ask about rooms and suites</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='SuggestAffordable()'>Suggest an affordable room</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='ExitChat()'>Exit ChatBot</button>" 
        );
      });
}
function  Choices3()
{
      $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='RoomInquiry3()'>Ask about rooms</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='PreviousQuestion()'>Previous Questions</button>" 
            
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
          "<button type='button' class='btn btn-success' onclick='SuiteInquiry()'>Ask about suites</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='DifferenceInquiry()'>Difference between rooms and suites</button>"
          
        );
      });
}
function  Choices4()
{
      $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='RoomTypes()'>Room Types</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success'  onclick='SuggestAffordable()'>Suggest an affordable room</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='SuggestBest()'>Give me the best room/suite</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='RoomPrices()'>Room Prices</button>" 
        );
      });
}
function  Choices5()
{
      $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='DeluxeRoom()'>Deluxe Room</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='DeluxeRoom2()'>Deluxe Family Room</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success'  onclick='OceanRoom()'>Ocean Premier Room</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='OceanRoom2()'>Ocean Panorama Room</button>" 
        );
      });
}
function  Choices6()
{
      $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='SuiteTypes()'>Suite Types</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='SuggestBest()'>Give me the best room/suite</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='SuitePrices()'>Suite Prices</button>" 
        );
      });
}
function  Choices7()
{
      $("#reply").animate({left : '2500px'},2000,function() {
        $("#reply").append(
            "<button type='button' class='btn btn-success' onclick='IslandSuite()'>Island Suite</button>"+
            "<span style = 'margin-right:10px;'></span>"+
            "<button type='button' class='btn btn-success' onclick='PanoramaSuite()'>Panorama Suite</button>" 
        );
      });
      $("#secondspace").animate({left : '2500px'},2500,function() {
        $("#secondspace").append(
            "<button type='button' class='btn btn-success' onclick='PresidentialSuite()'>Presidential Suite</button>" 
        );
      });
}
function RoomInquiry1()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Are the rooms comfortable?</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'> <img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>Yes! Our rooms are relaxing and comfy</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices2();
}
function RoomInquiry2()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Are the rooms scary and does the hotel have a dark history?</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>Those were proven to be false claims. The hotel is completely safe, especially from scary ones :) </p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices2();
}
function RoomSuites()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>I would like to inquire about rooms and suites</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>What would you like to inquire in particular?</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function DifferenceInquiry()
{
   $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>What's the difference between rooms and suites</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>You get a single room with one or more king, queen, full, or twin beds, a work desk, a bathroom, and maybe a closet, a TV, and a dresser. A suite is a much larger accommodation. It usually has an attached bathroom, a living area, and most times, includes a dining area as well.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices2();
}
function RoomInquiry3()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>I would like to inquire about rooms.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices4();
}
function RoomTypes()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Room types to be exact</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>The Palms Hotel has 4 types of Rooms <br>"+
          "<b>* Deluxe Room </b><br>"+
          "<b>* Deluxe Family Room </b><br>"+
          "<b>* Ocean Premier Room </b><br>"+
          "<b>* Ocean Panorama Room</b><br><br>"+
          "Which of these rooms sounds interesting to you?"+ 
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices5();
}
function DeluxeRoom()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Deluxe Room sounds interesting.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'><b>Deluxe Rooms</b> offer warm, elegant accommodation inspired by tropical elements such as corals and shells and accented with luxurious Philippine craftsmanship. <br>"+
          "<b><br>Features</b><br>"+
          "* Each room offers 34 sqm / 365 sqf of luxury<br>"+
          "* Views of the greenery and landscaped surroundings and a private balcony.<br>"+
          "* Complimentary breakfast for two adults and Wi-Fi <br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function DeluxeRoom2()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Deluxe Family Room sounds interesting.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>Ideal for families and groups travelling together, the stylishly designed <b>Deluxe Family Rooms</b> offer two queen-sized beds. <br>"+
          "<b><br>Features</b><br>"+
          "* Each room offers 45-61 sqm / 482-583 sqf of luxury.<br>"+
          "* Views of the greenery and landscaped surroundings and a private balcony.<br>"+
          "* Breakfast for two adults and Wi-Fi<br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function OceanRoom()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Ocean Wing Premier Room sounds interesting.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'><b>Ocean Wing Premier Rooms</b> are either pool facing or overlook lush gardens in a secluded setting. The decor comprises an inviting blend of traditional and contemporary Philippine styles.<br>"+
          "<b><br>Features</b><br>"+
          "*Each room offers 34 sqm / 365 sqf of luxury<br>"+
          "*Sweeping views of tropical gardens and a private balcony.<br>"+
          "*Complimentary breakfast for two adults and Wi-Fi<br>"+
          "*Roundtrip airport shuttle bus transfers.<br>"+
          "*Access to the Ocean Wing pool exclusively for Ocean Wing and Suite guests aged 12 years old and above.</u><br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function OceanRoom2()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Ocean Wing Panorama Room sounds interesting.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'><b>Ocean Wing Panorama Rooms</b> face the beach and ocean, and offer a stylish, contemporary design infused with traditional Philippine materials.<br>"+
          "<b><br>Features</b><br>"+
          "*Each room offers 34 sqm / 387 sqf of luxury<br>"+
          "*Stunning views of the ocean.<br>"+
          "*A private balcony with a coffee table and seating for two.<br>"+
          "*Roundtrip airport shuttle bus transfers.<br>"+
          "*Bathrooms feature plush cotton towels, exclusive toiletries and a bath tub.<br>"+
          "*Breakfast for two adults and Wi-Fi<br>"+
          "*Access to the Ocean Wing pool exclusively for Ocean Wing and Suite guests aged 12 years old and above.</u><br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function RoomPrices()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Room prices to be exact</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>These are the prices for each rooms<br>"+
          "<b>* Deluxe Room </b><br>"+
          "--PHP 8,000 Average Per Night<br>"+
          "<b>* Deluxe Family Room </b><br>"+
          "--PHP 10,500 Average Per Night<br>"+
          "<b>* Ocean Premier Room </b><br>"+
          "--PHP 14,500 Average Per Night<br>"+
          "<b>* Ocean Panorama Room</b><br>"+
          " --PHP 16,000 Average Per Night<br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function SuiteInquiry()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>I would like to inquire about suites.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices6();
}
function SuiteTypes()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Suite types to be exact</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>The Palms Hotel has 3 types of Suites <br>"+
          "<b>* Island Suites </b><br>"+
          "<b>* Panorama Suites</b><br>"+
          "<b>* Presidential Suites</b><br>"+
          "Which of these suites suits you?"+ 
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices7();
}
function IslandSuite()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>I would like to know more about Island Suites.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>The <b>Island Suites</b> offer families the luxury of relaxation with  a refreshing, contemporary resort ambience.<br>"+
          "<b><br>Features</b><br>"+
          "*Each suite offers 68 sqm / 730 sqf of luxury.<br>"+
          "*Garden View<br>"+
          "*Luxury one-bedroom suite with a separate living and dining area.<br>"+
          "*Roundtrip airport shuttle bus transfers.<br>"+
          "*The marble bathroom has a soaking tub and a separate shower cubicle.<br>"+
          "*Breakfast for two adults and Wi-Fi<br>"+
          "*Access to Ocean Club that offers meals,cocktails and luxury spa.<br>"+
          "*Access to the Ocean Wing pool exclusively for Ocean Wing and Suite guests aged 12 years old and above.</u><br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function PanoramaSuite()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>I would like to know more about Panorama Suite.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>With views of the shimmering blue ocean and nearby islands, the <b>Panorama Suite </b> offers expansive luxury and an inviting, Asian-inspired decor.<br>"+
          "<b><br>Features</b><br>"+
          "*Each suite offers 72 sqm / 775 sqf of luxury.<br>"+
          "*Ocean View<br>"+
          "*Luxury one-bedroom suite with a private balcony, separate parlour and dining area<br>"+
          "*Roundtrip airport shuttle bus transfers.<br>"+
          "*The marble bathroom has a soaking tub and a separate shower cubicle.<br>"+
          "*Breakfast for two adults and Wi-Fi<br>"+
          "*Access to Ocean Club that offers meals,cocktails and luxury spa.<br>"+
          "*Access to the Ocean Wing pool exclusively for Ocean Wing and Suite guests aged 12 years old and above.</u><br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function PresidentialSuite()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>I would like to know more about Presidential Suite.</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>Offering a high level of luxury, elegance and attentive Palms Hotel service, the richly decorated <b>Presidential Suite</b> is ideal for sophisticated entertaining or special occasions.<br>"+
          "<b><br>Features</b><br>"+
          "*Each suite offers 216 sqm / 2,325 sqf of luxury.<br>"+
          "*Ocean View<br>"+
          "*Luxury one-bedroom suite with a private balcony, separate parlour and dining area<br>"+
          "*Roundtrip airport shuttle bus transfers.<br>"+
          "*The marble bathroom has a soaking tub and a separate shower cubicle.<br>"+
          "*Breakfast for two adults and two children in luxury restaurant and Wi-Fi<br>"+
          "*Access to Ocean Club that offers meals,cocktails and luxury spa.<br>"+
          "*Access to the Ocean Wing pool exclusively for Ocean Wing and Suite guests aged 12 years old and above.</u><br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function SuitePrices()
{
    $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>Suite prices to be exact</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>These are the prices for each suites<br>"+
          "<b>*Island Suite</b><br>"+
          "--PHP 23,500 Average Per Night<br>"+
          "<b>*Panorama Suite</b><br>"+
          "--PHP 33,000 Average Per Night<br>"+
          "<b>*Presidential Suite</b><br>"+
          "--For Reservation<br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices3();
}
function SuggestBest()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
      $("#ChatLog").append(
          "<div class='chat user'>"+
          " <p class='chat-message'>What's the most luxurious suite that a guest can enjoy?</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},300,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>"+
          "*The best suite that the Palms hotel has to offer is the <b>Presidential Suite</b>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $("#ChatLog").animate({left : '2500px'},450,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>Offering a high level of luxury, elegance and attentive Palms Hotel service, the richly decorated <b> Presidential Suite</b> is ideal for sophisticated entertaining or special occasions.<br>"+
          "<b><br>Features</b><br>"+
          "*Each suite offers 216 sqm / 2,325 sqf of luxury.<br>"+
          "*Ocean View<br>"+
          "*Luxury one-bedroom suite with a private balcony, separate parlour and dining area<br>"+
          "*Roundtrip airport shuttle bus transfers.<br>"+
          "*The marble bathroom has a soaking tub and a separate shower cubicle.<br>"+
          "*Breakfast for two adults and two children in luxury restaurant and Wi-Fi<br>"+
          "*Access to Ocean Club that offers meals,cocktails and luxury spa.<br>"+
          "*Access to the Ocean Wing pool exclusively for Ocean Wing and Suite guests aged 12 years old and above.</u><br>"+
          "</p>"+
          " </div>"
      );
    });
    scrollDown();
    $( "#reply" ).empty();
    $( "#secondspace" ).empty();
    Choices2();
}
function SuggestAffordable()
{
  $("#ChatLog").animate({left : '2500px'},200,function() {
    $("#ChatLog").append(
        "<div class='chat user'>"+
        " <p class='chat-message'>What's the most affordable room that a guest can enjoy?</p>"+
        " </div>"
    );
  });
  scrollDown();
  $("#ChatLog").animate({left : '2500px'},300,function() {
    $("#ChatLog").append(
        "<div class='chat bot'>"+
        "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
        " <p class='chat-message'>"+
        "*The cheapest yet relaxing room you can enjoy in Palms Hotel is the <b>Deluxe Room</b>."+
        "The average per night for this room is only PHP 8,000"+
        "</p>"+
        " </div>"
    );
  });
  scrollDown();
    $("#ChatLog").animate({left : '2500px'},450,function() {
      $("#ChatLog").append(
          "<div class='chat bot'>"+
          "<div class='chatbot-photo'><img src='images/robotchat.jpg' class='chathead'></div>"+
          " <p class='chat-message'>Deluxe Rooms offer warm, elegant accommodation inspired by tropical elements such as corals and shells and accented with luxurious Philippine craftsmanship. <br>"+
          "<b><br>Features</b><br>"+
          "* Each room offers 34 sqm / 365 sqf of luxury<br>"+
          "* Views of the greenery and landscaped surroundings and a private balcony.<br>"+
          "* Complimentary breakfast for two adults and Wi-Fi <br>"+
          "</p>"+
          " </div>"
      );
    });
  scrollDown();
  $( "#reply" ).empty();
  $( "#secondspace" ).empty();
  Choices2();
}
function PreviousQuestion()
{
  scrollDown();
  $( "#reply" ).empty();
  $( "#secondspace" ).empty();
  Choices2();
}
function ExitChat()
{
     $('#ExitModal').modal('show');
}