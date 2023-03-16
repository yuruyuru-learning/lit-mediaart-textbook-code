{
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
        background(0, 0, 40);

        // マス目の間隔（かんかく）
        let step = 100;

        // 縦に5回くりかえす
        for (let j = 0; j < 5; j++) {
            // 横に5回くりかえす
            for (let i = 0; i < 5; i++) {
                // 四角形の位置
                let positionX = i * step + 50;
                let positionY = j * step + 50;

                // 線の色
                stroke(255, positionX / 2, positionY / 2, random(150, 255));

                // 線の太さ
                strokeWeight(20);

                // 四角形を描く
                rect(positionX, positionY, 50, 50);
            }
        }
    }
}