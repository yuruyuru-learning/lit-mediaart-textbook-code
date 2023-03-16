{
    // 変数
    let angle = 0;

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // 輪郭（りんかく）を消す
        noStroke();
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0, 0, 40, 20);

        // 角度をふやす
        angle += 0.05;

        // cos関数を使って横の位置を計算する
        let positionX = cos(angle * 0.2) * 200;

        // sin関数を使って縦の位置を計算する
        let positionY = sin(angle) * 200;

        // ぬりつぶす
        fill(250, positionX, positionY);

        // 円を描く
        ellipse(250 + positionX, 250 + positionY, 50);
    }

}