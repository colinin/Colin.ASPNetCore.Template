layui.use(['element'], function () {
    var $ = layui.jquery
        , element = layui.element;
    element.on('nav(test)', function (elem) {
        if ($(".layui-tab-title li[lay-id='demo']").length > 0) {
            //已经存在
        } else {
            element.tabAdd('demo', {
                title: elem.text()
                , content: elem.innerText
                , id: elem.id
            })
        }
        layer.msg(elem.text());
        console.log(elem.text());
        console.log(this.id);
    });
});