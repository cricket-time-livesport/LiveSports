
function playM3u8(url){
	var url = "http://cdn.live247stream.com/thelight/tv/playlist.m3u8";
  if(Hls.isSupported()) {
      var video = document.getElementById('liveVideo');
      video.volume = 1.0;
      var hls = new Hls();
      var m3u8Url = decodeURIComponent(url)
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
      document.title = url
    }
}

playM3u8(window.location.href.split("#")[1])

