// TEST
console.log('Hello Vue!');

const app = new Vue({
    el: '#root',
    data: {
        containerClass: 'container',
        titleClass: 'title',
        message: 'Io dopo aver scoperto quanto ti semplifica la vita Vue.js:',
        imageUrl: 'img/ragequit.gif',
        imageClass: 'gif',
    }
});

console.log(app);