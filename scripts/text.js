{
    // 変数
    let Limelight;

    // フォントデータをロード
    function preload() {
        Limelight = loadFont('assets/gems/Limelight-Regular.ttf');
    }

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500, WEBGL);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0, 0, 40);

        // フォント
        textFont(Limelight);

        // 文字のサイズ
        textSize(100);

        // 文字の位置
        textAlign(CENTER, CENTER);

        // Y軸に回転させる
        rotateY(frameCount * 0.01);

        // 文字を表示する
        text('MediaArt', 0, 0);
    }
}