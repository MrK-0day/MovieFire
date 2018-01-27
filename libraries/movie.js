$.getJSON('./D.json', function(json){
    var vuejs = new Vue({
        el : '#app_header',
        data : {
            stringTrangChu : json['MovieFire']['strTrangChu'],
            iconFirebaseLink : json['MovieFire']['linkIconFirebase']
        }
    });
    var vuejs_body = new Vue({
        el : '#app_body',
        data : {
            todos : json['DATA']
        }
    });
    $('#TimKiem').click(function(){
        var m_TenPhim = $('#LoadTenPhim').find("option:selected").val();
        var m_TapPhim = $('#TapPhim').val();
        var links = null;
        for(var i = 0; i < json['DATA'].length; i++) {
            if (json['DATA'][i].TenPhim == m_TenPhim) {
                links = json['DATA'][i].TapPhim[m_TapPhim];
                break;
            }
        }
        document.getElementById('player').innerHTML = "<source src=" + links + " />";
    });
    $('#ToanManHinh').click(function() {
        var element = document.getElementById('player');
        if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    });
});