'use strict';
(function(){
    const [$, $$] = [(s) => document.querySelector(s), (s) => document.querySelectorAll(s)];

    document.addEventListener('DOMContentLoaded', function () {
        console.log('App loaded [Made by Maxence (mobile.maxence-dev.fr)]');

        window.scrollTo(0, 0);

        document.addEventListener('scroll', function (evt) {
            const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;

            $('.scroll-indicator-percent').innerText = `${Math.round(percent)}%`;
            $('.header-scroll-indicator').style = `--wp: ${Math.round(percent)}%`;
        });

        $('#toggle').addEventListener('change', function (evt) {
            let checked = evt.target.checked;
            $$('.card-container').forEach((card) => {
                card.classList.toggle('sticky');
                card.classList.toggle('relative');
            });
        });

        $$('.header-title').forEach(btn => {
            btn.addEventListener('click', () => window.scrollTo(0, 0));
        })
    });
})();