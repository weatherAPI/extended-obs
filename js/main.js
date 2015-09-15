$.ajax({
    url: "http://api.weather.com/v2/aggregate/v2loc;v2obs;v2fcstdaily3;v2fcsthourly6;v2astro?geocode=34.06,-84.21&format=json&language=en-US&R2.units=e&R3.units=e&R4.units=e&R5.units=e&R5.days=2&apiKey=[CLIENT-KEY]",
    dataType: "json",
    type: "GET",
    success: function(json) {
        $('#location').append(json.result[0].result.addresses[0].address + " " + json.result[0].result.addresses[0].locality + ", " + json.result[0].result.addresses[0].admin_district);
        $('<img/>').attr({src:"https://api.wunderground.com/i/c/api/icon-" + json.result[1].result.observation.wx_icon + ".svg", id:"icon"}).appendTo("#icon");
        $('#temp').append(json.result[1].result.observation.temp + "&deg;F");
        $('#condition').append(json.result[1].result.observation.wx_phrase);
        $('#high').append("High:&nbsp;" + json.result[1].result.observation.max_temp + "&deg;F");
        $('#humidity').append("Humidity:&nbsp;" + json.result[1].result.observation.rh + "%");
        $('#wind').append("Wind:&nbsp;" + json.result[1].result.observation.wdir_cardinal + "&nbsp;at&nbsp;" + json.result[1].result.observation.wspd + "&nbsp;mph");
        $('#heatindex').append("Heat Index:&nbsp;" + json.result[1].result.observation.heat_index + "&deg;F");
        $('#pressure').append("Pressure:&nbsp;" + json.result[1].result.observation.pressure + "&nbsp;in");
        $('#dewp').append("Dew Point:&nbsp;" + json.result[1].result.observation.dewPt + "&nbsp;&deg;F");
        $('#uv').append("UV Index:&nbsp;" + json.result[1].result.observation.uv_index + "&nbsp;" + "(" + json.result[1].result.observation.uv_desc + ")");
        $('#visibility').append("Visibility:&nbsp;" + json.result[1].result.observation.vis + "&nbsp;mi");
    }
});
