+function( document, $ ) {
    var qrcode = document.getElementById('qrcode'),
    url = document.getElementById('url');
    chrome.tabs.getSelected(function( tab ){
            $(qrcode).qrcode({width: 150,height: 150,text: tab.url});
    });
}( document, jQuery ); 
