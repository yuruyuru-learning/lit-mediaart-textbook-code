{
    // 変数
    let mic;

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // マイクから音声を取得する
        mic = new p5.AudioIn();

        // 音声の処理を開始する
        mic.start();

        // ぬりをなくす
        noFill();
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(240, 20);

        // マイクの音量を計算する（0〜1.0）
        let volume = mic.getLevel();

        // 線の色
        stroke(0, 200, 200);

        // 線の太さ
        strokeWeight(10);

        // 大きさ
        let size = volume * 1000;

        // 円を描く
        ellipse(width / 2, height / 2, 100 + size);
    }

    // マウスが押されたら
    function mouseClicked() {
        // 音声の処理を有効にする
        userStartAudio();
    }

}