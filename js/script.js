// Loads the google charts packages we need and calls draw charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

// Global variables to be used throughout the script
var firstTime = true;
var fileID = "1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM";
var dataList = new Array();
var pages = ['&sheet=acceleration', '&sheet=position', '&sheet=gas-pres', '&sheet=oil-temp', '&sheet=cvt', '&sheet=force', '&sheet=brake-pres', '&sheet=shock-disp', '&sheet=steering-disp'];
var API_KEY = 'AIzaSyBMiJQmBE6uxyrHau_zmKpuetSLPA-Sj78';
var folderId = '1s6khUkCsQd2wi-wOF-gh8V-a_nSZ-Bza';
var fileName ='TestData'

// Wrapper function to draw each chart we wil need
function drawCharts() {
    var tasks = [];
    dataList = new Array();
    // request url

    var selectedData = getCheckedBoxes("checkboxName");

    //if no chart is selected it uses the default global fileID or if 1 sheet is selected
    if(selectedData == null || selectedData.length == 1){
        console.log("selectedData was null");
        var tsk = new Promise(function(resolve,reject) {
            if (selectedData == null){
                var fileIdentifier = fileID;
            }
            else
                var fileIdentifier = selectedData[0].id;
            //////this section could be refactored to use loadData() function 
            var url = "https://docs.google.com/spreadsheets/d/"+fileIdentifier+"/edit?usp=sharing";
            var query = new google.visualization.Query(url);
            query.send(function (somedata){
                var dat = handle(somedata);
                
                drawChartsDataArray(dat);
            });
            //////////////
        });
        
    }else{
        // this is if 2 sheets are selected it gets both of them and then 
        for(i = 0; i < selectedData.length; i++){
            var tsk = loadData(selectedData[i].id).then(function () {
            }).catch(function(err){
                //here you can get an error
                console.log("ERROR OCCURED"+err);
            });
            tasks.push(tsk);     
        }

        Promise.all(tasks).then(function(){
            console.log("tasks complete");
            twoFilesSelected(dataList[0],dataList[1]);
        });   
    }
}

//this gets data from google spreadsheet and puts it into a global array dataList needs to be an array if more than 1 sheet is selected
function loadData(ID) {
    return new Promise (function (resolve,reject){
        var url = "https://docs.google.com/spreadsheets/d/"+ID+"/edit?usp=sharing";
        var query = new google.visualization.Query(url);
        query.send(function(someData) {
            //...
            var dat = handle(someData);
            dataList.push(dat);
            return resolve(someData);
        });
    })
  }

//creates array of dataTables that are ready to be graphed 
function handle(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    
    var otable = response.getDataTable();
    var dataArray = new Array();
    for(i = 1; i < otable.ng.length; i++) {
        var t = otable.clone();

        //removes all the columns except the time which HAS to ALWAYS be column 1 and the data column
        for(j = 1; j < otable.ng.length; j++) {
            if (j < i){
                t.removeColumn(1);
            }
            if(j > i){
                t.removeColumn(2);
            } 
        }
        if (t.ng[1].type == "number"){
            dataArray.push(t);
        }
    }
    return dataArray;
}

//this joins 2 dataTable arrays (output of handle) if they have the same Column headers i.e. joins 2 different sheets if they both have headers 'acceleraton'
function twoFilesSelected(dataArray1, dataArray2){
    var finalDataArray = new Array();
    for(i = 0; i < dataArray1.length; i++){
        for(j = 0; j < dataArray2.length; j++){
            if(dataArray1[i] == undefined){
                console.log("dataArray1["+i.toString()+"] was undef");
            }
            if(dataArray2[j] == undefined){
                console.log("dataArray2["+j.toString()+"] was undef");
            }
            if(dataArray1[i].ng[1].label == dataArray2[j].ng[1].label){
                console.log(dataArray2[j].ng[1].label)
                //combines the two charts to be graphed on the same chart uses the time column to combine on i.e. [[0,0]] and the first columns in each table i.e. [1], [1]
                var newTable = new google.visualization.data.join(dataArray1[i], dataArray2[j], 'full', [[0,0]],[1],[1]);

                finalDataArray.push(newTable);    
            }
        }
    }
    console.log(finalDataArray);
    drawChartsDataArray(finalDataArray);
    console.log("charts updated");
}

//takes array of Google DataTables and graphs them
function drawChartsDataArray(dataArray){
    clearCharts();
    console.log(dataArray);
    for(i = 0; i < dataArray.length; i++){
        var options = {
            title: dataArray[i].ng[1].label,
            curveType: 'function',
            interpolateNulls: true,
            legend: { position: 'bottom' },
            explorer: { 
                actions: ['dragToZoom', 'rightClickToReset'],
                keepInBounds: true,
            }
        };
    
        var data = dataArray[i];
        //the chart id is being set here to some static id's because i didnt have time to make them dynamic
        //this might have to change because we need to see the charts update
        var id = "id"+i.toString();

        drawChart(data, options, id);
    }
}

//clears charts out on every time the main page is selected
function clearCharts()
{
    for(i = 0; i <= 15; i ++){
        document.getElementById("id"+i.toString()).innerHTML = "";
    }
}

// Draws a chart
function drawChart(data, options, id) {
    var chart = new google.visualization.LineChart(document.getElementById(id));
    chart.draw(data, options);
}

// Switchs view from main to getFile
function switchToGetFile() {
    $("#container-main").css("display", "none");
    $("#container-getFile").css("display", "block");
    if(firstTime) {      
        listFilesInConsole();
        firstTime = false;
    }
}

// Switchs view from getFile to main
function switchToMain() {
    $("#container-main").css("display", "block");
    $("#container-getFile").css("display", "none");

    drawCharts();
}

// Gets the all files in a folder and creates a table 
function listFilesInConsole() {
    // request url
    var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&key=" + API_KEY;
    var promise = $.getJSON( url, function( data, status){
    });
        promise.done(function( data ){
        var container = document.getElementById("files");
        var length = data.files.length;

        // Create table with headers
        var tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.setAttribute('border', '1');
        var tbdy = document.createElement('tbody');

        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("Selection"))
        tr.appendChild(td)
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("File name"))
        tr.appendChild(td)
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("File type"))
        tr.appendChild(td)
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("File id"))
        tr.appendChild(td)
        tbdy.appendChild(tr);

        // Loop through files and create an entry for each
        for(i = 0; i<length; i++) {
            if(data.files[i].mimeType == "application/vnd.google-apps.spreadsheet") {
                var tr = document.createElement('tr');
                
                var td = document.createElement('td');
                td.appendChild(createNewCheckboxt("checkboxName", data.files[i].id))
                tr.appendChild(td)

                var td = document.createElement('td');
                td.appendChild(document.createTextNode(data.files[i].name))
                tr.appendChild(td)

                var td1 = document.createElement('td');
                td1.appendChild(document.createTextNode(data.files[i].mimeType))
                tr.appendChild(td1)

                var td2 = document.createElement('td');
                td2.className = "id";
                td2.appendChild(document.createTextNode(data.files[i].id))
                tr.appendChild(td2)

                tbdy.appendChild(tr);
            }
        }
        tbl.appendChild(tbdy);
        container.appendChild(tbl)
        document.data = data;
        
    }).fail(function(){
        console.log("ERROR: getting files");
    });
}

//Create a checkbox
function createNewCheckboxt(name, id){
    var checkbox = document.createElement('input'); 
    checkbox.type= 'checkbox';
    checkbox.name = name;
    checkbox.id = id;
    return checkbox;
}

//get all checked checkboxes
function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
       // And stick the checked ones onto an array...
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i]);
       }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
  }

// Function to test requests
document.Test = function() {
    console.log("RUNNING UNIT TESTS...")

    // Test 1 : Test Get good file ID
    var urlTest1 = "https://docs.google.com/spreadsheets/d/1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM/edit?usp=sharing";
    var query = new google.visualization.Query(urlTest1);
    query.send(function(response){
        if (response.isError()) {
            console.log('Test 1 : FAILED');
        } else {
            console.log('Test 1: PASSED');
        }
    });

    // Test 2 : Test Get Good Folder ID
    var folderId = '1jFpcWj_H572aSLbYFWozFMCz7A6JngC-';
    var urlTest2 = "https://www.googleapis.com/drive/v3/files?q='1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM'+in+parents&key=" + API_KEY;
    var promise = $.getJSON( urlTest2, function( data, status){
        // on success
    });
        promise.done(function( data ){
        console.log("Test 2 : PASSED");
    }).fail(function(){
        console.log("Test 2 : FAILED")
    });
}