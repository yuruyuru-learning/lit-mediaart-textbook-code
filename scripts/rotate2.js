{
    // 変数
    let angle = 0;

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // 四角形の基準を真ん中にする
        rectMode(CENTER);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(255, 255, 230);

        // 角度を増やす
        angle += 0.025;

        // 輪郭（りんかく）を消す
        noStroke();

        // ぬりつぶす
        fill(0, 200, 200);

        // 現在の座標を一時保存
        push();

        // 座標の基点を移動させる（真ん中）
        translate(250, 250);

        // 回転させる
        rotate(angle);

        // 四角形を描く
        rect(0, 0, 200, 200);

        // 一時保存した座標に戻す
        pop();

        // ぬりをなくす
        noFill();

        // 線の色
        stroke(0, 0, 80);

        // 線の太さ
        strokeWeight(10);

        // 現在の座標を一時保存
        push();

        // 座標の基点を移動させる（左上）
        translate(150, 150);

        // 回転させる
        rotate(angle);

        // 四角形を描く
        rect(0, 0, 100, 100);

        // 一時保存した座標に戻す
        pop();

        // 線の色
        stroke(255, 0, 150);

        // 座標の基点を移動させる（右下）
        translate(350, 350);

        // 回転させる
        rotate(-angle);

        // 四角形を描く
        rect(0, 0, 100, 100);
    }

}