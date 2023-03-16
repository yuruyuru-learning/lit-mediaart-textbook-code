{
    // 配列
    let positionX = [];
    let positionY = [];
    let velocityY = [];
    let size = [];
    let colorIndex = [];

    let colorList = [
        [255, 0, 100],
        [0, 220, 220],
        [200, 255, 0],
    ];

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // 30回処理する
        for (let i = 0; i < 30; i++) {
            // 位置
            positionX[i] = random(width);
            positionY[i] = random(height);
            // 速度
            velocityY[i] = random(3, 10);
            // 大きさ
            size[i] = random(10, 80);
            // 色
            colorIndex[i] = floor(random(colorList.length));
        }
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0, 0, 40);

        // 30回処理する
        for (let i = 0; i < 30; i++) {
            // Y座標を上に移動
            positionY[i] -= velocityY[i];

            // 線の色
            stroke(colorList[colorIndex[i]]);

            // 線の太さ
            strokeWeight(20);

            // 円を描く
            ellipse(positionX[i], positionY[i], size[i]);

            // キャンバスの外(上)にでたら
            if (positionY[i] < - size[i]) {
                // キャンバスの下に戻す
                positionY[i] = height + size[i];
            }
        }
    }

}