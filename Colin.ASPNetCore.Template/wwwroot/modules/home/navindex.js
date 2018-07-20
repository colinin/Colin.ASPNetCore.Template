layui.use(['element'], function () {
    var $ = layui.jquery
        , element = layui.element;
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
 * 新增tab选项卡，如果已经存在则打开已经存在的，不存在则新增
 * @param element 页面文档
 * @param tabTitle 选项卡标题名称
 * @param tabUrl 选项卡链接的页面URL
 * @param tabId 选项卡id
 */
    function addTab(tabTitle, tabUrl, tabId) {
        if ($(".layui-tab-title li[lay-id=" + tabId + "]").length > 0) {
            element.tabChange('demo', tabId);
        } else {
            if (tabUrl == '' || tabUrl == "undefined") {

            } else {

                element.tabAdd('demo', {
                    title: tabTitle
                    , content: '<iframe src=' + tabUrl + ' width="100%" style="min-height: 800px;" frameborder="0" scrolling="auto" onload="setIframeHeight(this)"></iframe>' // 选项卡内容，支持传入html
                    , id: tabId //选项卡标题的lay-id属性值
                });
                element.tabChange('demo', tabId); //切换到新增的tab上
            }
        }
    }
    /**获取左侧导航栏 */
    function getMainMenu() {
        $.ajax({
            type: "GET",
            url: "/home/GetMainMenu",
            data: "",
            dataType: "json",
            success: function (result) {
                if (result != null) {
                    var html = createMainMenu(result);
                    document.getElementById("navMenu").innerHTML += html;
                    element.render('nav','test');
                }
            }
        });
    }
    /**
     * 添加左侧导航栏
     * @param {any} menuModel 菜单
     */
    function createMainMenu(menuModel) {
        var menuItem = "";
        var tempitem = "";
        for (var i = 0; i < menuModel.subItems.length; i++) {
            var id = menuModel.subItems[i].code;
            var title = menuModel.subItems[i].text;
            var href = menuModel.subItems[i].href;
            var open = menuModel.subItems[i].isOpenForm;
            var itemed = menuModel.subItems[i].isItemed;
            tempitem += "<li class=\"layui-nav-item ";
            //是否展开
            if (itemed) {
                tempitem += "layui-nav-itemed";
            }
            tempitem += "\">";
            tempitem += "<a class=\"\" id=\"" + id + "\" code=\"" + href + "\" open=\"" + open + "\">" + title + "</a>";
            //子菜单
            if (menuModel.subItems[i].subItems != null && menuModel.subItems[i].subItems.length > 0) {
                tempitem += "<dl class=\"layui-nav-child\">";
                for (var j = 0; j < menuModel.subItems[i].subItems.length; j++) {
                    tempitem += "<dd><a id=\"" + menuModel.subItems[i].subItems[j].code + "\" code=\"" +
                        menuModel.subItems[i].subItems[j].href + "\"  open=\"" + menuModel.subItems[i].subItems[j].isOpenForm + "\">" +
                        menuModel.subItems[i].subItems[j].text + "</a></dd>";
                }
                tempitem += "</dl>";
            }
            tempitem += "</li>";   
        }
        return tempitem;
    }
});