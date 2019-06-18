function(instance, properties, context) {
	var bubble_data_obj = [];
  	var settings = [];
  	
  
    
  	function fn_bubble_data() {
        //fetch Bubble internal database data from Element fields
      	var len = properties.data_source_category.length();
        data_values = properties.data_source_value.get(0,len);
        data_category = properties.data_source_category.get(0,len);
      	data_color = properties.data_source_color.get(0,len);
      
        //create object that merges Bubble data arrays together into single object
		bubble_data_obj = {
          labels: data_category,
          datasets: [
              {
                  label: properties.data_source_label,
                  backgroundColor: data_color,
                  borderColor: (properties.data_source_bordercolor == null ? "rgba(255,99,132,10)" : properties.data_source_bordercolor),
                  borderWidth: 1,
                  hoverBackgroundColor: (properties.data_source_hover_bgcolor == null ? "rgba(255,99,132,0.4)" : properties.data_source_hover_bgcolor),
                  hoverBorderColor: (properties.data_source_hover_bordercolor == null ? "rgba(255,99,132,1)" : properties.data_source_hover_bordercolor),
                  data: data_values,
              }
          ],
          maxval: Math.max.apply(Math, data_values),
        };
        
    }
  	
    fn_bubble_data();  


	instance.data.drawPie(settings, bubble_data_obj);
    
}