const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth /window.innerHeight,
    1,
    1000
);

// const camera = new THREE.OrthographicCamera(
//     window.innerWidth / -200,
//     window.innerWidth / 200,
//     window.innerHeight / 200,
//     window.innerHeight / -200,
//     0.1,
//     1000
// );

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(4,4,4);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff0 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.rotation.z += 0.008;

    renderer.render(scene, camera);
}

animate();


