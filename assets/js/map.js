window.addEventListener('load', function() {
    // 지도를 표시할 div
    var mapContainer = document.getElementById('map');
    
    // 지도의 중심좌표 (노원구 중계동 예시 좌표)
    var coords = new kakao.maps.LatLng(37.654321, 127.071234);
    
    // 지도 옵션
    var mapOption = {
        center: coords,
        level: 3 // 지도의 확대 레벨
    };

    // 지도 생성
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커 생성
    var marker = new kakao.maps.Marker({
        position: coords
    });

    // 마커를 지도에 표시
    marker.setMap(map);

    // 커스텀 오버레이에 표시할 내용
    var content = '<div class="map-overlay">' +
        '    <div class="map-title">다솜 재가복지센터</div>' +
        '    <div class="map-body">' +
        '        <div class="map-desc">' +
        '            <div class="map-address">서울특별시 노원구 동일로 1001번길</div>' +
        '            <div class="map-tel">Tel: 02-931-2164</div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    // 커스텀 오버레이 생성
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()
    });

    // 지도 반응형 처리
    window.addEventListener('resize', function() {
        map.setCenter(coords);
    });
});
