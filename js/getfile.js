
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
    for(i = 0; i<length; i++) {
        var node = document.createElement('p');
        node.innerText = data.files[i].name;
        container.appendChild(node);
    }
    document.data = data;
}).fail(function(){

});
}
