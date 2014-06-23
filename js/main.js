var TestTask = TestTask || {};

TestTask.Main = function()
{
    var menuElement = window.document.getElementById('menu'),
        init = function() {
            // get elements
            var oReq = new XMLHttpRequest();
            oReq.onload = reqListener;
            oReq.open("get", "resource/items.json", true);
            oReq.send();

            //success request
            function reqListener () {
                var items = JSON.parse(this.responseText),
                    menu = new Menu(menuElement, items);
                return menu;
            }
        },
        oPublic = {
            init: init,
            menuElement: menuElement
        };
    return oPublic;
}();

window.onload = function() {
    TestTask.Main.init();

};