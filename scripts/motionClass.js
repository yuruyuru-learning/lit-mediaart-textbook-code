{
    // 変数
let dropSound;

// 配列
let motions = [];

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

  // 配列の長さだけ処理する
  for (let i = 0; i < motions.length; i++) {
    // 表示する
    motions[i].draw();

    // 表示時間が0になったら
    if (motions[i].lifetime < 0) {
      // 配列から消す
      motions.splice(i, 1);
    }
  }
}

// キー入力したとき
function keyTyped() {
  // aを入力したら
  if (key == 'a') {
    // クラス「MotionA」を配列に追加する
    motions.push(new MotionA());

    // サウンドを再生する
    dropSound.play();
  }
}

// aキー
class MotionA {
  // 初期化
  constructor() {
    // 円の位置
    this.positionX = random(width);
    this.positionY = random(height);

    // 円の大きさ
    this.size = random(100);

    // 円の色
    this.color = color(0, random(255), 255, 200);

    // 円が表示される時間
    this.lifetime = 100;
  }

  // 表示
  draw() {
    // 円を大きくする
    this.size += 10;

    // 表示される時間をへらす
    this.lifetime--;

    // 輪郭（りんかく）を消す
    noFill();

    // ぬりつぶす
    stroke(this.color);

    // 円を描く
    ellipse(this.positionX, this.positionY, this.size);
  }
}

}