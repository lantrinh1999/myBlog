import app from "./app";
// require('./bootstrap');
const router = app.$router;

router.push(context.url);

context.meta = app.$meta();
import renderVueComponentToString from "vue-server-renderer/basic";
renderVueComponentToString(app, (err, html) => {
    // if (err) {
    //     throw new Error(err);
    // }
    const { style, script, noscript } = context.meta.inject();

    dispatch(`
            ${style.text({ pbody: true })} ${script.text({
        pbody: true,
    })} ${noscript.text({ pbody: true })} ${html} ${style.text({
        body: true,
    })} ${script.text({ body: true })} ${noscript.text({ body: true })}
        `);
});
