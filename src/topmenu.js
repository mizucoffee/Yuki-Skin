// =============================
//   Yuki-Skin
//        scripts/top-menu.js
// =============================
//                  Mizucoffee

let camera

// 描画開始前に呼ばれる
module.exports.onStart = (scene,changeScene) => {

  camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI /3 , 10, new BABYLON.Vector3.Zero(), scene);

  new BABYLON.HemisphericLight(
    'light1',
    new BABYLON.Vector3(0, 1, 0),
    scene
  )

  const sphere = BABYLON.MeshBuilder.CreateSphere(
    'sphere',
    { segments: 16, diameter: 2 },
    scene
  )

  sphere.position.y = 1

  BABYLON.MeshBuilder.CreateGround(
    'ground1',
    { height: 6, width: 6, subdivisions: 2 },
    scene
  )
}

let alpha = 0
let trans = ''

// 描画更新時呼ばれる
module.exports.onTick = (scene) => {
  alpha += 0.01
  if (alpha >= Math.Pi) alpha = -Math.PI
  camera.alpha = alpha

  return trans
}

// キープレス時に呼ばれる
module.exports.onKeyDown = () => {
  console.log("onKeyDown")
}

// 描画終了時に呼ばれる
module.exports.onFinished = () => {
  console.log("onFinished")
}