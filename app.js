const form = document.querySelector('form');

const formEls = ['input[type="email"]', 'input[type="text"]', 'input[type="tel"]', 'textarea', 'select'];

function getAllFormEls() {
    let els = formEls.map((formEl) => {
        return Array.from(form.querySelectorAll(formEl));
    })

    return els.flat();
}

function persistForm() {
    const els = getAllFormEls();

    els.forEach(el => {
        el.addEventListener('change', function () {
            localStorage.setItem(el.name, el.value);
        });
    });
}

function restoreForm() {
    const els = getAllFormEls();

    els.forEach(el => {
        el.value = localStorage.getItem(el.name);
    });
}

restoreForm();
persistForm();


