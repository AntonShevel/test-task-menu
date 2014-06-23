/*
function getContent
object Menu:
- constructor
- create dom
- append
- left/right

grunt!
 https://github.com/xxllexx/data-binding/blob/master/Gruntfile.js
 */

// get elements
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "resource/items.json", true);
oReq.send();

//success request
function reqListener () {
    var items = JSON.parse(this.responseText);
    iterate(items);
}

// iterate
function iterate(items) {

    var menu = window.document.createDocumentFragment();

    function makeDom(items, parent, container) {
        var item,
            allowed = false,
            ul = window.document.createElement('ul'),
            li,
            a,
            i;

        for (i = 0; items[i]; i += 1) {
            item = items[i];

            if (parent && item.parent === parent || !parent && !item.parent) {
                allowed = true;
                li = window.document.createElement('li');
                a = window.document.createElement('a');
                a.href = item.url;
                a.innerHTML = item.name;
                li.appendChild(a);
                makeDom(items, item.id, li);
                ul.appendChild(li);
//                console.log(value.name, value.parent, value.id);

            }
        }

        if (allowed)
            container.appendChild(ul);

    }
    makeDom(items, false, menu);

    window.document.getElementById('container').appendChild(menu);
}
