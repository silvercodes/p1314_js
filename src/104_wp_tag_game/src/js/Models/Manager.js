import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Field from './Field';

class Manager {
    constructor(font) {
        this.font = font;

        this.renderer = this.genRenderer();
        this.scene = new THREE.Scene();
        this.camera = this.genCamera(window.innerWidth / window.innerHeight);
        this.light = this.genLight(0xffffff);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.field = new Field(this.scene, font);
    }

    init() {
        this.scene.add(this.light);
        this.scene.add(this.field.mesh);

        this.updateEventListeners();

        this.render();
    }

    render() {
        this.controls.update();

        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(() => {this.render()});
    }

    updateEventListeners() {
        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        const arrMeshes = this.field.getChipsAsMeshes();

        let startPos;
        let mouseDown = false;

        this.renderer.domElement.addEventListener('mousedown', (e) => {
            mouseDown = true;
            startPos = Object.assign({}, this.camera.position);
        }, true);

        this.renderer.domElement.addEventListener('mouseup', (e) => {
            mouseDown = false;
            if (JSON.stringify(this.camera.position) === JSON.stringify(startPos)) {
                e.preventDefault();

                let targetMesh;

                mouse.x = (e.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
                mouse.y = -(e.clientY / this.renderer.domElement.clientHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, this.camera);

                let intersects = raycaster.intersectObjects(arrMeshes);

                if (intersects.length > 0) {
                    targetMesh = intersects[0].object;
                    let chip = this.field.findChipByMesh(targetMesh.parent);

                    this.field.moveChip(chip);
                }
            }
        }, true);

        this.renderer.domElement.addEventListener('mousemove', (e) => {
            if(mouseDown) {

            }
        });

        window.addEventListener('keydown', (e) => {
            if(e.code === 'Space')
                this.field.shuffleChips();
        });
    }
    genRenderer = function() {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        const canvas = document.querySelector('#canvas');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
    
        const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
        renderer.setClearColor(0x000000);
    
        return renderer;
    }
    genCamera = function(aspect) {
        let camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 5000);
        camera.position.set(-500, -1200, 1500);
        return camera;
    }
    genLight = function(color) {
        //return new THREE.AmbientLight(color);
        let l = new THREE.DirectionalLight(0x0088ff, 1.0);
        l.position.set(0.5, 0.5, 1).normalize();
        return l;
    }
}

export default Manager;
