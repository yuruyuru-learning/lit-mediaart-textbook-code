{
    // 配列
    let positionX = [];
    let positionY = [];
    let velocityY = [];
    let size = [];

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // 配列0番目の位置
        positionX[0] = 100;
        positionY[0] = 100;
        // 配列0番目の速度
        velocityY[0] = 5;
        // 配列0番目の大きさ
        size[0] = 40;

        // 配列1番目の位置
        positionX[1] = 250;
        positionY[1] = 250;
        // 配列1番目の速度
        velocityY[1] = 9;
        // 配列1番目の大きさ
        size[1] = 80;

        // 配列2番目の位置
        positionX[2] = 400;
        positionY[2] = 400;
        // 配列2番目の速度
        velocityY[2] = 7;
        // 配列2番目の大きさ
        size[2] = 60;
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0, 200, 255);

        // 3回処理する
        for (let i = 0; i < 3; i++) {
            // Y座標を上に移動
            positionY[i] -= velocityY[i];

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