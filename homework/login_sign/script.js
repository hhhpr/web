// 登录注册载入
const containerShow = () => {
    var show = document.querySelector(".container")
    show.className += " container-show";
}

window.onload = containerShow;

((window, document) => {
    // 登录注册页切换
    // 登录 -> 注册
    var toSignBtn = document.querySelector(".toSign");
    var toLoginBtn = document.querySelector(".toLogin");
    var loginBox = document.querySelector(".login-box");
    var signBox = document.querySelector(".sign-box");
    var body = document.querySelector("body");
    var html = document.querySelector("html");

    toSignBtn.onclick = () => {
        loginBox.className += ' animate_login';
        signBox.className += ' animate_sign';
    }

    toLoginBtn.onclick = () => {
        loginBox.classList.remove("animate_login");
        signBox.classList.remove("animate_sign");
    }

    //登录注册功能实现
    //注册
    var ouser = document.getElementById('sign-user');
    var opwd = document.getElementById('sign-password');
    var oqq = document.getElementById('sign-QQ');
    var oem = document.getElementById('sign-email');
    var sbtn = document.getElementById('sbtn');

    sbtn.onclick = function () {
        var nameVal = ouser.value;
        var pwdVal = opwd.value;
        var qqVal = oqq.value;
        var emVal = oem.value;

        if (nameVal && pwdVal && qqVal && emVal) {
            //获取已经注册的信息
            var dataObj = localStorage.getItem('data');
            var arr = JSON.parse(dataObj) || [];
            console.log(arr);

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].uname == ouser.value) {
                    alert('该用户名已被注册！');
                    return;
                }
            }

            arr.push({
                uname: nameVal,
                upwd: pwdVal
            });

            var arrStr = JSON.stringify(arr);
            localStorage.setItem('data', arrStr);

            alert('注册成功,快登录你的账号吧！');
        }
        else {
            if (!nameVal) {
                ouser.classList.add('iptchange');
                ouser.setAttribute('placeholder', '请先输入用户名！')
            }
            else if (!pwdVal) {
                opwd.classList.add('iptchange');
                opwd.setAttribute('placeholder', '请输入您要设置的密码！')
            }
            else if (!qqVal) {
                oqq.classList.add('iptchange');
            }
            else if (!emVal) {
                oem.classList.add('iptchange');
            }
        }

    }
    //登录
    var userInfo = localStorage.getItem('data');

    var sname = document.getElementById('login-user');
    var spwd = document.getElementById('login-password');
    var lbtn = document.getElementById('lbtn');

    lbtn.onclick = function () {
        var nameVal = sname.value;
        var pwdVal = spwd.value;

        if (nameVal && pwdVal) {
            if (userInfo) {
                var arr = JSON.parse(userInfo);
                console.log(arr);
                var i = 0;
                for (; i < arr.length; i++) {
                    if (arr[i].uname == nameVal) {
                        break;
                    }
                }
                if (i == arr.length) {
                    alert('用户名未注册！');
                }
                for (; i < arr.length; i++) {
                    if (arr[i].uname == nameVal) {
                        if (arr[i].upwd == pwdVal) {
                            alert('登陆成功！');
                            window.location.href = 'intro.html';
                        }
                        else {
                            alert('密码错误！');
                        }
                    }
                }

            }
        }
        else {
            if (!nameVal) {
                sname.classList.add('iptchange');
                sname.setAttribute('placeholder', '请输入您的用户名！');
            }
            else if (!pwdVal) {
                spwd.classList.add('iptchange');
                spwd.setAttribute('placeholder', '请输入密码！');
            }
        }
    }





})(window, document);
