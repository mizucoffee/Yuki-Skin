// =============================
//   Yuki-Skin
//        scripts/splash.js
// =============================
//                  Mizucoffee

const path = require("path");
const GUI = require("babylonjs-gui");

let trans = "";
let flag = false;

// 描画開始前に呼ばれる
module.exports.onStart = (scene, gui) => {
  scene.clearColor = BABYLON.Color3.White();

  new BABYLON.UniversalCamera("camera", BABYLON.Vector3.Zero(), scene);

  const logo = new GUI.Image("img", path.join(__dirname, "../images/yuntan_logo.png"));
  logo.width = 1;
  logo.height = 1;
  logo.stretch = GUI.Image.STRETCH_UNIFORM;
  gui.addControl(logo);

  const loop = () => {
    if (flag) {
      logo.alpha -= 0.03;
      if (logo.alpha > 0) return setTimeout(loop, 10);
      logo.alpha = 0;
      setTimeout(() => (trans = "top-menu"), 500);
    } else setTimeout(loop, 10);
  };
  loop();
  setTimeout(() => (flag = true), 3000);
};

// 描画更新時呼ばれる
module.exports.onTick = scene => {
  return trans;
};

// キープレス時に呼ばれる
module.exports.onKeyDown = keyCode => {
  if (keyCode === 13 || keyCode == 32) flag = true;
};

// 描画終了時に呼ばれる
module.exports.onFinished = () => { };
