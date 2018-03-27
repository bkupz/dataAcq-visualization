
var API_KEY = 'AIzaSyBMiJQmBE6uxyrHau_zmKpuetSLPA-Sj78';

function listFilesInConsole() {
//https://stackoverflow.com/questions/18116152/how-do-i-get-a-file-list-for-a-google-drive-public-hosted-folder
var folderId = '1jFpcWj_H572aSLbYFWozFMCz7A6JngC-';
var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&key=" + API_KEY;
var promise = $.getJSON( url, function( data, status){
    // on success
});
    promise.done(function( data ){
    console.log(data);
    //https://stackoverflow.com/questions/5180382/convert-json-data-to-a-html-table
    var container = document.getElementById("files");
    console.log(data.files.length);
    var length = data.files.length;

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

    for(i = 0; i<length; i++) {
        //var node = document.createElement('p');
        //node.innerText = data.files[i].name;
        //container.appendChild(node);
        var tr = document.createElement('tr');
        
        var td = document.createElement('td');
        td.appendChild(createRadioElement("selection", 1))
        tr.appendChild(td)

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data.files[i].name))
        tr.appendChild(td)

        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(data.files[i].mimeType))
        tr.appendChild(td1)

        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(data.files[i].id))
        tr.appendChild(td2)

        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    container.appendChild(tbl)
    document.data = data;

    
}).fail(function(){

});
}

function createRadioElement(name, checked) {
    var radioHtml = '<input type="radio" name="' + name + '"';
    if ( checked ) {
        radioHtml += ' checked="checked"';
    }
    radioHtml += '/>';

    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
}

function getRadioElement() {
    var selectedVal = "";
    var selected = $("#files input[type='radio']:checked");
    if (selected.length > 0) {
        selectedVal = selected.val();
    }
    console.log(selectedVal);
}
