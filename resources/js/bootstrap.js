window._ = require("lodash");
window.axios = require("axios");
import jquery from 'jquery';
import Popper from 'popper.js';
window.$  = jquery;
window.Popper  = Popper;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
