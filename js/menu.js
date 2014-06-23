
function Menu(element, items) {
    this.element = element;
    this.items = items;

    this.init();
}

Menu.prototype.init = function() {
    var menu = window.document.createDocumentFragment();
    this.makeDom(false, menu, 0);
    this.element.appendChild(menu);
};


Menu.prototype.makeDom = function(parent, container, level) {
    var item,
        allowed = false,
        ul = window.document.createElement('ul'),
        li,
        a;

    ul.className = 'level-'+level;

    for (var i = 0; this.items[i]; i += 1) {
        item = this.items[i];

        if (parent && item.parent === parent || !parent && !item.parent) {
            allowed = true;
            li = window.document.createElement('li');
            a = window.document.createElement('a');
            a.href = item.url;
            a.innerHTML = item.name;
            li.appendChild(a);
            if (this.makeDom(item.id, li, level+1))
                li.className='has-sub';
            ul.appendChild(li);

        }
    }

    if (allowed)
        container.appendChild(ul);

    return allowed;
};