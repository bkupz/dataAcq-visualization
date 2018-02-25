
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM/edit?usp=sharing");
        query.send(handleQueryResponse);
      }
      
      function handleQueryResponse(response) {
        if (response.isError()) {
          console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }

        var data = response.getDataTable();
        drawAccelerationChart(data);
        drawPositionChart(data);
        drawGasPresChart(data);
        drawOilTempChart(data);
        drawCVTChart(data);
        drawForceChart(data);
        drawBrakePresChart(data);
        drawShockDispChart(data);
        drawSteeringDispChart(data);
      }

      function drawAccelerationChart(data) {
        var options = {
          title: 'Acceleration Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('acceleration-chart'));
        chart.draw(data, options);
      }

            
      function drawPositionChart(data) {
        var options = {
          title: 'Position Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('position-chart'));
        chart.draw(data, options);
      }
            
      function drawGasPresChart(data) {
        var options = {
          title: 'Gas Pedal Pressure Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('gas-pre-chart'));
        chart.draw(data, options);
      }
            
      function drawOilTempChart(data) {
        var options = {
          title: 'Oil Tempuratue Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('oil-temp-chart'));
        chart.draw(data, options);
      }
            
      function drawCVTChart(data) {
        var options = {
          title: 'CVT Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('cvt-chart'));
        chart.draw(data, options);
      }
            
      function drawForceChart(data) {
        var options = {
          title: 'Force Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('force-chart'));
        chart.draw(data, options);
      }
            
      function drawBrakePresChart(data) {
        var options = {
          title: 'Brake Pressue Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('brake-pre-chart'));
        chart.draw(data, options);
      }
            
      function drawShockDispChart(data) {
        var options = {
          title: 'Shock Displacement Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('shock-disp-chart'));
        chart.draw(data, options);
      }
            
      function drawSteeringDispChart(data) {
        var options = {
          title: 'Steering Displacment Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('steering-disp-chart'));
        chart.draw(data, options);
      }
        