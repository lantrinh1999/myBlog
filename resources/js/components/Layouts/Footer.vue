<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-logo">
                <span :click="scrtt">
                    Linhlatin
                    <!-- <span></span> -->
                </span>
            </div>
            <ul class="social-icons">
                <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-behance"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-codepen"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-facebook-messenger"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-github-alt"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-skype"></i></a>
                </li>
            </ul>
            <!-- <p class="copyright">© 2018 Ryan. All Rights Reserved</p> -->
        </div>
    </footer>
</template>
<script>
export default {
    methods: {
        scrtt: function () {
            window.scrollTo(0, 0);
        },
    },
    mounted() {
        window.scrollTo(0, 0);
    },
};
</script>
