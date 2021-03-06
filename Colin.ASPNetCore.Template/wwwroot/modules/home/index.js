﻿layui.use(['table'], function () {
    var table = layui.table;
    table.render({
        elem: '#demo'
        , height: 315
        , url: '/home/getdemotable' //数据接口
        , page: true //开启分页
        , cols: [[ //表头
            { field: 'Id', title: 'ID', width: 80, sort: true, fixed: 'left' }
            , { field: 'UserName', title: '用户名', width: 80 }
        ]]
    });
});