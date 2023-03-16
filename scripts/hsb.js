{
    // 変数
    let hueValue = 0;

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(windowWidth, windowHeight);

        // 色の計算方法をHSB（色相、彩度、明度、透明度）に設定
        colorMode(HSB, 360, 100, 100, 100);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(hueValue, 100, 100);

        // 色相の値をふやす
        hueValue++;

        // 色相の値が360を超えたら、0に戻す
        if (hueValue > 360) {
            hueValue = 0;
        }
    }

}