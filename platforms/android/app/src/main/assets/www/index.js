function deviceReady() {

    if ( navigator.connection.type === 'none' ) {
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
        errorLog.innerHTML += device.uuid;
    } else {
        window.location.replace( 'https://testtv.cast-tv.app' );
    }

}

if ( window.navigator.userAgent.includes( 'Android' ) ) {
    document.addEventListener( "deviceready", deviceReady, false );
} else { 
    deviceReady();
}