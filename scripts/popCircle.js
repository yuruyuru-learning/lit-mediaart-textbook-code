{
    // 配列
    let particles = [];

    // 全体の初期化（最初に一回だけ呼ばれる）
    function setup() {
        // キャンバスをつくる
        createCanvas(windowWidth, windowHeight);

        // 輪郭（りんかく）を消す
        noStroke();
    }

    // 計算と表示
    function draw() {
        // 背景をぬりつぶす
        background(0, 0, 40);

        // 配列の長さだけ処理する
        for (let i = 0; i < particles.length; i++) {
            // 移動する
            particles[i].move();
            // 表示する
            particles[i].draw();

            // 消える時間になったら
            if (particles[i].lifetime < 0) {
                // 配列から消す
                particles.splice(i, 1);
            }
        }
    }

    // マウスを押したら呼び出す
    function mousePressed() {
        // particles配列に40個追加する
        for (let i = 0; i < 40; i++) {
            particles.push(new Particle(mouseX, mouseY));
        }
    }

    // Particleクラス
    class Particle {
        // 初期化
        constructor(x, y) {
            // 最初の位置（マウスクリックした位置）
            this.position = createVector(x, y);

            // 動き
            this.velocity = createVector(random(-3, 3), random(-5, -10));

            // 動きにランダムな数をかける
            this.velocity.mult(random(1, 5));

            // 円の色
            this.color = color(random(255), 255, random(255));

            // 表示される時間
            this.lifetime = 500;
        }

        // 移動
        move() {
            // 円が弾ける
            this.position.add(this.velocity);

            // 円が落下する
            this.velocity.y++;

            // 残りの時間をへらす
            this.lifetime--;
        }

        // 表示
        draw() {
            // ぬりつぶす
            fill(this.color);

            // 円を描く
            ellipse(this.position.x, this.position.y, 20);
        }
    }

}