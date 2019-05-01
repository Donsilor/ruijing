$(document).ready(function () {


    // 选项卡构造函数
    // 参数1：选项卡的选项
    // 参数2：当前选项的class
    // 参数3：要切换的对象
    // 参数4：要切换对象的兄弟对象
    function TabFun(tabOption, curClass, tabObj, tabObjSib) {
        var $ap = $(tabOption);
        $ap.click(function () {
            $(this).addClass(curClass).siblings().removeClass(curClass);
            var index = $ap.index(this);
            $(tabObj).eq(index).show().siblings(tabObjSib).hide();
        });
    }

    // 02-01 左侧栏选项卡
    TabFun('.sidebar .absTab>a', 'cur', '.sidebar .tabConts>div', 'div');

    // 02-01 组织架构选项卡
    TabFun('.tissueTab>a', 'cur', '.tissueConts>.police', '.police');

    // 02-01 查找定位选项卡
    TabFun('.searchPopup .leftList li', 'cur', '.searchPopup .rightDetail .dataItem', '.dataItem');

    // 02-01 干警列表选项卡
    TabFun('#policeList .tabOpt>a', 'cur', '#policeList .tabConts>.tabCon', '.tabCon');

	// 02-01 左侧菜单组织架构-查看干警 选项卡
    TabFun('.zuzhijg .tabOpt>a', 'cur1', '.zuzhijg .tabConts .tabCont', '.tabCont');

	// 02-01 左侧菜单组织架构-查看干警 选项卡
    TabFun('.zuzhijg .tabOpt1>a', 'cur2', '.zuzhijg .tabConts1 .tabCont', '.tabCont');

	// 02-01 犯人列表 选项卡
    TabFun('#prisonerList .tabOpt>a', 'cur', '#prisonerList .tabConts .tabCon', '.tabCon');


	// 03-01 警务通--新增干警信息 选项卡
    TabFun('.absBox .tabOpt>a', 'cur', '.absBox .tabConts>.tabCont', '.tabCont');

	// 11-01 信息发布\一卡通选项卡
    TabFun('.popupCont .aside p', 'active01', '.soll .detail>.list', '.list');

	// 15-01 锐警配置 选项卡
    TabFun('.cr .t-bg li', 'activ02', '.cr .config .config_list', '.config_list');



    // 封装弹窗函数
    // 参数1：打开按钮
    // 参数2：关闭按钮
    // 参数3：受控制的对象
    function PopupFunc(openBtn, closeBtn, switObj) {
        $(openBtn).on("click", function () { $(switObj).css('display', 'block'); });
        $(closeBtn).on("click",function () { $(switObj).css('display', 'none'); });
    }

	// 02-01 组织架构-查看干警信息 弹窗
    PopupFunc('.tissueConts .opens .second a', '#police_infos a.closePopupBtn', '#police_infos');

	// 02-01 组织架构-查看干警信息 弹窗
    PopupFunc('.tissueConts .opens2 .second a', '#fanren_infos a.closePopupBtn', '#fanren_infos');

    // 02-01 添加快捷功能 弹窗
    PopupFunc('#openAddShortcut', '#addShortcut a.closePopupBtn', '#addShortcut');

    // 02-04 添加快捷功能成功提示 弹窗
    PopupFunc('.allShortcut li a.curClose','.addShortcut .tipLayer.addLayer','.addShortcut .tipLayer.addLayer');

    // 02-04 删除快捷功能成功提示 弹窗
    PopupFunc('.allShortcut li a.curOpen','.addShortcut .tipLayer.delLayer','.addShortcut .tipLayer.delLayer');

    // 02-06 查找定位 弹窗
    PopupFunc('.topbar .searchBox button', '.searchPopup a.closePopupBtn', '.searchPopup');

    // 02-07 干警列表 弹窗
    PopupFunc('.topbar>.population', '#policeList a.closePopupBtn', '#policeList');

	// 02-07 干警列表 -新增干警
    PopupFunc('.tabCon .operation>a.addppInfo', '#addppInfo span.closePopupBtn', '#addppInfo');
	PopupFunc('.tabCon .operation>a.addppInfo', '#addppInfo .btns button', '#addppInfo');

	// 02-07 干警列表 -新增犯人
    PopupFunc('.tabCon .operation>a.addfrInfo', '#addfrInfo span.closePopupBtn', '#addfrInfo');
	PopupFunc('.tabCon .operation>a.addfrInfo', '#addfrInfo .btns button', '#addfrInfo');

    // 02-07 干警列表 详情 弹窗
    PopupFunc('#policeList td:last-of-type>a:first-of-type', '#policeList_addInfo span.closePopupBtn', '#policeList_addInfo');
    PopupFunc('#policeList td:last-of-type>a:first-of-type', '#policeList_addInfo .add_bont button', '#policeList_addInfo');

    // 02-07 干警列表 呼叫 弹窗
    PopupFunc('#policeList td:last-of-type>a:last-of-type', '#policeList_war_calle span.closePopupBtn', '#policeList_war_calle');
    PopupFunc('#policeList td:last-of-type>a:last-of-type', '#policeList_war_calle .add_bont button', '#policeList_war_calle');

    // 02-08 犯人列表 弹窗
    PopupFunc('.topbar>.detail', '#prisonerList a.closePopupBtn', '#prisonerList');

    // 02-08 犯人列表 新增犯人 弹窗
    PopupFunc('#prisonerList .operation .addfrInfo', '#addfrInfo a.closePopupBtn', '#addfrInfo');

    // 02-08 犯人列表 详情 弹窗
    PopupFunc('#prisonerList td:last-of-type>a:first-of-type', '#prisonerList_wdfrinfo_tc span.closePopupBtn', '#prisonerList_wdfrinfo_tc');
    PopupFunc('#prisonerList td:last-of-type>a:first-of-type', '#prisonerList_wdfrinfo_tc .btns button', '#prisonerList_wdfrinfo_tc');






    // 02-09 禁入报警 弹窗
    PopupFunc('.topbar>.unusual', '.callThePolice>.popupTop a.closePopupBtn', '#callThePolice');

    // 02-09 禁入报警-对讲呼叫 弹窗
    PopupFunc('#callThePolice .absControl .icon1', '#call_calle span.closePopupBtn', '#call_calle');

    // 02-09 禁入报警-短信通知 弹窗
    PopupFunc('#callThePolice .absControl .icon4', '#message_tc span.closePopupBtn', '#message_tc');

    // 02-09 禁入报警-摄像头联动 弹窗
    PopupFunc('#callThePolice .absControl .icon5', '#call_viode span.closePopupBtn', '#call_viode');

    // 02-10 解除报警 弹窗
    PopupFunc('.callThePolice .details a.absBtn', '#allClearLayer a.closePopupBtn', '#allClearLayer');
    PopupFunc('.callThePolice .details a.absBtn', '#allClearLayer .btns button:not(.confirm)', '#allClearLayer');

    // 02-13 处警日志 弹窗
    PopupFunc('#showLog', '#dispatchLog', '#dispatchLog');

    // 02-14 今日状况 弹窗
    PopupFunc('.topbar>.status', '#condition a.closePopupBtn', '#condition');

    // 02-14 今日状况 处警日志 弹窗
    PopupFunc('.condition a.detailBtn', '#dispatchLog a.closePopupBtn', '#dispatchLog');

    // 03-01 警务通 弹窗
    PopupFunc('.sidebar .menuList>a.icon1', '#policemenList a.closePopupBtn', '#policemenList');

    // 03-01 警务通-信息推送 新增信息发布 弹窗
    PopupFunc('.list .operation>a.push_addinfo_tc', '#push_addinfo_tc span.closePopupBtn', '#push_addinfo_tc');
    PopupFunc('.list .operation>a.push_addinfo_tc', '#push_addinfo_tc .add_bont button', '#push_addinfo_tc');

    // 03-01 警务通-信息推送 删除信息 弹窗
    PopupFunc('.list .operation>a.push_deleinfo_tc', '#push_deleinfo_tc span.closePopupBtn', '#push_deleinfo_tc');
    PopupFunc('.list .operation>a.push_deleinfo_tc', '#push_deleinfo_tc .btns button', '#push_deleinfo_tc');

    // 03-03 警务通-新增干警
    PopupFunc('.policemenList .operation>a.add', '#addInfo span.closePopupBtn', '#addInfo');
	PopupFunc('.policemenList .operation>a.add', '#addInfo .btns button', '#addInfo');

    // 03-03 警务通-干警信息-编辑
    PopupFunc('.policemenList .list_tab td:last-of-type>a:last-of-type', '#addInfo span.closePopupBtn', '#addInfo');
	PopupFunc('.policemenList .list_tab td:last-of-type>a:last-of-type', '#addInfo .btns button', '#addInfo');

    // 03-03 警务通-干警信息-查看
    PopupFunc('.policemenList .list_tab td:last-of-type>a:first-of-type', '#lookInfo span.closePopupBtn', '#lookInfo');
	PopupFunc('.policemenList .list_tab td:last-of-type>a:first-of-type', '#lookInfo .btns button', '#lookInfo');

    // 03-04 警务通-删除干警信息
    PopupFunc('.policemenList .operation>a.del', '#delInfo .btns button', '#delInfo');

	// 03-04 警务通-摇开摇闭
    PopupFunc('.policemenList .operation>a.rollSwitch', '#closShift .btns button', '#closShift');

	// 03-07 警务通-押解
	PopupFunc('.policemenList .operation>a.escort', '#addgj_tc span.closePopupBtn', '#addgj_tc');
	PopupFunc('.policemenList .operation>a.escort', '#addgj_tc .add_bont button', '#addgj_tc');

    // 03-06 警务通-模式切换 弹窗
    PopupFunc('.policemenList .operation>a.shift', '#schemaShift span.closePopupBtn', '#schemaShift');
    PopupFunc('.policemenList .operation>a.shift', '#schemaShift .btns button', '#schemaShift');

    // 03-10 警务通-干警信息导入 弹窗
    PopupFunc('.policemenList .operation>a.import', '#importInfo span.closePopupBtn', '#importInfo');
	PopupFunc('.policemenList .operation>a.import', '#importInfo button.onekeyImport', '#importInfo');

	// 04-01 腕带 弹窗
    PopupFunc('.tabConts .menuList>a.icon2', '#wandai_tc a.closePopupBtn', '#wandai_tc');

	// 04-02 腕带-犯人信息
    PopupFunc('#wandai_tc .list_tab a.wd_frinfo', '#wdfrinfo_tc span.closePopupBtn', '#wdfrinfo_tc');
	PopupFunc('#wandai_tc .list_tab a.wd_frinfo', '#wdfrinfo_tc .btns button', '#wdfrinfo_tc');

	// 04-02 腕带-新增犯人信息
    PopupFunc('#wandai_tc .operation a.add', '#wdfrinfo_tc span.closePopupBtn', '#wdfrinfo_tc');
	PopupFunc('#wandai_tc .operation a.add', '#wdfrinfo_tc .btns button', '#wdfrinfo_tc');

	// 04-03 腕带-犯人导入
    PopupFunc('#wandai_tc .operation>a.import', '#wd_frimp span.closePopupBtn', '#wd_frimp');
	PopupFunc('#wandai_tc .operation>a.import', '#wd_frimp button.onekeyImport', '#wd_frimp');

	// 04-03 腕带-腕带绑定
    PopupFunc('#wandai_tc .operation>a.bind', '#wd_frbid a.bandclos', '#wd_frbid');

	// 04-02 腕带-日志导出
    PopupFunc('#wandai_tc .operation>a.wd_outrz', '#exportLog span.closePopupBtn', '#exportLog');
	PopupFunc('#wandai_tc .operation>a.wd_outrz', '#exportLog button.onekeyImport', '#exportLog');

	// 05-01 夜间管控 弹窗
    PopupFunc('.sidebar .menuList>a.icon3', '#nigth_tc', '#nigth_tc');

	// 05-01 夜间管控 弹窗
    PopupFunc('#nigth_tc', '.nigth_open', '.nigth_open');

	// 06-01 报警 弹窗
    PopupFunc('.sidebar .menuList>a.icon4', '#warm_tc a.closePopupBtn', '#warm_tc');

	// 06-01 报警-详情
    PopupFunc('#warm_tc .list_tab a.warm_ditel', '#war_deinfo span.closePopupBtn', '#war_deinfo');

	// 06-01 报警-应急预案
    PopupFunc('#warm_tc .list_tab a.warm_supp', '#war_supply span.closePopupBtn', '#war_supply');
	PopupFunc('#warm_tc .list_tab a.warm_supp', '#war_supply .add_bont button', '#war_supply');

	// 06-01 报警-联动摄像头
    // PopupFunc('#warm_tc .list_tab a.warm_viode', '#war_viode span.closePopupBtn', '#war_viode');
	// PopupFunc('#warm_tc .list_tab a.warm_viode', '#war_viode .add_bont button', '#war_viode');

	// 06-01 报警-呼叫
    PopupFunc('#warm_tc .operation>a.warm_call', '#war_calle span.closePopupBtn', '#war_calle');
	PopupFunc('#warm_tc .operation>a.warm_call', '#war_calle .add_bont button', '#war_calle');

	// 06-01 报警-警务通 呼叫
    PopupFunc('#warm_tc td:last-of-type>a:first-of-type', '#war_calle span.closePopupBtn', '#war_calle');
	PopupFunc('#warm_tc td:last-of-type>a:first-of-type', '#war_calle .add_bont button', '#war_calle');

	// 06-01 报警-信息下发
    PopupFunc('#warm_tc .operation>a.warm_send', '#war_send span.closePopupBtn', '#war_send');
	PopupFunc('#warm_tc .operation>a.warm_send', '#war_send .add_bont button', '#war_send');

	// 06-01 报警-警务通-信息下发
    PopupFunc('#warm_tc td:last-of-type>a:nth-of-type(3)', '#war_send span.closePopupBtn', '#war_send');
	PopupFunc('#warm_tc td:last-of-type>a:nth-of-type(3)', '#war_send .add_bont button', '#war_send');

    // 06-01 报警-警务通 开启警务通摄像头 弹窗
    PopupFunc('#warm_tc td:last-of-type>a:nth-of-type(4)', '#war_viode span.closePopupBtn', '#war_viode');


    // 07-01 点名 弹窗
    PopupFunc('.sidebar .menuList>a.icon5', '#dianm_tc a.closePopupBtn', '#dianm_tc');

	// 07-01 点名-呼叫 弹窗
    PopupFunc('#dianm_tc .handle button.callBtn', '#dianm_calle span.closePopupBtn', '#dianm_calle');

	// 07-01 点名-开启周边摄像头 弹窗
    PopupFunc('#dianm_tc .handle button.openCameraBtn', '#dianm_viode span.closePopupBtn', '#dianm_viode');

	// 07-01 点名-添加点名区域
    PopupFunc('#dianm_tc .checkArea>a.add', '#dianm_addar span.closePopupBtn', '#dianm_addar');
	PopupFunc('#dianm_tc .checkArea>a.addl', '#dianm_addar .add_bont button', '#dianm_addar');

	// 07-01 点名-正常
    PopupFunc('.list .dianm_rizi a.yread', '#dia_statuy span.closePopupBtn', '#dia_statuy');
	PopupFunc('.list .dianm_rizi a.yread', '#dia_statuy .bot_rizi button', '#dia_statuy');

	// 07-01 点名-异常
    PopupFunc('.list .dianm_rizi a.nread', '#dia_statun span.closePopupBtn', '#dia_statun');
	PopupFunc('.list .dianm_rizi a.nread', '#dia_statun .bot_rizi button', '#dia_statun');

	// 07-01 点名-正常
    PopupFunc('#dianm_tc .list a.yread', '#dia_statuy span.closePopupBtn', '#dia_statuy');
	PopupFunc('#dianm_tc .list a.yread', '#dia_statuy .bot_rizi button', '#dia_statuy');

	// 07-01 点名-异常
    PopupFunc('#dianm_tc .list a.nread', '#dia_statun span.closePopupBtn', '#dia_statun');
	PopupFunc('#dianm_tc .list a.nread', '#dia_statun .bot_rizi button', '#dia_statun');

	// 08-01 劳动工具 弹窗
    PopupFunc('.sidebar .menuList>a.icon6', '#laodong_tc a.closePopupBtn', '#laodong_tc');

	// 08-01 劳动工具-入库
    PopupFunc('.list .operation>a.tool_add', '#tool_addtc span.closePopupBtn', '#tool_addtc');
	PopupFunc('.list .operation>a.tool_add', '#tool_addtc .add_bont button', '#tool_addtc');

	// 08-01 劳动工具-出库
    PopupFunc('.list .operation>a.tool_del', '#tool_deltc span.closePopupBtn', '#tool_deltc');
	PopupFunc('.list .operation>a.tool_del', '#tool_deltc .add_bont button', '#tool_deltc');

	// 08-01 劳动工具-绑定
    PopupFunc('.list .operation>a.tool_bin', '#tool_bintc a.bandclos', '#tool_bintc');

	// 08-01 劳动工具-外借
    PopupFunc('.list .operation>a.tool_rep', '#tool_reptc span.closePopupBtn', '#tool_reptc');
	PopupFunc('.list .operation>a.tool_rep', '#tool_reptc .add_bont button', '#tool_reptc');

	// 09-01 劳动工具 弹窗
    PopupFunc('.sidebar .menuList>a.icon8', '#shexiang_tc a.closePopupBtn', '#shexiang_tc');

	// 09-02 开启警务通摄像头 弹窗
    PopupFunc('#shexiang_tc .sxtld input.openBtn', '#openCamera span.closePopupBtn', '#openCamera');

	// 09-02 开启安防摄像头 弹窗
    PopupFunc('#openCamera2Btn', '#openCamera2 span.closePopupBtn', '#openCamera2');

	// 09-04 关联摄像头 弹窗
    PopupFunc('#relevance', '#relate span.closePopupBtn', '#relate');

	// 09-05 解除关联小组 弹窗
    PopupFunc('#relieveBtn', '#relieve span.closePopupBtn', '#relieve');

	// 09-06 摄像头画面配置 弹窗
    PopupFunc('#deployBtn', '#deploy span.closePopupBtn', '#deploy');

    // 10-01 谈话录音 弹窗
    PopupFunc('.sidebar .menuList>a.icon9', '#luying_tc a.closePopupBtn', '#luying_tc');

	// 10-02 谈话录音播放 弹窗
    PopupFunc('.luying_tc .list_tab a.mt_ditel', '#recordPlay span.closePopupBtn', '#recordPlay');

	// 10-03 谈话录音 单文件播放 弹窗
    PopupFunc('.luying_tc .list_tab a.mt_play', '#monofilePlay span.closePopupBtn', '#monofilePlay');

	// 10-03 谈话录音 单文件下载 弹窗
    PopupFunc('.luying_tc .list_tab a.mt_save', '#monofileSave span.closePopupBtn', '#monofileSave');

	// 10-05 谈话录音 批量下载 弹窗
    PopupFunc('.luying_tc .operation a.batchSaveBtn', '#batchSave span.closePopupBtn', '#batchSave');

    // 11-01 信息发布 弹窗
    PopupFunc('.sidebar .menuList>a.icon10', '#sendMessage a.closePopupBtn', '#sendMessage');

	// 11-01 新增信息发布 弹窗
	PopupFunc('.list .operation>a.addinfo_tc', '#addinfo_tc span.closePopupBtn', '#addinfo_tc');
	PopupFunc('.list .operation>a.addinfo_tc', '#addinfo_tc .add_bont button', '#addinfo_tc');

	// 11-01 删除信息 弹窗
	PopupFunc('.list .operation>a.deleinfo_tc', '#deleinfo_tc span.closePopupBtn', '#deleinfo_tc');
	PopupFunc('.list .operation>a.deleinfo_tc', '#deleinfo_tc .btns button', '#deleinfo_tc');

	// 12-01 押解 弹窗
    PopupFunc('.sidebar .menuList>a.icon11', '#yajie a.closePopupBtn', '#yajie');

	// 12-01 押解-押解信息地图
	PopupFunc('.yajie_tc .list_tab a.mapinfo', '#mapyajie_tc span.closePopupBtn', '#mapyajie_tc');

	// 12-01 押解-新建押解
    PopupFunc('.yajie_tc .operation>a.add_yajie', '#addyajie_tc span.closePopupBtn', '#addyajie_tc');
	PopupFunc('.yajie_tc .operation>a.add_yajie', '#addyajie_tc .add_bont button', '#addyajie_tc');

	// 12-01 押解-押解绑定
	PopupFunc('.yajie_tc .operation>a.band_yajie', '#bandyajie_tc a.bandclos', '#bandyajie_tc');

	// 12-01 押解-绑定成功
	PopupFunc('.yajie_tc .operation>a.bandy_yajie', '#bandyajiey_tc a.bandyclos', '#bandyajiey_tc');

	// 13-01 多媒体 弹窗
    PopupFunc('.sidebar .menuList>a.icon12', '#Mt_Media a.closePopupBtn', '#Mt_Media');

	// 13-01 多媒体-媒体下载
    PopupFunc('.Mt_Media .operation>a.Media_down', '#downmt_tc span.closePopupBtn', '#downmt_tc');
	PopupFunc('.Mt_Media .operation>a.Media_down', '#downmt_tc .add_bont button', '#downmt_tc');

	// 13-01 多媒体-快捷播放
    PopupFunc('.Mt_Media .list_tab a.mt_play', '#playmt_tc span.closePopupBtn', '#playmt_tc');
	PopupFunc('.Mt_Media .list_tab a.mt_play', '#playmt_tc .add_bont button', '#playmt_tc');

	// 13-01 多媒体-媒体详情
    PopupFunc('.Mt_Media .list_tab a.mt_ditel', '#ditelmt_tc span.closePopupBtn', '#ditelmt_tc');

	// 13-01 多媒体-录像保存
    PopupFunc('.Mt_Media .list_tab a.mt_save', '#savemt_tc span.closePopupBtn', '#savemt_tc');
	PopupFunc('.Mt_Media .list_tab a.mt_save', '#savemt_tc .btns button', '#savemt_tc');

    // 14-01 一卡通 弹窗
    PopupFunc('.sidebar .menuList>a.icon13', '#one-card a.closePopupBtn', '#one-card');

	// 14-01 一卡通-查看详情 弹窗
	PopupFunc('.list .list_tab a.bill_detil', '#billP_detail span.closePopupBtn', '#billP_detail');
    PopupFunc('.list .list_tab a.bill_detil', '#billP_detail .bill_bont button', '#billP_detail');

	// 15-01 锐警配置 弹窗
    PopupFunc('.sidebar .menuList>a.icon14', '#configure a.closePopupBtn', '#configure');

	// 15-01 锐警配置-授权密码
    PopupFunc('.config_list .fz>a', '.config_dv2 input.conf_ip2', '#config_pw');

    // 大数据 弹窗
    PopupFunc('.sidebar .menuList>a.icon7', '#hadoop a.closePopupBtn', '#hadoop');













    // 通用侧边栏 组织架构展开关闭
    $('.tissueConts .police a').on('click', function () {
        $(this).next('.second').toggle()
    });

    // 通用侧边栏 展开隐藏
    $('.sidebarSwitBtn').on('click', function () {
        $(this).toggleClass('open');
        $('.sidebar').toggleClass('hide');
        $('.topbar').toggleClass('fill');
        $('.container').toggleClass('fill');
    });

    // 通用侧边栏 快捷功能展开隐藏
    $('.menuList+a.switBtn').on('click', function () {
        $(this).toggleClass('more');
        $('.menuList').toggleClass('autoHeight')
    });

	// 警务通弹窗 高级搜索展开隐藏
    $('.popup .operation .superSearch').on('click', function () {
        $(this).parent('.operation').nextAll('.Search_tab').toggleClass("hide");
    });

    // 异常弹窗
    $('#allClearLayer .confirm').on('click', function () {
        $('#allClearLayer').toggle();
        $('#callThePolice .absLog').removeClass("red");
        $('#callThePolice .absBtn').toggle();
    });

    // 点名弹窗
    $('#onekeyDianm').on('click', function () {
        $('#dianm_tc .handle p.tip').toggle();
    });

    // 通用侧边栏 组织架构 展开收缩
    $('.sidebar .tissueConts li.opens').on('click', function () {
        $(this).toggleClass('opens1')
    });

    // 添加快捷功能-添加删除提示
    $('.allShortcut li a').on('click', function () {
        $(this).toggle().siblings('a').toggle();
    });

    // 顶部搜索框
    $('.topbar .searchBox input').bind('input propertychange', function () {
        console.log($(this).val());
        if ($(this).val().trim() !== '') {

            $('.topbar .searchPopup').css('display','block')
        }else {
            $('.topbar .searchPopup').css('display','none')
        }
    })




});

















