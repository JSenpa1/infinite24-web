<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workshop Registration</title>
    <link rel="stylesheet" href="{{ asset('css/register_form.css') }}">
</head>

<body>

    <div class="container">
        <h1>Workshop Registration</h1>
        <form action="register.php" method="POST">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required>

            <label for="major">Major / Field of Study</label>
            <input type="text" id="major" name="major" placeholder="Your Major" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+62..." required>

            <button type="submit">Submit</button>
        </form>
    </div>

    <footer>
        <p>&copy; 2023 UMN Tech Festival. All Rights Reserved.</p>
    </footer>

</body>

</html>