const classArray = ["image-one", "image-two", "image-three"];
        const textArray = ["Осветление", "Ел. Инсталации", "Коледна украса"];
        let classCount = 0;
       
        function classChanger() {
            if (classCount == classArray.length) {
                classCount = 0;
            }
            document.getElementById("header-images").classList = classArray[classCount];
            document.getElementById("switcher").classList = classArray[classCount];
            document.getElementById("header-text").textContent = textArray[classCount];
            classCount++;
            setTimeout("classChanger()", 7000);
        }

        function switchImage(count) {
            classCount = count + 1;
            document.getElementById("header-images").classList = classArray[count];
            document.getElementById("switcher").classList = classArray[count];
            document.getElementById("header-text").textContent = textArray[count];
        }