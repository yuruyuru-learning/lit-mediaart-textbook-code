{
    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる（WEBGLモードに設定）
        createCanvas(500, 500, WEBGL);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0);

        // 全体を照らす光
        ambientLight(0, 0, 100);

        // 一方向から照らす光（色と方向）
        directionalLight(255, 255, 0, 0, 0, -1);

        // X軸に回転させる
        rotateX(frameCount * 0.01);

        // Y軸に回転させる
        rotateY(frameCount * 0.01);

        // ボックスを描く
        box(100);
    }

}