import app from './app';
app.$router.push(context.url);
import renderVueComponentToString from 'vue-server-renderer/basic';
renderVueComponentToString(app, (err, html) => {
    if (err) {
        throw new Error(err);
    }
    dispatch(html);
});




