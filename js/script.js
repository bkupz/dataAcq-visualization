
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

var pages = ['&sheet=acceleration', '&sheet=position', '&sheet=gas-pres', '&sheet=oil-temp', '&sheet=cvt', '&sheet=force', '&sheet=brake-pres', '&sheet=shock-disp', '&sheet=steering-disp'];
var url = 'https://docs.google.com/spreadsheets/d/1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM/edit?usp=sharing';

function drawCharts() {
    var query = new google.visualization.Query(url+pages[0]);
    query.send(handleQueryResponseAcceleration);

    var query = new google.visualization.Query(url+pages[1]);
    query.send(handleQueryResponsePosition);

    var query = new google.visualization.Query(url+pages[2]);
    query.send(handleQueryResponseGasPres);
    
    var query = new google.visualization.Query(url+pages[3]);
    query.send(handleQueryResponseOilTemp);
    
    var query = new google.visualization.Query(url+pages[4]);
    query.send(handleQueryResponseCVT);
    
    var query = new google.visualization.Query(url+pages[5]);
    query.send(handleQueryResponseForce);
    
    var query = new google.visualization.Query(url+pages[6]);
    query.send(handleQueryResponseBrakePres);
    
    var query = new google.visualization.Query(url+pages[7]);
    query.send(handleQueryResponseShockDisp);
    
    var query = new google.visualization.Query(url+pages[8]);
    query.send(handleQueryResponseSteeringDisp);
}

function handleQueryResponseAcceleration(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Acceleration Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();
    
    var id = 'acceleration-chart';
    
    drawChart(data, options, id);
}

function handleQueryResponsePosition(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Position Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'position-chart'
    drawChart(data, options, id);
}

function handleQueryResponseGasPres(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Gas Pedal Pressure Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'gas-pre-chart';
    drawChart(data, options, id);
}

function handleQueryResponseOilTemp(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Oil Tempuratue Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'oil-temp-chart';
    drawChart(data, options, id);
}

function handleQueryResponseCVT(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'CVT Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'cvt-chart';
    drawChart(data, options, id);
}

function handleQueryResponseForce(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Force Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'force-chart';
    drawChart(data, options, id);
}

function handleQueryResponseBrakePres(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Brake Pressue Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'brake-pre-chart';
    drawChart(data, options, id);
}


function handleQueryResponseShockDisp(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Shock Displacement Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'shock-disp-chart';
    drawChart(data, options, id);
}


function handleQueryResponseSteeringDisp(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Steering Displacment Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'steering-disp-chart';
    drawChart(data, options, id);
}

function drawChart(data, options, id) {
    var chart = new google.visualization.LineChart(document.getElementById(id));
    chart.draw(data, options);
}

document.Test = function() {
    var query = new google.visualization.Query(url);
    query.send(function(response){
        if (response.isError()) {
            console.log('URL Test Failed!');
        } else {
            console.log('URL Test Passed!');
        }
    });

}
