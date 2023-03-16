{
    // 変数
    let gearModel;

    // 3Dモデルのデータをロードする
    function preload() {
        gearModel = loadModel('assets/gems/gear.obj');
    }

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる(WEBGLモードに設定)
        createCanvas(500, 500, WEBGL);

        // 角度を度数法にする
        angleMode(DEGREES);
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(240);

        // マウスでカメラの向きを操作できるようにする
        orbitControl();

        // 拡大する
        scale(100);

        // X軸に90度かたむける
        rotateX(90);

        // Y軸で回転させる
        rotateY(frameCount);

        // 確認用のマテリアル
        normalMaterial();

        // 3Dモデルを表示する
        model(gearModel);
    }
}