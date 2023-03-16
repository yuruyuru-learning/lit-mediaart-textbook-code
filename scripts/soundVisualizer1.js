{
    // 変数
    let sound;
    let fft;
    let spectrum;

    // データのロード
    function preload() {
        sound = loadSound('assets/gems/bgmSound.mp3');
    }

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(500, 500);

        // 周波数を解析(滑らかに動かすための値、配列の長さ)
        fft = new p5.FFT(0.8, 16);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(240);

        // 振幅値を計算する（0〜255）
        spectrum = fft.analyze();

        // ぬりつぶす
        fill(0, 200, 255, 20);

        // 線の色
        stroke(0, 200, 255);

        // 配列の長さだけ処理する
        for (let i = 0; i < spectrum.length; i++) {
            // 円を描く
            ellipse(width / 2, height / 2, spectrum[i]);
        }
    }

    // マウスが押されたときに呼び出す関数
    function mouseClicked() {
        // サウンドが再生中のとき
        if (sound.isPlaying()) {
            // サウンドを一時停止
            sound.pause();

            // サウンドが再生されていないとき
        } else {
            // サウンドをループ再生
            sound.loop();
        }
    }

}