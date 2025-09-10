let osc;
let playing = false;
let bgColor = [0, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
}

function draw() {
  if (playing) {
    background(bgColor);

    // فرکانس بر اساس موقعیت X
    let freq = map(mouseX, 0, width, 100, 1000);
    // حجم صدا بر اساس موقعیت Y
    let vol = map(mouseY, 0, height, 1, 0);

    osc.freq(freq);
    osc.amp(vol, 0.1);

    // تغییر رنگ بک‌گراند بر اساس صدا
    let r = map(vol, 0, 1, 0, 255);
    let g = map(freq, 100, 1000, 0, 255);
    let b = map(mouseX, 0, width, 0, 255);
    bgColor = [r, g, b];

    // دایره وسط صفحه
    noStroke();
    fill(255, 200);
    ellipse(mouseX, mouseY, 50 + vol * 100);
  }
}

function mousePressed() {
  if (!osc) {
    userStartAudio().then(() => {
      osc = new p5.Oscillator('sine');
      osc.start();
      osc.amp(0.5, 0.1);
      playing = true;
    });
  } else {
    playing = true;
    osc.amp(0.5, 0.1);
  }
}

function mouseReleased() {
  if (osc) {
    playing = false;
    osc.amp(0, 0.5);
  }
}
