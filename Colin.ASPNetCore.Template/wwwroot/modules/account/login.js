layui.use(['element','form'], function () {
    var $ = layui.jquery,
        form = layui.form;
    //监听提交
    form.on('submit(loginSubmit)', function (data) {
        userLogin();
        return false;
    });

    function userLogin() {
        var name = $('#username').val();
        var pwd = $('#password').val();
        var ajax = $.ajax({
            type: "POST",
            url: "/account/login",
            data: '{'
                + '"username":"' + name + '",'
                + '"password":"' + pwd + '"'
                + '}',
            contentType: "application/json",
            dataType: 'json'
        });
        ajax.done(function (result) {
            //layer.msg(result);
            console.log(result);
            location.replace(result);
        });

        ajax.fail(function (result) {
            console.log(result.responseJSON);
            layer.msg(result.responseJSON.ErrMsg);
        });
    }
});