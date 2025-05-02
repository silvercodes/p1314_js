import * as THREE from 'three';
import './css/styles.css';
import Manager from './js/Models/Manager';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';


document.addEventListener('DOMContentLoaded', () => {
    let loader = new FontLoader();
    loader.load('helvetiker_bold.typeface.json', (font) => {
        init(font);
    });
}, false);

function init(font) {

    const manager = new Manager(font);
    manager.init();

    const axesHelper = new THREE.AxesHelper(300);
    manager.scene.add(axesHelper);
}
