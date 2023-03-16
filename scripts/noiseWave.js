{
    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(windowWidth, windowHeight);

        // 線の太さ
        strokeWeight(2);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(255);

        // くりかえし並べる
        for (let i = 0; i < width; i++) {
            // Y座標を乱数で決める
            let positionY = noise(i * 0.01 + mouseX) * 500;

            // 透明度の値を乱数で決める
            let alphaValue = noise(i * 0.02 + mouseX) * 255;

            // 線の色
            stroke(255, 30, 100, alphaValue);

            // 線を描く
            line(i, height / 2, i, positionY);
        }
    }

}