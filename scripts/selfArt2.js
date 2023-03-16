{
    // 文字の配列
    let words = [
        'ART',
        'MUSIC',
        'DESIGN',
        'COLOR',
        'MEDIA'
    ];

    // 色の配列
    let colorList = [
        [255, 0, 100],
        [0, 200, 200],
        [0, 0, 80],
        [255, 255, 255]
    ];

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // 背景をぬりつぶす
        background(240);
    }

    // 計算と表示
    function draw() {
        // 文字の色
        fill(colorList[floor(random(colorList.length))]);

        // フォント
        textFont('Chewy');

        // 文字のサイズ
        textSize(random(50));

        // 文字の位置
        textAlign(CENTER, CENTER);

        // 文字をたくさん表示する
        text(words[floor(random(words.length))], random(width), random(height));
    }

}