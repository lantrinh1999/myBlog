import app from "./app";
import renderVueComponentToString from "vue-server-renderer/basic";
context.meta = app.$meta();

renderVueComponentToString(app, (err, html) => {
    if (err) {
        throw new Error(err);
    }
    const {
        title,
        link,
        style,
        script,
        noscript,
        meta,
    } = context.meta.inject();
    dispatch(
        `${meta.text()} ${title.text()} ${link.text()} ${style.text()} ${script.text()} ${noscript.text()}`
    );
});
