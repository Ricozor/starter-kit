const StandardFormScript = () => {

    const contactForm = document.querySelector('#contactForm');

    const fields = [
        {
            id: 'name',
            valueMissing: 'Please enter a name',
        },
        {
            id: 'email',
            valueMissing: 'Please enter an email',
            typeMismatch: 'Please enter valid email',
        },
        {
            id: 'title',
            valueMissing: 'Please enter a title',
        },
        {
            id: 'comment',
            valueMissing: 'Please enter a comment',
        }
    ]

    const checkField = (field) => {
        if (field.validity.valueMissing) {
            field.setCustomValidity(field.messages.valueMissing);
            return false;
        } else if(field.validity.typeMismatch) {
            field.setCustomValidity(field.messages.typeMismatch);
            return false;
        } else {
            field.setCustomValidity('');
        }
    }

    fields.forEach(({id, valueMissing, typeMismatch}) => {

        const field = contactForm.querySelector(`#${id}`);
        field.messages = {
            valueMissing,
            typeMismatch,
        }
        field.addEventListener('change', () => {
            checkField(field);
        });
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            field.dispatchEvent(evt);
        } else {
            field.fireEvent("onchange");
        }
    });
}

export {
    StandardFormScript,
}
