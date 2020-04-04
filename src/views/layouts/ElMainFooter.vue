<template>
    <div class="footer-social-icons">
        <h4 style="color: gray; text-align: center;" class="notification">Sígueme en mis redes sociales.</h4>
        <ul class="social-icons">
            <li><a href="https://www.facebook.com/OmarEducacionFinanciera" class="social-icon" target="_blank"> <i class="fa fa-facebook"></i></a></li>
<!--            <li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li>-->
<!--            <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>-->
            <li><a href="https://www.youtube.com/channel/UCdNnEDbRWhanA1O8zhCn3ZA" class="social-icon" target="_blank"> <i class="fa fa-youtube"></i></a></li>
<!--            <li><a href="" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>-->
            <li><a href="https://www.instagram.com/OmarEducacionFinanciera" class="social-icon" target="_blank"> <i class="fa fa-instagram"></i></a></li>
<!--            <li><a href="" class="social-icon"> <i class="fa fa-github"></i></a></li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ElMainFooter"
    }
</script>

<style scoped>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
    body {
        font-family: 'Lato', sans-serif;
        color: #FFF;
        background: #322f30;
        -webkit-font-smoothing: antialiased;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    p > a:hover{
        color: #d9d9d9;
        text-decoration:  underline;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:  1% 0 1% 0;
    }
    ._12 {
        font-size: 1.2em;
    }
    ._14 {
        font-size: 1.4em;
        margin-left: 20%;
    }
    ul {
        padding:0;
        list-style: none;
    }
    .footer-social-icons {
        text-align: center;
        width: 350px;
        display:block;
        margin: 0 auto;
    }
    .social-icon {
        color: #fff;
    }
    ul.social-icons {
        margin-top: 10px;
    }
    .social-icons li {
        vertical-align: top;
        display: inline;
        height: 100px;
    }
    .social-icons a {
        color: #fff;
        text-decoration: none;
    }
    .fa-facebook {
        padding:10px 14px;
        -o-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #d5dadb;
    }
    .fa-facebook:hover {
        background-color: #3d5b99;
    }
    .fa-twitter {
        padding:10px 12px;
        -o-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #d5dadb;
    }
    .fa-twitter:hover {
        background-color: #00aced;
    }
    .fa-rss {
        padding:10px 14px;
        -o-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #d5dadb;
    }
    .fa-rss:hover {
        background-color: #eb8231;
    }
    .fa-youtube {
        padding:10px 14px;
        -o-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #d5dadb;
    }
    .fa-youtube:hover {
        background-color: #e64a41;
    }
    .fa-instagram {
        padding:10px 14px;
        -o-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #d5dadb;
    }
    .fa-instagram:hover {
        background-color: #c141db;
    }
    .fa-linkedin {
        padding:10px 14px;
        -o-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #d5dadb;
    }
    .fa-linkedin:hover {
        background-color: #0073a4;
    }
    .fa-github {
        padding:10px 14px;
        -o-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
        background-color: #d5dadb;
    }
    .fa-github:hover {
        background-color: #5a32a3;
    }
</style>