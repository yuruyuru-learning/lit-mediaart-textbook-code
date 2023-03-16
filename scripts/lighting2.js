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
        ambientLight(60);

        // 1点から周りを照らす光（シアン）
        pointLight(0, 255, 255, -250, 0, 250);

        // 1点から周りを照らす光（ピンク）
        pointLight(255, 120, 120, 250, 0, 250);

        // 光沢のないマテリアル（反射する色を設定）
        //ambientMaterial(250);

        // 光沢のあるマテリアル（反射する色を設定）
        specularMaterial(250);

        // X軸に回転させる
        rotateX(frameCount * 0.01);

        // Y軸に回転させる
        rotateY(frameCount * 0.01);

        // ボックスを描く
        box(100);
    }

}