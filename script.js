    function appendToDisplay(value) {
        document.getElementById('expression').value += value;
    }

    function clearDisplay() {
        document.getElementById('expression').value = '';
        document.getElementById('answer').value = '';
    }

    function clearAll() {
        clearDisplay();
    }

    function calculate() {
        var expression = document.getElementById('expression').value;
        try {
            var result = eval(expression);
            document.getElementById('answer').value = result;
        } catch (error) {
            document.getElementById('answer').value = 'Error';
        }
    }

    function squareRoot() {
        var expression = document.getElementById('expression').value;
        try {
            var result = Math.sqrt(eval(expression));
            document.getElementById('expression').value = '';
            document.getElementById('answer').value = result;
        } catch (error) {
            document.getElementById('answer').value = 'Error';
        }
    }