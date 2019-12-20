import Vue from 'vue';
import Upload from './upload';

console.log('hello upload');

const views = [
    {id: 'upload', component: Upload}
];

views.forEach(view => {
    if (document.getElementById(view.id)) {
        new Vue({
            el: '#' + view.id,
            render: h => h(view.component)
        });
    }
});