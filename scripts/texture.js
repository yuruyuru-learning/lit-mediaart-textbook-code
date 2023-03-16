{
    // 変数
    var capture;
    var textureImage;

    // データのロード
    function preload() {
        // テクスチャの画像
        textureImage = loadImage('assets/gems/texture_image.png');
    }

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる(WEBGLモードに設定)
        createCanvas(500, 500, WEBGL);

        // webカメラの映像を取得する
        capture = createCapture(VIDEO);
        // webカメラの映像を非表示にする
        capture.hide();

        // 輪郭（りんかく）を消す
        noStroke();
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0);

        // マウスでカメラの向きを操作できるようにする
        orbitControl();

        // Y軸で回転させる
        rotateY(frameCount * 0.02);

        // テクスチャを貼り付ける
        texture(textureImage);

        // ボックスを描く
        //box(200);

        // 平面を描く
        plane(250);
    }
}