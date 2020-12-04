function getID() {
    // 获取 ID 值
    var id = document.getElementById("musicID").value;
    if (id) {
        // 组合 URL 链接
        var musicURL = "http://music.163.com/song/media/outer/url?id=" + id;
        // 组合文本
        var musicPathText = "API 直链音频：<a href=\"" + musicURL + "\" target=\"_blank\">" + musicURL;
        // 显示 HTML
        document.getElementById("music-api-path").innerHTML = '<div class="alert alert-success" role="alert">' + musicPathText + '</div>';
        $("#no-things-alert").css("display", "none");
        // Cplayer

        let player = new cplayer({
            element: document.getElementById('cplayer-app'),
            playlist: [
                {
                    src: musicURL,
                    // poster: '封面链接...',
                    name: '网易云音乐 - ' + id,
                    artist: '网易云音乐',
                }
            ]
        })
    } else {
        swal("无输入!", "请输入一个正确的音乐 ID！", "error");
    }

}
