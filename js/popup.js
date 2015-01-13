+function( document, $ ) {
    var qrcode = document.getElementById('qrcode');
    var url = document.getElementById('url');
    chrome.tabs.getSelected(function( tab ){
            $(qrcode).qrcode({width: 150,height: 150,text: tab.url});
            url.value = tab.url;
            url.select();
    });
}( document, jQuery ); 
