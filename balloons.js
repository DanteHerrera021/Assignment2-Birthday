document.addEventListener("DOMContentLoaded", function () {
    const animLibrary = [
        "animate__bounce",
        "animate__flash",
        "animate__pulse",
        "animate__rubberBand",
        "animate__shakeX",
        "animate__shakeY",
        "animate__headShake",
        "animate__swing",
        "animate__tada",
        "animate__wobble",
        "animate__jello",
        "animate__heartBeat"
    ]

    let randAnim = Math.floor(Math.random() * animLibrary.length)

    document.getElementById("h1-greeting").classList.add(animLibrary[randAnim])

    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });

    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    document.getElementById("select-all").addEventListener('click', function (e) {
        let checkboxes = document.getElementsByClassName("form-check-input");
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    });

    document.getElementById("select-none").addEventListener('click', function (e) {
        let checkboxes = document.getElementsByClassName("form-check-input");
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    });

    document.getElementById("submit").addEventListener('click', function (e) {
        let checkboxes = document.getElementsByClassName("form-check-input");
        let isChecked = false;
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                isChecked = true;
            }
        }
        if (!isChecked) {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });

    document.onkeyup = function (e) {
        if (e.key === "Escape") {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    };

    document.querySelectorAll('.form-check-label').forEach(c => c.addEventListener('mouseover', function (e) {
        document.getElementById('h1-greeting').style.color = this.getAttribute('for')
    }));

    document.querySelectorAll('.form-check-label').forEach(c => c.addEventListener('mouseleave', function (e) {
        document.getElementById('h1-greeting').style.color = "slategray"
    }));
});