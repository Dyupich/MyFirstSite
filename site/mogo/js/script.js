+function() {
    document.querySelector('.service__inner__block__accord__section')
    .classList
    .add('opened');

    document.querySelectorAll('.service__inner__block__accord__section')
    .forEach(function(section) {
        section.addEventListener('click', function(e) {
           

            document.querySelectorAll('.service__inner__block__accord__section')
            .forEach(function(section) {
                section.classList
                .remove('opened');
            })

            e.target.closest('.service__inner__block__accord__section')
            .classList
            .add('opened');
        })
    })
}()