// generate html content with javascript and jQuery
$("#content").append("<img src='images/japlogo.jpg' alt='Restaurant Logo'>")

var list = '<ul id="tabmenu" >'
            + '<li><a class=""'
            + 'id="tab1">HOME</a></li>'
            + '<li><a class=""'
            + 'id="tab2">MENU</a></li>'
            + '<li><a class=""'
            + 'id="tab3">LOCATIONS</a></li>'
            + '</ul>'
            + '<div id="page"></div>'
$("#content").append(list);

//default tab view
$("#page").html("<p>Welcome to Sokouden Japanese Steakhouse! </p> ");
$("#tab1").addClass("active");

//events
bindTabClickToSetPageContent("#tab1",
    "<p>Welcome to Sokouden Japanese Steakhouse! </p>");
bindTabClickToSetPageContent("#tab2",
    "<p>Our menu includes succulent variations of Kobe beef, Teppanyaki, Hibachi and more. </p>");
bindTabClickToSetPageContent("#tab3",
    "<p> 1357 Motomachidori, Kobe, Japan </p>");


//event handler helper function
function bindTabClickToSetPageContent(selector, content) {
    $(selector).click(function () {
        $("#page").html(content);
        $("a").removeClass("active");
        $(this).addClass("active");
    });
}
