const classArray = ['image-one', 'image-two', 'image-three'];
const textArray = ['Осветление', 'Ел. Инсталации', 'Коледна украса'];
let classCount = 0;
const headerImages = document.getElementById('header-images');
const switcher = document.getElementById('switcher');
const headerText = document.getElementById('header-text');
const switcherButtons = Array.from(document.querySelectorAll('#switcher .switcher-btn'));

if (switcherButtons.length > 0) {
    switcherButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const imageIndex = Number(button.dataset.imageIndex || 0);
            switchImage(imageIndex);
        });
    });
}


function classChanger() {
    if (!headerImages || !switcher || !headerText) {
        return;
    }

    if (classCount == classArray.length) {
        classCount = 0;
	}
	setClass(classCount);
    classCount++;
    setTimeout(classChanger, 6000);
}

function switchImage(count) {
    if (!headerImages || !switcher || !headerText) {
        return;
    }

    setClass(count);
    classCount = count + 1;
}

function setClass(number) {
    headerImages.className = classArray[number];
    switcher.className = classArray[number];
	headerText.textContent = textArray[number];
}