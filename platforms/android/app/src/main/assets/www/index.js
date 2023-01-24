function deviceReady() {

    function netWorkNone() {
        navigator.splashscreen.hide();
        let modalWindow = document.createElement( 'div' );
        modalWindow.className = 'modal-window';
        document.body.prepend( modalWindow );
        modalWindow.insertAdjacentHTML( 'afterbegin', '<span>' +
                                                        '<h2>“No Internet Connection“</h2>' +
                                                        'Plugin your Router devices to TV box.<br>Lan connection using the network cable and wait for it to establish a connection or' + 'setting  >>  Network & Internet  >>  Activate the WIFI  >>  and connect to your WIFI user.<br>' +
                                                        'If you still do not connect to the Internet, call Support.<br>' +
                                                        '<button id="btnUpdate">Update</button>' +
                                                      '</span>' );

        let btnUpdate = document.getElementById( 'btnUpdate' );
        btnUpdate.focus();
        btnUpdate.onclick = () => window.location.reload();
    }

    if ( navigator.connection.type === 'none' ) {
        netWorkNone();
    } else {
        let checkNetwork = new XMLHttpRequest();
        checkNetwork.open( 'GET', 'https://airband.cast-tv.app/WS/PlayerAPI/GetJsonService.asmx/CheckClient_BoxID?BoxID=' + device.uuid + '&IP=178.136.233.7' );

        checkNetwork.timeout = 6000;

        checkNetwork.ontimeout = function() {
            netWorkNone();
        }

        checkNetwork.onerror = function() {
            netWorkNone();
        }
        
        checkNetwork.onload = function() {
            let checkNetworkResponse = JSON.parse( checkNetwork.response );

            if ( typeof( checkNetworkResponse ) === 'object' ) {
                window.location.replace( 'https://testtv.cast-tv.app' ); 
            } else {
                netWorkNone();
            }

        }

        checkNetwork.send();
    
    }

}

document.addEventListener( "deviceready", deviceReady, false );