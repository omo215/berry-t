

const endpoint = "https://script.googleusercontent.com/macros/echo?user_content_key=8EgnKGjGr8rZP-c4K0W1d1yO-jbDoprJ4ei03vjon70bTeFlWduQoGy4rzxPTV4bA6MkjmUT4q5krUGr6AC0872QAIkFLChym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLyR9WyFRlApnhleNQTdNbvCF7xNuBjfEDgCeM9v6EAi0Trp7Q0Mz9AMoHzwXrdcye5D5FZ60rYpgHdYeyzZm4UlgdgTRxyNS9z9Jw9Md8uu&lib=MineNrQRZ9bBJZCjS5PHUpW3EvXRcAoqd";

//APIを使って非同期データを取得する
fetch(endpoint)
    .then(response => response.json())
    /*成功した処理*/
    .then(data => {
        //JSONから配列に変換
        const object = data;
        write3D(object)
    });


function write3D(val) {

    const width = window.innerWidth;
    const height = window.innerHeight;


    const scene = new THREE.Scene();


    const camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 5000);
    scene.add(camera);


    camera.position.set(900, 2000, 900);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // const pGeometry = new THREE.PlaneGeometry( 500, 500 );
    // const pMaterial = new THREE.MeshBasicMaterial({ color: 0x999999 });
    // const p001 = new THREE.Mesh(pGeometry, pMaterial);
    // p001.rotation.set(-1.57,0,0)
    // p001.position.set(0, 0, 0)
    // scene.add(p001);
    // const material = new THREE.SpriteMaterial({
    //     map: new THREE.TextureLoader().load('../img/map.png'),
    //   });
      
    //   const sprite = new THREE.Sprite(material);
    //   sprite.position.set(0,0,0)
    //   scene.add(sprite);

    const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
    scene.add(light);
    for (let i = 0; i < val.length; ++i) {
        console.log(val[i])
        const y = (val[i].x) - 735
        const x = (val[i].y) - 945
        let ownerColor = 0xcccccc

        if(val[i].owner == 'stm'){
            ownerColor = 0xa0522d
        }else if(val[i].owner == 'crw'){
            ownerColor = 0xdc143c
        }

        if (val[i].name == 'トンネル') {
            const geometry = new THREE.TorusGeometry(8, 3, 16, 100,3.2);
            const material = new THREE.MeshBasicMaterial({ color: ownerColor });
            const torus = new THREE.Mesh(geometry, material);
            torus.position.set(x, 5, y)
            torus.rotation.set(0,1.57,0)
            scene.add(torus);

        } else if (val[i].name == 'ハピフィッシュ') {

            // 箱を作成
            const geometry = new THREE.CylinderGeometry( 10, 10, 30, 32 );
            const material = new THREE.MeshBasicMaterial({ color: ownerColor });
            const box = new THREE.Mesh(geometry, material);
            box.position.set(x, 5, y)
            scene.add(box);
        }else if (val[i].name == '生息地') {

            // 箱を作成
            const geometry = new THREE.ConeGeometry( 10, 20, 32 );
            const material = new THREE.MeshBasicMaterial({ color: ownerColor });
            const box = new THREE.Mesh(geometry, material);
            box.position.set(x, 5, y)
            scene.add(box);
        } else if (val[i].name == '蟻塚') {

            // 箱を作成
            const geometry = new THREE.BoxGeometry(10, 10, 10);
            const material = new THREE.MeshBasicMaterial({ color: ownerColor });
            const box = new THREE.Mesh(geometry, material);
            box.position.set(x, 5, y)
            scene.add(box);

    } else if (val[i].name == '港') {

        // 箱を作成
        const geometry = new THREE.PlaneGeometry( 10, 10 );
        const material = new THREE.MeshBasicMaterial({ color: ownerColor });
        const box = new THREE.Mesh(geometry, material);
        box.rotation.set(-1.57,0,0)
        box.position.set(x, 5, y)
        scene.add(box);
    }
        console.log(val[i].x, val[i].y)

    }
//     //const controls = new THREE.OrbitControls( camera, renderer.domElement );
//     const createTexture = (filePath) => {
//         return new THREE.TextureLoader().load(filePath);
//       };
//       const wideImageTexture = createTexture(
//         'https://www.berry-t.com/img/map.png'
//       );
// // spriteを作成し、sceneに追加
// const createSprite = (texture, scale, position) => {
//     const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
//     const sprite = new THREE.Sprite(spriteMaterial);
//     sprite.scale.set(scale.x, scale.y, scale.z);
//     sprite.position.set(position.x, position.z, position.y);
//   scene.add(sprite);
//   };
//   createSprite(
//     wideImageTexture,
//     { x: 380, y: 700, z: 0 },
//     { x: -10, y: 0, z: -100 }
//   );

const material = new THREE.SpriteMaterial({
    map: new THREE.TextureLoader().load('https://www.berry-t.com/img/map.png'),
  });
  const sprite = new THREE.Sprite(material);
//   // ランダムな座標に配置,中心を原点に持ってくるために「-0.5」(rondomは0〜１なので)
//   sprite.position.x = 500 * (Math.random() - 0.5);
//   sprite.position.y = 500 * (Math.random() - 0.5);
//   sprite.position.z = 500 * (Math.random() - 0.5);
  // スケールを調整
  sprite.scale.set(380, 700, 0);
  scene.add(sprite);


    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
        //box.rotation.y += 0.01;
       
        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
    }
}








//https://script.googleusercontent.com/macros/echo?user_content_key=8EgnKGjGr8rZP-c4K0W1d1yO-jbDoprJ4ei03vjon70bTeFlWduQoGy4rzxPTV4bA6MkjmUT4q5krUGr6AC0872QAIkFLChym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLyR9WyFRlApnhleNQTdNbvCF7xNuBjfEDgCeM9v6EAi0Trp7Q0Mz9AMoHzwXrdcye5D5FZ60rYpgHdYeyzZm4UlgdgTRxyNS9z9Jw9Md8uu&lib=MineNrQRZ9bBJZCjS5PHUpW3EvXRcAoqd