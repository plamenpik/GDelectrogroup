const classArray = ['image-one', 'image-two', 'image-three'];
const textArray = ['Осветление', 'Ел. Инсталации', 'Коледна украса'];
let classCount = 0;
let headerImages = document.getElementById('header-images');
let switcher = document.getElementById('switcher');
let headerText = document.getElementById('header-text');


function classChanger() {
    if (classCount == classArray.length) {
        classCount = 0;
	}
	setClass(classCount);
    classCount++;
    setTimeout('classChanger()', 6000);
}

function switchImage(count) {
    setClass(count);
    classCount = count + 1;
}

function setClass(number) {
    headerImages.classList = classArray[number];
	switcher.classList = classArray[number];
	headerText.textContent = textArray[number];
}