{
    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(windowWidth, windowHeight);

        // 背景をぬりつぶす
        background(0);

        // ブレンドモードの設定
        blendMode(ADD);

        // 輪郭（りんかく）を消す
        noStroke();
    }

    // 計算と描画
    function draw() {
        // ぬりつぶす
        fill(255, random(200), 0, 50);

        // マウスクリックしたら
        if (mouseIsPressed) {
            // 円を描く
            ellipse(mouseX + random(-50, 50), mouseY + random(-50, 50), random(5, 50));
        }
    }

}