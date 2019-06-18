function(instance, context) {
    instance.data.update_runCount = 0;
    var divPie;
    var divName = "graphdiv"+Math.round(Math.random()*10000) + 1;
    divPie = $('<div style="position: relative !important;margin: auto !important; height: 80vh; width: 80vw;" ><canvas id="'+divName+'"></canvas></div>');
    divPie.css("width", "100%");
    divPie.css("height", "100%");

    instance.canvas.append(divPie);

    instance.data.drawPie = function(settings, bubble_data_obj) {

    	pushData(bubble_data_obj, null); 
      
    	function pushData(data, tabletop) {
          
          var maxcountval = 10;
          if(data.maxval > 160 && data.maxval < 400)
            maxcountval = 50
          else if(data.maxval > 400 && data.maxval < 1000)
            maxcountval = 100
          else if(data.maxval > 1000 && data.maxval < 2000)
            maxcountval = 250
          else if(data.maxval > 2000)
            maxcountval = 500
          
          
          instance.data.update_runCount++;
          var ctx = $('#'+divName);
          instance.data.chart = new Chart(ctx, {
                  type: 'bar',
                  data: data,
                  options: {
                      responsive: true,
                      legend: {
                          display: false,
                      },
                      maintainAspectRatio: false,
                      scales:
                      {
                          xAxes: [{
                              stacked: true,
                              gridLines : {
                                  display : false
                              },
                              ticks: {
                                fontColor: "#FFFFFF",
                                fontSize: 8,
                                maxRotation: 0 
                              }
                          }],
                          yAxes: [{
                             ticks: {
                                  min: 0,
                                  fontColor: "#FFFFFF",
                               	  stepSize : maxcountval
                              }
                          }]
                      },
                      tooltips: {
                          enabled: false
                      },
                  },
              });

        	};
      }

}