import * as THREE from 'three';
import Chip from './Chip';
import { CHIP_DEPTH, CHIP_SIZE, FIELD_SIZE } from '../gameConfig.js';

function rnd(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Field {
    constructor(scene, font) {
        this.font = font;

        this.scene = scene;
        this.mesh = this.genMesh();
        this.chips = [];

        this.genChips(font);
        this.renderChips();
    }

    genChips(font) {
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                let chip = new Chip(i * 4 + j + 1, font);

                let half = CHIP_SIZE / 2;
                let x = j * CHIP_SIZE + half - FIELD_SIZE / 2;
                let y = -(i * CHIP_SIZE + half - FIELD_SIZE / 2);
                let z = CHIP_DEPTH / 2;

                chip.setPosition({x: x, y: y, z: z}, false);

                this.chips.push(chip);
            }
        }

        this.chips[15].mesh = null;
    }

    renderChips() {
        this.chips.forEach((c) => {
            if (c.mesh) {
                this.scene.add(c.mesh);
            }
        });
    }

    getChipsAsMeshes() {
        const arr = [];
        for (let i = 0; i < this.chips.length; i++) {
            if (this.chips[i].mesh) {
                arr.push(this.chips[i].mesh.children[0]);
            }
        }

        return arr;
    }

    findChipByMesh(mesh) {
        for(let i = 0; i < this.chips.length; i++) {
            if(this.chips[i].mesh === mesh)
                return this.chips[i];
        }

        return null;
    }

    moveChip(chip) {

        let meshes = [];
        for(let i = 0; i < this.chips.length; i++) {
            meshes.push(this.chips[i].mesh);
        }

        let nullId = meshes.indexOf(null);
        let chipId = this.chips.indexOf(chip);
        if(Math.abs(nullId - chipId) === 4 || Math.abs(nullId - chipId) === 1) {
            let chip = this.chips[chipId];
            let nullChip = this.chips[nullId];

            this.chips[nullId] = this.chips.splice(chipId, 1, this.chips[nullId])[0];

            let temp = {x: nullChip.pos.x, y: nullChip.pos.y, z: nullChip.pos.z};
            nullChip.setPosition({x: chip.pos.x, y: chip.pos.y, z: chip.pos.z});
            chip.setPosition(temp);
        }
    }

    async shuffleChips() {
        let steps = rnd(300, 500);
        for(let i = 0; i < steps; i++) {
            await sleep(5);

            let meshes = [];
            for(let i = 0; i < this.chips.length; i++) {
                meshes.push(this.chips[i].mesh);
            }

            let nullId = meshes.indexOf(null);
            let chipId = -1;

            let pairTwo = rnd(1, 2);
            let sign = rnd (-1, 1);

            if(pairTwo === 1) {
                chipId = nullId + sign;
                if(sign && chipId < 16 && this.chips[chipId]) {
                    this.moveChip(this.chips[chipId])
                }
            }
            else if(pairTwo === 2) {
                chipId = nullId + sign * 4;
                if(sign && chipId < 16 && this.chips[chipId]) {
                    this.moveChip(this.chips[chipId])
                }
            }
        }
    }

    genMesh = function() {
        let planeGeo = new THREE.PlaneGeometry(FIELD_SIZE, FIELD_SIZE);
        let planeMat = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide, wireframe: true} );
        let plane = new THREE.Mesh(planeGeo, planeMat);
    
        return plane;
    }
}

export default Field;
