// =============================
//   Yuki-Skin
//        scripts/splash.js
// =============================
//                  Mizucoffee

const path = require("path");

let trans = "";
let flag = false;

// 描画開始前に呼ばれる
module.exports.onStart = (scene, gui) => {
  scene.clearColor = BABYLON.Color3.White();

  new BABYLON.ArcRotateCamera(
    "Camera",
    -Math.PI / 2,
    0,
    10,
    BABYLON.Vector3.Zero(),
    scene
  );

  var light = new BABYLON.HemisphericLight(
    "hemiLight",
    new BABYLON.Vector3(-1, 1, 0),
    scene
  );
  light.specular = new BABYLON.Color3(0, 0, 0);

  var ground = BABYLON.Mesh.CreateGround("ground1", 10, 10, 2, scene);

  var logo = new BABYLON.StandardMaterial("logo", scene);
  logo.emissiveColor = new BABYLON.Color3(1, 1, 1);
  logo.diffuseTexture = new BABYLON.Texture(
    path.join(__dirname, "../images/yuntan_logo.png"),
    scene
  );

  ground.material = logo;

  const loop = () => {
    if (flag) {
      logo.alpha -= 0.03;
      if (logo.alpha > 0) return setTimeout(loop, 10);
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
module.exports.onFinished = () => {};
