import app from './app';
// require('./bootstrap');
app.$router.push(context.url);
// import printf from 'printf';
import renderVueComponentToString from 'vue-server-renderer/basic';



renderVueComponentToString(app, (err, res) => {
  dispatch(res);
});

// renderVueComponentToString(app, (err, html) => {
//         if (err) {
//             throw new Error(err);
//         }
//         // printf(html);
//         dispatch(html);
//     });
