// =============================
//   Yuki-Skin
//        scripts/topmenu.js
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
  logo.width = 0.7;
  logo.height = 0.7;
  logo.top = "-20%"
  logo.stretch = GUI.Image.STRETCH_UNIFORM;
  gui.addControl(logo);

  var text1 = new GUI.TextBlock();
  text1.text = "Start";
  text1.color = "black";
  text1.fontSize = "4%";
  text1.top = "10%"
  gui.addControl(text1);

  var text2 = new GUI.TextBlock();
  text2.text = "Settings";
  text2.color = "black";
  text2.fontSize = "4%";
  text2.top = "20%"
  gui.addControl(text2);

  var text3 = new GUI.TextBlock();
  text3.text = "Exit";
  text3.color = "black";
  text3.fontSize = '4%';
  text3.top = "30%"
  gui.addControl(text3);

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
