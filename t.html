<!DOCTYPE html>
<html lang="ku">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سیستەمی مامۆستایان</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .login-container, .students-container {
            background-color: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        .students-container {
            max-width: 600px;
        }

        .students-container h2 {
            margin-bottom: 1.5rem;
        }

        .students-container ul {
            list-style-type: none;
            padding: 0;
        }

        .students-container li {
            background-color: #f1f1f1;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <!-- فۆڕمی لۆگین -->
    <div class="login-container" id="loginContainer">
        <h2>چوونەژوورەوە</h2>
        <form id="loginForm">
            <div class="mb-3">
                <input type="text" class="form-control" id="username" placeholder="ناوی بەکارهێنەر" required>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="password" placeholder="پاسوۆرد" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">چوونەژوورەوە</button>
        </form>
        <p class="text-danger mt-3" id="errorMessage"></p>
    </div>

    <!-- پەڕەی داتای قوتابیان -->
    <div class="students-container" id="studentsContainer" style="display: none;">
        <h2>داتای قوتابیان</h2>
        <ul id="studentsList"></ul>
        <button class="btn btn-secondary w-100" onclick="logout()">چوونەدەرەوە</button>
    </div>

    <script>
        // داتای مامۆستایان و قوتابیان
        const teachers = [
            { id: 1, username: "mamosta1", password: "pass1", students: ["قوتابی ١", "قوتابی ٢"] },
            { id: 2, username: "mamosta2", password: "pass2", students: ["قوتابی ٣", "قوتابی ٤"] },
        ];

        // فۆڕمی لۆگین
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // پشکنینی یوزەر و پاسوۆرد
            const teacher = teachers.find(t => t.username === username && t.password === password);

            if (teacher) {
                // پیشاندانی داتای قوتابیان
                showStudents(teacher.students);
            } else {
                // نیشاندانی هەڵە
                document.getElementById('errorMessage').textContent = "ناوی بەکارهێنەر یان پاسوۆرد هەڵەیە!";
            }
        });

        // پیشاندانی داتای قوتابیان
        function showStudents(students) {
            document.getElementById('loginContainer').style.display = 'none';
            document.getElementById('studentsContainer').style.display = 'block';

            const studentsList = document.getElementById('studentsList');
            studentsList.innerHTML = students.map(student => `<li>${student}</li>`).join('');
        }

        // چوونەدەرەوە
        function logout() {
            document.getElementById('studentsContainer').style.display = 'none';
            document.getElementById('loginContainer').style.display = 'block';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('errorMessage').textContent = '';
        }
    </script>

</body>
</html>
