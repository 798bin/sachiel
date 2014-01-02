require.config({

    baseUrl: '/static/script/',

    paths: {
        text: 'third_party/text',

        zepto: 'third_party/zepto',
        lodash: 'third_party/lodash',
        async: 'third_party/async'
    },

    shim: {
        zepto: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        }
    }
});

require([
    'zepto',
    'lodash',
    'async'
], function( $, _, async ) {

    var $cam = $( '#cam' ),
        $cap = $( '#cap' ),
        ctx = $cap.get(0).getContext('2d'),
        $switchCam = $( '#switch-cam' ),
        $takeAShot = $( '#take-a-shot' ),
        $send = $( '#send' ),
        localMediaStream = null;

    var videoSources = [];

    // 遍历获取 设备 list
    MediaStreamTrack.getSources(function(media_sources) {
        media_sources.forEach(function(media_source){
            if (media_source.kind === 'video') {
                videoSources.push(media_source);
            }
        });

        //getMediaSource(videoSources);
        $switchCam.on('click', (function() {
            var index = 0;
            var vSourceLen = videoSources.length;

            return function() {

                if ( index < vSourceLen ) {
                    index = index + 1;
                } else {
                    index = 0;
                }

                initMedia(videoSources[index].id);
            };
        })() );
    });

    var initMedia = function(id) {
        var constraints = {};

        constraints.video = {
          optional: [{ sourceId: id}]
        };

        navigator.webkitGetUserMedia(constraints, function(stream) {
            var cam = $cam.get(0);

            localMediaStream = stream;
            cam.src = window.URL.createObjectURL(stream);
            cam.controls = false;
            cam.play();

        }, function(err) {
            alert( err );
        });
      };

    $takeAShot.on('click', function() {
        if (localMediaStream) {
          ctx.drawImage($cam.get(0),0, 0, 340, 340);
          document.querySelector('img').src = $cap.get(0).toDataURL('image/webp');
        }
    });
});

