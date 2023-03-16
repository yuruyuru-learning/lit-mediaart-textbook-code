{
    // 変数
    var dropSound;

    // データのロード
    function preload() {
        // しずくのサウンド
        dropSound = loadSound('assets/gems/droplet.mp3');
    }

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(windowWidth, windowHeight);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0, 10);
    }

    // キー入力したとき
    function keyTyped() {
        // aを入力したら
        if (key == 'a') {
            // ぬりつぶす
            fill(0, random(255), 255);

            //円を描く
            ellipse(width / 2, height / 2, 300);

            // サウンドを再生する
            dropSound.play();
        }
    }

}