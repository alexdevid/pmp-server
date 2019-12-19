import './index.less';

import Vue from 'vue';
import Upload from './components/audio/upload';

console.log('hello');

new Vue({
    el: '#app',
    render: h => h(Upload)
});