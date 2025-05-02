import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { CHIP_DEPTH, CHIP_SIZE, CHIP_GAP, TEXT_SIZE } from '../gameConfig.js';

class Chip {
    constructor(num, font) {
        this.num = num;
        this.depth = CHIP_DEPTH;
        this.pos = {x: 0, y: 0, z: 0};

        this.mesh = this.genMesh(font);
    }

    setPosition(p, isAnimate = true) {
        this.pos.x = p.x;
        this.pos.y = p.y;
        this.pos.z = p.z;

        if (this.mesh) {
            if(isAnimate) {
                this.animate();
            }
            else {
                this.mesh.position.x = this.pos.x;
                this.mesh.position.y = this.pos.y;
                this.mesh.position.z = this.pos.z;
            }
        }
    }

    animate() {
        const currentPos = new THREE.Vector3();
        this.mesh.parent.updateMatrixWorld();
        currentPos.setFromMatrixPosition( this.mesh.children[0].matrixWorld );


        let diffX = this.pos.x - currentPos.x;
        let dx = diffX ? diffX / Math.abs(diffX) : 0;

        let diffY = this.pos.y - currentPos.y;
        let dy = diffY ? diffY / Math.abs(diffY) : 0;

        this.mesh.position.x += dx * 25;
        this.mesh.position.y += dy * 25;

        let raf = requestAnimationFrame(() => {this.animate()});

        if(currentPos.x === this.pos.x && currentPos.y === this.pos.y)
            window.cancelAnimationFrame(raf);
    }

    genMesh (font) {
        let chipGeo = new THREE.BoxGeometry(CHIP_SIZE - CHIP_GAP, CHIP_SIZE - CHIP_GAP, CHIP_DEPTH);
        let chipMat = new THREE.MeshPhongMaterial( {
            color: 0x0000ff,
            emissive: 0x2a0000,
            shininess: 20,
            specular: 0xbbbbbb,
            wireframe: false
        });
        let chipMesh = new THREE.Mesh(chipGeo, chipMat);

        let textGeo = new TextGeometry(`${this.num}`, {
            font: font,
            size: TEXT_SIZE,
            height: 2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 5,
            bevelSize: 8,
            bevelSegments: 5
        });
        let textMat = new THREE.MeshPhongMaterial({
            color: 0x999999,
            emissive: 0x2a0000,
            shininess: 30,
            specular: 0xbbbbbb,
        });

        let textMesh = new THREE.Mesh(textGeo, textMat);

        let sizeBox = new THREE.Box3().setFromObject(textMesh);
        let w = sizeBox.max.x ;
        let h = sizeBox.max.y;

        textMesh.position.x = - w / 2;
        textMesh.position.y = - h / 2;
        textMesh.position.z = CHIP_DEPTH / 2;

        let group = new THREE.Group();
        group.add( chipMesh );
        group.add( textMesh );

        return group;
    };
}

export default Chip;
