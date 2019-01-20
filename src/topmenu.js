// =============================
//   Yuki-Skin
//        scripts/topmenu.js
// =============================
//                  Mizucoffee

const path = require("path");
const GUI = require("babylonjs-gui");

let trans = "";
let flag = false;

let select
let selectOpacity = 1
let vector = -1

let current = 0

let startBtn, settingsBtn, exitBtn

// 描画開始前に呼ばれる
module.exports.onStart = (scene, gui) => {
  scene.clearColor = BABYLON.Color3.White();

  new BABYLON.UniversalCamera("camera", BABYLON.Vector3.Zero(), scene);

  const logo = new GUI.Image("img", path.join(__dirname, "../images/yuntan_logo.png"));
  logo.width = 0.7;
  logo.height = 0.7;
  logo.top = "-15%"
  logo.stretch = GUI.Image.STRETCH_UNIFORM;
  gui.addControl(logo);

  startBtn = createButton('Start', "15%")
  settingsBtn = createButton('Settings', "25%")
  exitBtn = createButton('Exit', "35%")

  select = new BABYLON.GUI.Container()
  select.background = "#ffe1aa";
  select.width = "20%";
  select.height = "8%";
  select.top = "15%";

  gui.addControl(select);
  gui.addControl(startBtn)
  gui.addControl(settingsBtn);
  gui.addControl(exitBtn);
};

function createButton(text, pos) {
  const t = new GUI.TextBlock();
  t.text = text;
  t.color = "black";
  t.fontSize = '6%';
  t.top = pos;
  return t
}

// 描画更新時呼ばれる
module.exports.onTick = scene => {
  selectOpacity += 0.01 * vector
  if (selectOpacity <= 0.4 || selectOpacity >= 1) vector = vector * -1
  select.alpha = selectOpacity

  return trans;
};

// キープレス時に呼ばれる
module.exports.onKeyDown = keyCode => {
  switch (keyCode) {
    case 13:
    case 32:
      switch (current) {
        case 2:
          trans = "finish"
          break;
      }
      break
    case 38:
      if (--current < 0) current = 2
      select.top = `${current + 1}5%`;
      break;
    case 40:
      if (++current > 2) current = 0
      select.top = `${current + 1}5%`;
      break;
  }
};

// 描画終了時に呼ばれる
module.exports.onFinished = () => { };
