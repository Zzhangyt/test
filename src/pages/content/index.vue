<template>
    <div></div>
</template>

<script>
  import * as THREE from 'three'
    export default {
        name: "index",
        data(){
            return{

            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                let scene = new THREE.Scene();
                let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
                let renderer = new THREE.WebGLRenderer();
                let geometry = new THREE.BoxGeometry( 5, 5, 5 );
                let material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
                let cube = new THREE.Mesh( geometry, material );
                scene.add( cube );
                camera.position.z = 5;
                renderer.setSize( window.innerWidth, window.innerHeight);
                document.body.appendChild( renderer.domElement );
                function animate() {
                    requestAnimationFrame( animate );
                    cube.rotation.x += 0.03;
                    cube.rotation.y += 0.03;
                    renderer.render( scene, camera );
                }
                animate()
            },
        }
    }
</script>

<style scoped lang="scss">
  canvas { width: 100%; height: 100%;}
</style>
