$(function() {

var scheduleJson = {
  "schedule": {
    "days": [
      {
        "name": "Wednesday",
        "id": 1,
        "shows": [
          {"id": 1,
          "start": 2000,
          "name": "Pre-Party/Artist Wristband Pick-up Party",
          "venue": "Pawn Shop",
          "bands": [
            {"name": "Catgut"},
            {"name": "Ghibli"},
            {"name": "Brazilian Money"},
            {"name": "Mitchmatic"}
          ]
        }]
      },
      {
        "name": "Thursday",
        "id": 2,
        "shows": [
          {
            "id": 18,
            "start": 2000,
            "name": "SECRET SHOW",
            "venue": "Cha Island",
            "bands": [
              {"name": "Layne L'Heaureux"},
              {"name": "Nolan Bossert (Strugglefucks)"},
              {"name": "Jon Mick Comedy Blast"}
            ]
          }
        ]
      },
      {
        "name": "Friday",
        "id": 3,
        "shows": [
          {
            "id": 2,
            "start": 1900,
            "name": "FREE",
            "venue": "Tavern on Whyte",
            "bands": [
              {"name": "Max Uhlich"},
              {"name": "Zebra Pulse"},
              {"name": "Creaks"}
            ]
          },
          {
            "id": 3,
            "start": 1900,
            "name": "PCD SHOWCASE",
            "venue": "Cha Island",
            "bands": [
              {"name": "Pornography"},
              {"name": "Neurocancer (Grande Prairie)"},
              {"name": "Tomahonquil (Grande Prairie)"},
              {"name": "Meatforce"},
              {"name": "Royal Iguana Furs"},
              {"name": "Matthew A Wilkinson (Grande Prairie)"},
              {"name": "Pigeon Breeders"}
            ]
          },
          {
            "id": 4,
            "start": 2100,
            "venue": "DV8",
            "bands": [
              {"name": "Scrapbooker"},
              {"name": "Todos Caeran"},
              {"name": "Cold Water (Calgary)"}
            ]
          },
          {
            "id": 5,
            "start": 2100,
            "venue": "Wunderbar",
            "bands": [
              {"name": "Strugglefucks"},
              {"name": "Rattle Rattle"},
              {"name": "Bitterweed Draw (Calgary)"},
              {"name": "Misery Mountain Boys"}
            ]
          },
          {
            "id": 6,
            "start": 2100,
            "venue": "Young Walrus Mace",
            "bands" : [
              {"name": "Catholic Girls (Calgary)"},
              {"name": "Smokey"},
              {"name": "Powder Blue (Saskatoon)"},
              {"name": "Arrowz"}
            ]
          }
        ]
      },
      {
        "name": "Saturday",
        "id": 4,
        "shows": [
          {
            "id": 10,
            "start": 1500,
            "name": "FREE",
            "venue": "The Buckingham",
            "bands": [
              {"name": "Banshee"},
              {"name": "Lab Coast"},
              {"name": "Desiderata"},
              {"name": "Morals"}
            ]
          },
          {
            "id": 7,
            "start": 1800,
            "name": "FREE",
            "venue": "Tavern on Whyte",
            "bands": [
              {"name": "Little Blue"},
              {"name": "[Will Scott]"},
              {"name": "OJ Pimpson"}
            ]
          },
          {
            "id": 11,
            "start": 2000,
            "venue": "Cha Island",
            "bands": [
              {"name": "Emma Perri"},
              {"name": "Marlaena Moore"},
              {"name": "Ghostcousin"},
              {"name": "Tyler Butler"}
            ]
          },
          {
            "id": 12,
            "start": 2000,
            "name": "FREE OLD UGLY SHOWCASE",
            "venue": "The Empress",
            "bands": [
              {"name": "Diamond Mind"},
              {"name": "Travis Bretzer"}
            ]
          },
          {
            "id": 8,
            "start": 2100,
            "venue": "Young Walrus Mace",
            "bands": [
              {"name": "Flint"},
              {"name": "Wizards (Saskatoon)"},
              {"name": "Greyscreen (Calgary)"},
              {"name": "BOOSH"}
            ]
          },
          {
            "id": 9,
            "start": 2100,
            "name": "CJSR SHOWCASE",
            "venue": "Wunderbar",
            "bands": [
              {"name": "Burrows"},
              {"name": "Modern Aquatics (Calgary)"},
              {"name": "Gary Debussy"},
              {"name": "Renny Wilson"}
            ]
          }
        ]
      },
      {
        "name": "Sunday",
        "id": 5,
        "shows": [
          {
            "id": 13,
            "start": 1500,
            "venue": "Steel Wheels",
            "bands": [
              {"name": "Huckleberry"},
              {"name": "Strange Fires"},
              {"name": "Field + Stream"}
            ]
          },
          {
            "id": 14,
            "start": 1500,
            "name": "FREE",
            "venue": "Tavern on Whyte",
            "bands": [
              {"name": "NEK Trio"},
              {"name": "Evan Symons"},
              {"name": "The Patterns"}
            ]
          },
          {
            "id": 15,
            "start": 1600,
            "name": "FREE",
            "venue": "The Buckingham",
            "bands": [
              {"name": "The Archaics"},
              {"name": "Wizards (Saskatoon)"},
              {"name": "James Renton"}
            ]
          },
          {
            "id": 16,
            "start": 2000,
            "name": "Free - Layne L'Heaureux Album Relase Party",
            "venue": "Tavern on Whyte",
            "bands": [
              {"name": "Skin"},
              {"name": "The Faps"},
              {"name": "Layne L'Heareux"}
            ]
          },
          {
            "id": 17,
            "start": 2100,
            "name": "Secret Mystery Closing Show",
            "venue": "Wunderbar",
            "bands": [
              {"name": "Secret Mystery Closing Show"}
            ]
          }
        ]
      }
    ]
  }
};
  
  var wednesday = JSON.stringify(scheduleJson.schedule.days[0]);
  var schedLength = scheduleJson.schedule.days.length;
  var schedHtml = "";

  for (var i=0; i < schedLength; i++) {
    var dayName = scheduleJson.schedule.days[i].name;
    
    schedHtml += '<div class="sched-day ' + dayName.toLowerCase() + '" >';
    schedHtml += '<span class="dayName"><h3>' + dayName + '</h3></span><br/>';
    
    var dayLength = scheduleJson.schedule.days[i].shows.length;
    for (var n = 0; n < dayLength; n++) {
      var showVenue = scheduleJson.schedule.days[i].shows[n].venue;
      schedHtml += '<span class="showVenue"><strong>' + showVenue + '</strong>';
      
      if(scheduleJson.schedule.days[i].shows[n].name != null) {
        var showName = scheduleJson.schedule.days[i].shows[n].name;
        schedHtml += '<span class="showName"> - ' + showName + '</span>';
      }
      schedHtml += '</span></br>';

      var showStart = ((scheduleJson.schedule.days[i].shows[n].start)/100) - 12;
      schedHtml += '<strong>Starts @ </strong><span class="showVenue">' + showStart + ' pm</span><br/>';
      

      schedHtml += '<h6>Bands:</h6><span class="showBands">';
      var showBandsLength = scheduleJson.schedule.days[i].shows[n].bands.length;
      for (var m = 0; m < showBandsLength; m++) {
        var bandName = scheduleJson.schedule.days[i].shows[n].bands[m].name;
        schedHtml += '<span class="bandName"> - ' + bandName + '</span></br>';
      };
      schedHtml += '</span><br/>';
    };
      schedHtml += '</div>';

  };

  // var template = Handlebars.compile(wednesday);
  $("#schedule-div").append(schedHtml);
  
    $("div.sched-day").hide();

  var redoSched = function(dayClicked) {
    $("div.sched-day").hide();

    var classString = "div." + dayClicked;
    $(classString).show();
    
  };
  $("button.daybutt").click(function(){
    var dayClicked = this.id;

    $("div.sched-day").hide();

    var classString = "div." + this.id;
    $(classString).show();

    //$("div#schedule-div").fadeOut(400, redoSched(dayClicked));


    //$("div#schedule-div").fadeIn(400);
  });
});
