<?php
    //渡したいデータ
    $param1 = "data1";
    $param2 = "data2";

    //JSON化（シリアライズ）する前に連想配列へ。
    $arrParam = 
        [
            'd1' => $param1,
            'D2' => $param2
        ];
    //連想配列をJSON化（シリアライズ）
    $strJson = json_encode($arrParam);

?>

<!doctype html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>PHPからJavascriptへ</title>
</head>
<body>
    <h1>PHPからJavascriptへ</h1>
    <script>
        //PHPでJSON化したものをJavascriptのオブジェクトへ（デシリアライズ）
        const objData = JSON.parse('<?php print $strJson; ?>');

        //読み取り部１
        console.log(objData.d1);

        //読み取り部２
        console.log(objData.D2);

    </script>
</body>
</html>
