/* globals window, AIP, $ */
var $ = jQuery;
$(function() {
    $.xhrPool = [];
    $.xhrPool.abortAll = function() {
        $(this).each(function(i, jqXHR) { //  cycle through list of recorded connection
            jqXHR.abort(); //  aborts connection
            $.xhrPool.splice(i, 1); //  removes from list by index
        });
    }
    $.ajaxSetup({
        beforeSend: function(jqXHR) {
            $.xhrPool.push(jqXHR);
        }, //  annd connection to list
        complete: function(jqXHR) {
            var i = $.xhrPool.indexOf(jqXHR); //  get index for current connection completed
            if (i > -1) $.xhrPool.splice(i, 1); //  removes from list by index
        }
    });
})


window.addEventListener('Agave::ready', function() {
	if(console){
		console.log('Agave has been initialized, do something');
		/* Remove this if you don't want to print the example */
	}
});
