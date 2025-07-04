!function () {
    var nui = window.nui ||{};
    var _map;
    var global  = function (options) {
        _map = this.map = new AMap.Map('container',options)
    };
    // @func: 加载比例尺
    global.prototype.autoPlugin = function () {
        AMap.plugin(["AMap.Scale"], function () {
            _map.addControl(new AMap.Scale())
        });
        AMap.plugin(["AMap.ToolBar"], function () {
            _map.addControl(new AMap.ToolBar({
                position:'RB',
                liteStyle:true
            }))
        });
    };
    // @func:
    global.prototype.createMarker = function (key) {

        var box = document.createElement("div");
        box.className = "nui-amap-marker";
        var markerImg = document.createElement("img");
        markerImg.className = "markerlnglat";
        markerImg.src = "http://webapi.amap.com/images/marker_sprite.png";
        markerImg.height = "35";
        markerImg.width = "27";
        box.appendChild(markerImg);
        var markerSpan = document.createElement("span");
        markerSpan.innerHTML = key._name;
        box.appendChild(markerSpan);

        return new AMap.Marker({
            map:_map.map,
            visible:true,//可见
            position:new AMap.LngLat(key._location.lng, key._location.lat),//基点位置
            extData:key,//间接赋值，可少写一个方法
            autoRotation:false,
            content: box //自定义点标记覆盖物内容

        });
    };
    global.prototype.removeMarker=function () {
        _map.clearMap()
    };
    global.prototype.createMarkerEvent =function (e) {
        global.infoWindowMarker(this.getExtData())
    };
    // @func:关闭自定义信息窗体
    global.prototype.closeInfoWindow = function(){
        _map.clearInfoWindow();
    };
    // @func:构建自定义信息窗体 (内容,标题,图片)
    global.prototype.createInfoWindow = function(content,title,imgInfo){
        var box = document.createElement("div"),hd = document.createElement("div"),bd = document.createElement("div");
        box.className = "nui-amap-popup";
        hd.className = "nui-amap-popup-hd";
        bd.className = "nui-amap-popup-bd";
        hd.innerHTML = title;
        bd.innerHTML= imgInfo? '<div class="nui-amap-popup-img">'+imgInfo+'</div>'+content:content;
        return title&&box.appendChild(hd),content&&box.appendChild(bd),box
    };
    global.prototype.infoWindowMarker=function (item) {
        /**
         * _id	String	数据id，id为数据唯一标识
         * _name	String	名称
         * _location	LngLat	坐标
         * _address	String	地址
         * _address	String	地址
         * _image	Array.<Image>	图片信息
         * _updatetime	String	数据更新时间
         * _distance	Number	距离中心点距离(仅周边查询时返回)
         * custom_field1		用户自定义字段1
         * custom_field...		用户自定义字段...             *
         **/
        new AMap.InfoWindow({
            isCustom:true,
            content:global.createInfoWindow('<p><b>更新时间：</b><a>'+item._updatetime+'</a></p><p></p>',item._name,(item._image.length?'<img src=\"'+item._image[0]._url+'\">':"")+'<span><b>地址：</b>'+item._address+'</span>'),
            size: new AMap.Size(300, 0),
            autoMove: true,
            offset: new AMap.Pixel(0, -25)
        }).open(_map, item._location);
        AMap.event.addListener(_map,"click",function(){
            _map.clearInfoWindow();
        });
    };
    // @func: 定位
    global.prototype.geolocation = function (callback) {
        AMap.plugin('AMap.Geolocation', function () {
            var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true,        //显示定位按钮，默认：true
                buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                buttonOffset: new AMap.Pixel(15, 55),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: false,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy: false      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            _map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', function (e) {
                if(e.accuracy){//高精度
                    callback&&callback(e.position);
                    /*new AMap.Circle({
                     center:new AMap.LngLat(e.position.lng,e.position.lat),// 圆心位置
                     radius:500, //半径
                     strokeColor: "#F33", //线颜色
                     strokeOpacity: 1, //线透明度
                     strokeWeight: 1, //线粗细度
                     fillColor: "#ee2200", //填充颜色
                     fillOpacity: 0.1//填充透明度
                     }).setMap(_map);*/
                }else {//ip定位
                    AMap.plugin('AMap.CitySearch',function () {
                        var _ =new AMap.CitySearch();
                        _.getLocalCity();
                        AMap.event.addListener(_, "complete", function(e){
                            callback&&callback(e.city);
                        });
                        AMap.event.addListener(_, "error", function(e){
                            console.log(e)
                        });
                    })
                }
            });
            AMap.event.addListener(geolocation, 'error', function (e) {
                console.log("AMap.Geolocation.info", e)
            });
        });
    };
    global.prototype.weather = function (callback) {
        AMap.service('AMap.Weather', function() {
            var weather = new AMap.Weather();
            weather.getLive(e, function(err, data) {
                if(!err){
                    callback&&callback(data);
                    /*                    var _ =document.createElement("p"),str=[];
                     str.push('<div style="color: #3366FF;">实时天气' + '</div>');
                     str.push(data.city+',' + data.weather);
                     str.push('，' + data.temperature + '℃，');
                     str.push(data.windDirection + '风');
                     str.push(data.windPower + ' 级');
                     str.push('，湿度' + data.humidity + '</div>');
                     str.push('<small style="display: block;color: #888;">发布时间：' + data.reportTime + '</small>');
                     _.innerHTML =str.join('');
                     document.getElementById("log").appendChild(_)*/
                }
            })
        })
    };
    global.prototype.on = function (event, name,callback) {
        (typeof name === "function")&&( callback = name, name = _map );
        AMap.event.addListener(name, event,callback);
    };
    nui.map =function (options) {
        return new global(options)
    }
}();