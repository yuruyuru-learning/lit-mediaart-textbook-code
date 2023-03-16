{
    // 変数
    let angle = 0;

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // 角度を度数法にする
        angleMode(DEGREES);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0, 0, 40, 5);

        // 角度をふやす
        angle++;

        // 座標の基点を真ん中に移動させる
        translate(width / 2, height / 2);

        // 回転させる
        rotate(angle);

        // 線の色
        stroke(255, 0, 150);
        // 線の太さ
        strokeWeight(5);
        // 線を描く
        line(0, 0, 0, 200);

        // ぬりつぶす
        fill(255, 0, 150);
        // 円を描く
        ellipse(0, 0, 30);
    }

}