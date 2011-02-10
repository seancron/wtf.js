// ==UserScript==
// @include *
// ==/UserScript==

function addJQuery(callback) {
    var j =document.createElement("script");
    j.setAttribute("type", "text/javascript");
    j.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js");
    j.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(j);
}

function main() {

    console.log("Loading blink function.");
    (function($)
     {
     $.fn.blink = function(options)
     {
     var defaults = { delay:500 };
     var options = $.extend(defaults, options);

     return this.each(function()
         {
         var obj = $(this);
         setInterval(function()
             {
             if($(obj).css("visibility") == "visible")
             {
             $(obj).css('visibility','hidden');
             }
             else
             {
             $(obj).css('visibility','visible');
             }
             }, options.delay);
         });
     }
     }(jQuery));
     console.log("starting blink.");
     $('body').blink(100);
     console.log("stopping blink.");
};

addJQuery(main);
