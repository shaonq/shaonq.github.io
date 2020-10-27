define(function(require) {
    var a =require("jquery"), nui = require("nui");
    var g ={};
    g.node =function () {
        return a("[data-note]").attr("data-note")
    }();
    g.commentInit = function () {
        require.async(["https://cdn.wilddog.com/sdk/js/2.1.0/wilddog.js"], function () {
            var config = {
                authDomain: "yanyujiangnan.wilddog.com",
                syncURL: "https://yanyujiangnan.wilddogio.com/node"
            };
            wilddog.initializeApp(config,"DEFAULT");
            wilddog.auth().signInAnonymously().then(function(user){ g.commentBind(user.uid) }).catch(function () { g.commentBind()});
        })
    };
    g.commentNode = function (key,u) {
        var ref = wilddog.sync().ref(key).child("body");
        var nodeBum =  wilddog.sync().ref(key).child("num");
        nodeBum.once("value",function (n) {
            var v = n.val();
            a(".fa-eye").next().text(v);/*eye*/
            nodeBum.set(parseInt(v)+1);
        });
        var one,num = 0 ;
        ref.on("child_added",function (d) {
            if(!one){
                g.showUl.html(' ');
                one = true;
            }
            a(".fa-comment-o").next().text(++num);/*comment*/
            var data = d.val();
            var m = a(".icon-bubble + cite");
            data.val && g.showUl.append('<li data-uid=\"'+data.uid+'\">'+data.val+'</li>') &&m.html( parseInt(m.html()) +1);

        });
        g.commentSend(ref,u);
    };
    g.commentSend = function (ref,u) {
        nui.log(u,"note:uid"),nui.log(ref.toString(),"note:url");
        var div = g.sendEl.find("div"),
            btn = g.sendEl.find("button");
        btn.on("click", function () {
            var val = function (html) {
                return String(html || '').replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
                    .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;')
                    .replace(/&nbsp;/g, ' ').replace(/\s/g, "");
            }(div.html());
            var len = val.replace(/[^\x00-\xff]/g, "00").length;
            if (len) {
                ref.push({ uid: u, val: val}).then(function(childRef){
                    div.html('');
                    nui.open("提交成功")
                })
            }
        })
    };
    g.commentBind = function (u) {
        var ref = wilddog.sync().ref();
        ref.once("value").then(function(d){
            var dd =d.val(),key;
            for(var k in dd ){
                if(typeof dd[k]  !== "object") break;
                if(dd[k].node === g.node) key = k;
            }
            if(key){
                g.commentNode(key,u);
            }else {
                ref.push({node:g.node,body:"",num:0}).then(function(childRef){
                    g.commentNode(childRef.key(),u);
                })
            }
        }).catch(function(err){
            console.error(err);
        })
    };

    g.init = function () {
        g.showUl = a(".note-comment");
        g.sendEl = a(".note-send");
        g.node && g.commentInit();
    }();
    return g
});
