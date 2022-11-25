var map;
var marker;

let latlng = new Object();

function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.6807527, 139.7670716)
  };
  map = new google.maps.Map(document.getElementById("map"), opts);

  //mapをクリックしたときのイベントを設定
  google.maps.event.addListener(map, 'click', mylistener);

  //クリックしたときの処理
  function mylistener(event) {

    //マーカーを作成
    marker = new google.maps.Marker({
      icon: {
        url: 'icon.png',
        size: new google.maps.Size(100, 100), //画像ファイルの表示する部分を指定する
        origin: new google.maps.Point(0, 0), //anchor、sizeなどを指定する際の基準となる座標を指定する
        scaledSize: new google.maps.Size(32, 32),
        anchor: new google.maps.Point(16, 16) //画像の支点を調整する  
      },
    });

    //マーカーの位置を設定
    //クリックしたところの緯度経度を取得
    marker.setPosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));

    //マーカーを設置
    marker.setMap(map);

    //マーカーの座標を変数に入れて表示
    var pos = marker.getPosition();
    var lat01 = pos.lat();
    var lng01 = pos.lng(); 

    latlng.lat = lat01;
    latlng.lng = lng01;
    alert("緯度" + lat01 + ",経度:" + lng01);
  };
}

//マーカーの座標が入った連想配列を表示
function disp() {
  
}

//マーカーを削除
function del() {
  marker.setMap(null);
}


//連想配列
var array = [{lat:30, lng:130}, {lat:31, lng:131}, {lat:32, lng:133},]


