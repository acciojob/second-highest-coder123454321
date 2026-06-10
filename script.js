//your JS code here. If required.
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <script>
        function secondHighest(numbers) {
            let largestValue = -Infinity;
            let secondLargestValue = -Infinity;

            for (let value of numbers) {
                value = Number(value);

                if (value > largestValue) {
                    secondLargestValue = largestValue;
                    largestValue = value;
                } else if (value > secondLargestValue && value < largestValue) {
                    secondLargestValue = value;
                }
            }

            return secondLargestValue;
        }

        function startProgram() {
            let totalElements = Number(prompt("Enter the number of elements"));
            let inputValues = [];

            for (let index = 0; index < totalElements; index++) {
                inputValues.push(prompt("Enter element " + (index + 1)));
            }

            alert(findSecondLargest(inputValues));
        }

        startProgram();
    </script>

    <script type="text/javascript" src="./script.js"></script>
</body>
</html>
