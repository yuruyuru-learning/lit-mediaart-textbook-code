{
    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる(WEBGLモードに設定)
        createCanvas(windowWidth, windowHeight, WEBGL);

        // デバッグモードを設定する（補助線を表示する）
        debugMode(AXES, 2000, 0, 0, 0);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(200);

        // カメラの設定
        camera(
            // カメラの位置（x, y, z）
            cos(frameCount * 0.01) * 300, sin(frameCount * 0.02) * 300, 100,
            // カメラが写す画面の中心となる位置（x, y, z）
            0, 0, 0,
            // カメラ自身の向き（x, y, z）
            0, 1, 0
        );

        // ぬりつぶす
        fill(100);

        // 球体を描く
        sphere(100);
    }

}