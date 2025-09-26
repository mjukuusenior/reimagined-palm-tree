// Progress Page: Weight Tracker
document.addEventListener("DOMContentLoaded", () => {
  const weightForm = document.getElementById("weightForm");
  const weightInput = document.getElementById("weightInput");
  const weightList = document.getElementById("weightList");

  // Load saved weights
  let weights = JSON.parse(localStorage.getItem("weights")) || [];
  renderWeights();

  // Add new weight
  weightForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const weight = weightInput.value.trim();
    if (weight) {
      weights.push({ value: weight, date: new Date().toLocaleDateString() });
      localStorage.setItem("weights", JSON.stringify(weights));
      weightInput.value = "";
      renderWeights();
    }
  });

  // Render weight list
  function renderWeights() {
    if (!weightList) return;
    weightList.innerHTML = "";
    weights.forEach((entry, index) => {
      const li = document.createElement("li");
      li.textContent = `${entry.date}: ${entry.value} kg`;
      
      // delete button
      const delBtn = document.createElement("button");
      delBtn.textContent = "✖";
      delBtn.style.marginLeft = "10px";
      delBtn.onclick = () => {
        weights.splice(index, 1);
        localStorage.setItem("weights", JSON.stringify(weights));
        renderWeights();
      };

      li.appendChild(delBtn);
      weightList.appendChild(li);
    });
  }
});
// Meals Page: Random Meal Suggestion
document.addEventListener("DOMContentLoaded", () => {
  const mealBtn = document.getElementById("mealBtn");
  const mealOutput = document.getElementById("mealOutput");

  if (mealBtn && mealOutput) {
    const meals = [
      "Grilled Chicken with Brown Rice & Steamed Veggies",
      "Omelette with Spinach & Whole Grain Toast",
      "Greek Yogurt with Berries & Nuts",
      "Tuna Salad with Avocado & Tomatoes",
      "Lentil Soup with Whole Wheat Bread",
      "Grilled Salmon with Quinoa & Broccoli",
      "Fruit Smoothie with Banana, Berries, and Oats",
      "Boiled Eggs with Sweet Potato & Green Salad"
    ];

    mealBtn.addEventListener("click", () => {
      const randomMeal = meals[Math.floor(Math.random() * meals.length)];
      mealOutput.textContent = `🍽️ Today’s Meal: ${randomMeal}`;
    });
  }
});
// Workouts Page: Random Workout Suggestion
document.addEventListener("DOMContentLoaded", () => {
  const workoutBtn = document.getElementById("workoutBtn");
  const workoutOutput = document.getElementById("workoutOutput");

  if (workoutBtn && workoutOutput) {
    const workouts = [
      "20 Push-Ups 💪",
      "15 Squats 🏋️",
      "30-Second Plank 🤸",
      "10 Burpees 🔥",
      "20 Jumping Jacks 🕺",
      "15 Lunges (each leg) 🦵",
      "20 Mountain Climbers ⛰️",
      "15 Sit-Ups 🛡️"
    ];

    workoutBtn.addEventListener("click", () => {
      const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
      workoutOutput.textContent = `🏋️ Try this: ${randomWorkout}`;
    });
  }
});
// Only run chart code if progress page is loaded
if (document.getElementById("progressChart")) {
    const ctx = document.getElementById("progressChart").getContext("2d");

    new Chart(ctx, {
        type: "line", // line chart
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
            datasets: [{
                label: "Calories Burned",
                data: [200, 400, 650, 800, 1000], // sample data
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                tension: 0.3, // smooth curve
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#333",
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: "#333" }
                },
                y: {
                    ticks: { color: "#333" },
                    beginAtZero: true
                }
            }
        }
    });
}
// Bar chart for workouts
if (document.getElementById("workoutChart")) {
    const ctx2 = document.getElementById("workoutChart").getContext("2d");

    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
            datasets: [{
                label: "Workouts Completed",
                data: [3, 4, 5, 6, 7], // example values
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#333",
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: "#333" }
                },
                y: {
                    ticks: { color: "#333" },
                    beginAtZero: true
                }
            }
        }
    });
}
// Progress chart (Progress Page)
if (document.getElementById("progressChart")) {
    const ctx = document.getElementById("progressChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
            datasets: [{
                label: "Weight (kg)",
                data: [75, 74, 73.5, 73, 72.5], // Example values
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                tension: 0.3,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: "#4CAF50"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top"
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: "Weight (kg)"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Weeks"
                    }
                }
            }
        }
    });
}