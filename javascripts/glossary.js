document$.subscribe(function () {
    var elements = [].slice.call(document.querySelectorAll('article td'));
    var chars = [];
    elements.forEach(function (el) {
        var text = el.innerText;
        if (text.match(/[\u0600-\u06FF]/g) != null) {
            chars.push(text[0])
        }
    });

    toc = '<nav class="md-nav md-nav--secondary" aria-label="Table of contents"><label class="md-nav__title" for="__toc"><span class="md-nav__icon md-icon"></span>Table of contents</label><ul class="md-nav__list" data-md-component="toc">';
    [...new Set(chars)].forEach(function(char) {
        toc += `<li class="md-nav__item"><a href="#" class="md-nav__link">${char}</a></li>`;
    });
    toc += '</ul></nav>'

    document.querySelectorAll('.md-nav__link.md-nav__link--active').forEach(function(el) {
        //el.innerHTML+= toc;
    });
});