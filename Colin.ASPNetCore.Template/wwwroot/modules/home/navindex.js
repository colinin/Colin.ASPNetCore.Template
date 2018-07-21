layui.use(['element','layer'], function () {
    var $ = layui.jquery
        , element = layui.element
        , layer = layui.layer;
    //监听左侧菜单点击
    element.on('nav(test)', function (elem) {
        var isOpen = elem[0].attributes['open'].nodeValue;
        if (isOpen == 'true') {
            addTab(elem[0].innerText, elem[0].attributes['code'].nodeValue, elem[0].id);
        }
    });

    //监听tab选项卡切换
    element.on('tab(demo)', function (data) {
    });

    $(document).ready(function () {
        getMainMenu();
    });

    /**
     * 创建一个标签页
     * @param {any} tabTitle 标题
     * @param {any} tabUrl 打开页面
     * @param {any} tabId  id
     */
    function addTab(tabTitle, tabUrl, tabId) {
        if ($(".layui-tab-title li[lay-id=" + tabId + "]").length > 0) {
            element.tabChange('demo', tabId);
        } else {
            if (tabUrl == '' || tabUrl == "undefined") {
                layer.msg('链接为空');
            } else {

                element.tabAdd('demo', {
                    title: tabTitle
                    , content: '<iframe src=' + tabUrl + ' width="100%" style="min-height: 800px;" frameborder="0" scrolling="auto" onload="setIframeHeight(this)"></iframe>'
                    , id: tabId //选项卡标题的lay-id属性值
                });
                element.tabChange('demo', tabId); //切换到新增的tab上
            }
        }
    }
    /**获取菜单 */
    function getMainMenu() {
        $.ajax({
            type: "GET",
            url: "/home/GetMainMenu",
            data: "",
            dataType: "json",
            success: function (result) {
                if (result != null) {
                    var html = createMainMenu(result);
                    $('#navMenu').html(html);
                    element.render('nav', 'test');
                }
            }
        });
    }
    /**
     * 创建菜单栏
     * @param {any} menuModel
     */
    function createMainMenu(menuModel) {
        var menuItem = "";
        var tempitem = "";
        for (var i = 0; i < menuModel.SubItems.length; i++) {
            var id = menuModel.SubItems[i].Code;
            var title = menuModel.SubItems[i].Text;
            var href = menuModel.SubItems[i].Href;
            var open = menuModel.SubItems[i].IsOpenForm;
            var itemed = menuModel.SubItems[i].IsItemed;
            tempitem += "<li class=\"layui-nav-item ";
            //是否展开
            if (itemed) {
                tempitem += "layui-nav-itemed";
            }
            tempitem += "\">";
            tempitem += "<a class=\"\" id=\"" + id + "\" code=\"" + href + "\" open=\"" + open + "\">" + title + "</a>";
            //子菜单
            if (menuModel.SubItems[i].SubItems != null && menuModel.SubItems[i].SubItems.length > 0) {
                tempitem += "<dl class=\"layui-nav-child\">";
                for (var j = 0; j < menuModel.SubItems[i].SubItems.length; j++) {
                    tempitem += "<dd><a id=\"" + menuModel.SubItems[i].SubItems[j].Code + "\" code=\"" +
                        menuModel.SubItems[i].SubItems[j].Href + "\"  open=\"" + menuModel.SubItems[i].SubItems[j].IsOpenForm + "\">" +
                        menuModel.SubItems[i].SubItems[j].Text + "</a></dd>";
                }
                tempitem += "</dl>";
            }
            tempitem += "</li>";   
        }
        return tempitem;
    }
});