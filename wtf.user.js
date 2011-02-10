// ==UserScript==
// @name wtf.js
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
     var d = new Date();
     if( d.getSeconds() % 5 == 0) {
         $('body').blink(666);
         $('p').blink(50);
         $('h1').blink(1000);
         $('h2').blink(500);
         $('h3').blink(333);
         $('span').blink(250);
         $('td').blink(400);
         $('img').blink(750);
     }
};

addJQuery(main);
