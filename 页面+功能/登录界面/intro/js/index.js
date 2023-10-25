window.addEventListener('load', function () {
    var l = document.querySelector('.l');
    var r = document.querySelector('.r');
    var focus = document.querySelector('.focus');
    var img = this.document.querySelector('#mg')
    var num = 0;
    var circle = 0;
    var flag = true;
    focus.addEventListener('mouseenter', function () {
        l.style.display = 'block';
        r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });

    focus.addEventListener('mouseleave', function () {
        l.style.display = 'none';
        r.style.display = 'none';
        timer = setInterval(function () {
            r.click();
        }, 2000)
    });
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focw = img.offsetWidth + 30;
    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            if (flag) {
                flag = false;
                for (i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }
                this.className = 'current';
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                animate(ul, -index * focw, function () {
                    flag = true;
                });
            }

        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focw, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }

    })
    l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focw + 'px';
            }
            num--;
            animate(ul, -num * focw, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    })
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        r.click();
    }, 2000)
})
