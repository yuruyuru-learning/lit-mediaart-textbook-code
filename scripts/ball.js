{
    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる(WEBGLモードに設定)
        createCanvas(500, 500, WEBGL);

        // 角度の設定を度にする
        angleMode(DEGREES);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0, 0, 40);

        // マウスでカメラの向きを操作できるようにする
        orbitControl();

        // Y軸に90度かたむける
        rotateY(90);

        // 線の色
        stroke(255);

        // 図形を描き始める
        beginShape(POINTS);

        // 円周に沿って並べた点を、さらに円周に沿ってくりかえし並べる
        for (let j = 0; j < 360; j += 10) {
            // 点を円周に沿って、くりかえし並べる
            for (let i = 0; i < 360; i += 2) {

                // X座標
                let x = sin(i) * cos(j);
                // Y座標
                let y = sin(i) * sin(j);
                // Z座標
                let z = cos(i);

                // ノイズを計算する
                let noiseValue = noise(
                    frameCount * 0.02 + x,
                    frameCount * 0.02 + y,
                    frameCount * 0.02 + z) * 30 + 100;

                // 頂点を描く（ノイズを使うとき）
                vertex(x * noiseValue, y * noiseValue, z * noiseValue);

                // 頂点を描く（ノイズを使わないとき）
                //vertex(x * 100, y * 100, z * 100);
            }
        }

        // 図形を描き終える
        endShape();
    }
}