<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>وردەکارییەکانی غیاب</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .absence-details {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>وردەکارییەکانی غیاب</h1>
    <div id="absenceDetails" class="absence-details"></div>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const studentIndex = urlParams.get('studentIndex');

        // وەرگرتنی زانیارییەکانی قوتابی لە localStorage
        const students = JSON.parse(localStorage.getItem('students')) || [];
        const student = students[studentIndex];

        if (student) {
            const absenceDetails = document.getElementById('absenceDetails');
            absenceDetails.innerHTML = `
                <h2>${student.name}</h2>
                <p>گرووپ: ${student.group}</p>
                <h3>کاتەکانی غیاب:</h3>
                <ul>
                    ${student.absenceDates.map(date => `<li>${date}</li>`).join('')}
                </ul>
            `;
        } else {
            document.getElementById('absenceDetails').innerHTML = '<p>زانیارییەکانی غیاب بوونی نییە.</p>';
        }
    </script>
</body>
</html>