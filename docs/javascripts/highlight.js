document$.subscribe(function () {
    var elements = [].slice.call(document.querySelectorAll('article td'));
    elements.forEach(function (el) {
        var text = el.innerText;
        if (text.match(/[\u0600-\u06FF]/g) != null) {
            el.innerHTML = el.innerHTML.replace(/[\u0600-\u06FF]+/g, '<span lang="ar">$&</span>');
        }
    });
});
