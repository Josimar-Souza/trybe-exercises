let inputs = document.querySelectorAll('.input');
getInitialValues();
inputEvent();
getStyleKeys();

function inputEvent() {
    for (let index = 0; index < inputs.length; index += 1) {
        inputs[index].addEventListener('keyup', setKeys);
    };
};

function setKeys(eventSource) {
    switch(eventSource.target.id) {
        case 'backgroundColor-input':
            localStorage.setItem('backgroundColor', eventSource.target.value);
            break;
        case 'textColor-input':
            localStorage.setItem('textColor', eventSource.target.value);
            break;
        case 'fontSize-input':
            localStorage.setItem('fontSize', eventSource.target.value);
            break;
        case 'lineHeight-input':
            localStorage.setItem('lineHeight', eventSource.target.value);
            break;
        case 'fontFamily-input':
            localStorage.setItem('fontFamily', eventSource.target.value);
            break;
        default:
            console.log('Input não encontrado');
    };

    getStyleKeys();
};

function getStyleKeys() {
    let body = document.body;
    let paragraphs = document.querySelectorAll('p');

    if (localStorage.length > 0) {
        body.style.backgroundColor = localStorage.getItem('backgroundColor');
        for (let paragraph of paragraphs) {
            paragraph.style.color = localStorage.getItem('textColor');
            paragraph.style.fontSize = (localStorage.getItem('fontSize') + 'px');
            paragraph.style.lineHeight = (localStorage.getItem('lineHeight') + 'px')
            paragraph.style.fontFamily = localStorage.getItem('fontFamily');
        };
    };    
};

function getInitialValues() {
    for (let index = 0; index < inputs.length; index += 1) {
        switch(inputs[index].id) {
            case 'backgroundColor-input':
            inputs[index].value = localStorage.getItem('backgroundColor');
            break;
            case 'textColor-input':
                inputs[index].value = localStorage.getItem('textColor');
                break;
            case 'fontSize-input':
                inputs[index].value = localStorage.getItem('fontSize');
                break;
            case 'lineHeight-input':
                inputs[index].value = localStorage.getItem('lineHeight');
                break;
            case 'fontFamily-input':
                inputs[index].value = localStorage.getItem('fontFamily');
                break;
            default:
                console.log('Input não encontrado');               
        }
    };
};