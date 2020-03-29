<template>
    <section id="about" class="section p-900px-b">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="about-left">
                        <h2>{{ about.title || "Linhlatin" }}</h2>
                        <h3>{{ about.description || "Linhlatin" }}</h3>
                        <p v-html="about.contents || 'Linhlatin'"></p>
                    </div>
                </div>
                <!-- col -->

                <div class="col-md-6 text-center sm-m-45px-t">
                    <div class="skills p-t-10px-sm">
                        <div class="progress-lt">
                            <h6>HTML</h6>
                            <span>2%</span>
                            <div class="progress">
                                <div
                                    class="progress-bar theme-g-bg"
                                    role="progressbar"
                                    aria-valuenow="2"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                                <!-- /progress-bar -->
                            </div>
                            <!-- /progress -->
                        </div>
                        <!-- /progress-lt -->
                        <div class="progress-lt">
                            <h6>CSS</h6>
                            <span>5%</span>
                            <div class="progress">
                                <div
                                    class="progress-bar theme-g-bg"
                                    role="progressbar"
                                    aria-valuenow="5"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                                <!-- /progress-bar -->
                            </div>
                            <!-- /progress -->
                        </div>
                        <!-- /progress-lt -->
                        <div class="progress-lt">
                            <h6>JavaScript</h6>
                            <span>-1%</span>
                            <div class="progress">
                                <div
                                    class="progress-bar theme-g-bg"
                                    role="progressbar"
                                    aria-valuenow="-1"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                                <!-- /progress-bar -->
                            </div>
                            <!-- /progress -->
                        </div>
                        <!-- /progress-lt -->

                        <div class="progress-lt">
                            <h6>PHp</h6>
                            <span>5%</span>
                            <div class="progress">
                                <div
                                    class="progress-bar theme-g-bg"
                                    role="progressbar"
                                    aria-valuenow="5"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                                <!-- /progress-bar -->
                            </div>
                            <!-- /progress -->
                        </div>
                        <!-- /progress-lt -->
                    </div>
                </div>
                <!-- col -->
            </div>
            <!-- row -->
        </div>
        <!-- container -->
    </section>
</template>
<script>
export default {
    props: {
        about: Object,
    },
};
</script>
