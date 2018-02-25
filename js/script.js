
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawAllCharts);

      function drawAllCharts() {
        drawAccelerationChart();
        drawPositionChart();
        drawGasPresChart();
        drawOilTempChart();
        drawCVTChart();
        drawForceChart();
        drawBrakePresChart();
        drawShockDispChart();
        drawSteeringDispChart();
      }

      function drawAccelerationChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'Acceleration Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('acceleration-chart'));
        chart.draw(data, options);
      }

            
      function drawPositionChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'Position Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('position-chart'));
        chart.draw(data, options);
      }
            
      function drawGasPresChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'Gas Pedal Pressure Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('gas-pre-chart'));
        chart.draw(data, options);
      }
            
      function drawOilTempChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'Oil Tempuratue Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('oil-temp-chart'));
        chart.draw(data, options);
      }
            
      function drawCVTChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'CVT Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('cvt-chart'));
        chart.draw(data, options);
      }
            
      function drawForceChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'Force Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('force-chart'));
        chart.draw(data, options);
      }
            
      function drawBrakePresChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'Brake Pressue Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('brake-pre-chart'));
        chart.draw(data, options);
      }
            
      function drawShockDispChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'Shock Displacement Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('shock-disp-chart'));
        chart.draw(data, options);
      }
            
      function drawSteeringDispChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
        var options = {
          title: 'Steering Displacment Chart',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var chart = new google.visualization.LineChart(document.getElementById('steering-disp-chart'));
        chart.draw(data, options);
      }
        