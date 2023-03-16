{
    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // 背景をぬりつぶす
        background(255);
    }

    // 計算と表示
    function draw() {
        // ぬりつぶす
        fill(random(150, 255), 230, 230);
        // 線の色
        stroke(255);
        // 円を描く
        ellipse(random(width), random(height), 100);

        // 文字の色
        fill(255, 150, 0);
        // フォント
        textFont('Pacifico');
        // 文字の位置
        textAlign(CENTER, CENTER);

        // 文字のサイズ
        textSize(80);
        // 文字を表示する
        text('NAME', 250, 100);

        // 文字のサイズ
        textSize(60);
        // 文字を表示する
        text('MediaArt', 250, 400);
    }

}