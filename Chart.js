<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fitness App - Progress</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <!-- Chart.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="progress">
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="workouts.html">Workouts</a></li>
      <li><a href="meals.html">Meals</a></li>
      <li><a href="progress.html" class="active">Progress</a></li>
    </ul>
  </nav>

  <section class="hero">
    <h1>Track Your Progress</h1>
    <p>Monitor your workouts, meals, and achievements over time.</p>
  </section>

  <section class="content">
    <h2>Progress Overview</h2>

    <div class="card">
      <img src="assets/images/before.jpg" alt="Before Photo">
      <h3>Before</h3>
      <p>Start of your fitness journey.</p>
    </div>

    <div class="card">
      <img src="assets/images/after.jpg" alt="After Photo">
      <h3>After</h3>
      <p>Your transformation progress.</p>
    </div>

    <div class="card">
      <h3>Workout Stats</h3>
      <canvas id="progressChart"></canvas>
    </div>
  </section>

  <!-- Link to JS file -->
  <script src="assets/js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="assets/js/script.js"></script>
</body>
</html>