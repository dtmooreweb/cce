function loadJSON() {
    let request = new XMLHttpRequest();
    
    var family = $('input[name=family]:checked').val()
    var color = $('input[name=color]:checked').val()
    
    if(color == "Any") {
        var request_url = "https://data.sfgov.org/resource/vmnk-skih.json?family_name=" + family;
    } else {
        var request_url = "https://data.sfgov.org/resource/vmnk-skih.json?family_name=" + family + "&flower_color=" + color;
    }
    
    

    request.open('GET', request_url, false);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.responseText);

        let str = '';
        let html = ``;
        for (var i = 0; i < data.length; i++){
          var obj = data[i];
          
          let size = '';
          if(obj.size_at_maturity == "< 1 ft") {
              size = 'sm';
          } else if (obj.size_at_maturity == "1-3 ft") {
              size = 'md';
          } else if (obj.size_at_maturity == "4-6 ft") {
              size = 'lg';
          } else {
              size = 'xl';
          }
          
        var color_set = '#95f7a0';
        var color = '';
        color += obj.flower_color;
        var check = color.includes("White");
        if(check) {
            color_set = '#f5f5f5';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Yellow");
        if(check) {
            color_set = '#f2ff91';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Pink");
        if(check) {
            color_set = '#ff8cb4';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Indigo");
        if(check) {
            color_set = '#6652ff';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Magenta");
        if(check) {
            color_set = '#ff8afb';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Purple");
        if(check) {
            color_set = '#c88aff';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Orange");
        if(check) {
            color_set = '#ffbca3';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Red");
        if(check) {
            color_set = '#ff9191';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Black");
        if(check) {
            color_set = '#4f4949';
        }
        var color = '';
        color += obj.flower_color;
        var check = color.includes("Blue");
        if(check) {
            color_set = '#adbaff';
        }
        
        
          
          html += `
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-head" style="background-color: ` + color_set + `">
            </div>
            <div class="card-body">
                <div class="card-left">
                    <p class="card-name">` + obj.common_name + `</p>
                    <p class="card-latin">(` + obj.latin_name + `)</p>
                    <p class="card-type">` + obj.plant_type + `</p>
                    <a href="https://www.google.com/search?q=` + obj.common_name + `" target="_blank"><button type="button" class="view-button btn btn-sm btn-outline-secondary">View</button></a>
                </div>
                <div class="card-right">
                    <img class="card-icon-` + size + `" src="./icon.png"> 
                    <p class="size-text">` + obj.size_at_maturity + `</p>
                </div>
            </div>
          </div>
        </div>
          `;
          
          
          for (var key in obj){
            var value = obj[key];
            str += key + ": " + value + "<br>";
          }
          
          
          
          str += "<br>";
        }
           document.getElementById('content').innerHTML = html; 
        
        }
    };
    request.send();
}

loadJSON("https://data.sfgov.org/resource/vmnk-skih.json?family_name=Asteraceae");

