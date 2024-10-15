// 定义获取地理位置的函数
function getGeolocation() {
    if (navigator.geolocation) {
        // 如果浏览器支持Geolocation API，则获取当前位置
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        // 如果浏览器不支持Geolocation API，则显示提示信息
        document.getElementById('geolocation').innerHTML = "Geolocation is not supported by this browser.";
    }
}

// 显示地理位置信息
function showGeolocation(position) {
    document.getElementById('geolocation').innerHTML =
        "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

// 处理错误信息
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('geolocation').innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('geolocation').innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('geolocation').innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('geolocation').innerHTML = "An unknown error occurred.";
            break;
    }
}
