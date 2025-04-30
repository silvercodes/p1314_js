import * as $ from 'jquery';

import Post from './Post.js';

import './styles/style.css';
import './styles/scss.scss';
import './styles/less.less';

import logo from './assets/php.png';

import json from './assets/data.json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';



const post = new Post('Post_1', logo);
console.log('🟢', post.toString());
$('pre').addClass('snippet').html(post.toString());

console.log('🟢', json);
console.log('🟢', xml);
console.log('🟢', csv);

