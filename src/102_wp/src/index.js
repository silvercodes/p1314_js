import Post from './Post.js';

import './styles/style.css';

import logo from './assets/php.png';

import json from './assets/data.json';



const post = new Post('Post_1', logo);
console.log('🟢', post.toString());

console.log('🟢', json);

