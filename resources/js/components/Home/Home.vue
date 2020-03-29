<template>
    <div>
        <Banner :banner="banner" />
        <About :about="about" />
        <Contact :contact="contact" />
    </div>
</template>
<script>
import About from "./Section/About";
import Banner from "./Section/Banner";
import Contact from "./Section/Contact";
import axios from "axios";
export default {
    metaInfo: {
        title: "Home",
        titleTemplate: "%s - Linhlatin",
    },
    name: "Home",
    components: {
        About,
        Banner,
        Contact,
    },
    data() {
        return {
            //   data_home: {},
            about: {},
            banner: {},
            contact: {},
        };
    },
    created() {
        this.$axios
            .get(`/api`)
            .then((response) => {
                let data = response.data;
                this.banner = data.banner;
                this.about = data.about;
                this.contact = data.banner;
                console.log(this.banner);
            })
            .catch((e) => {
                this.errors.push(e);
            });
    },
};
</script>
