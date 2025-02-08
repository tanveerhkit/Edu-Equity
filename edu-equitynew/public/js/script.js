document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, number, password })
    });

    const result = await response.json();
    alert(result.message);
});

let completedVideos = JSON.parse(localStorage.getItem('completedVideos')) || {};

function markVideoCompleted(category, index) {
    if (!completedVideos[category]) completedVideos[category] = [];
    if (!completedVideos[category].includes(index)) {
        completedVideos[category].push(index);
        localStorage.setItem('completedVideos', JSON.stringify(completedVideos));
        updateProgressBar(category);
    }
}

function updateProgressBar(category) {
    const totalVideos = videos.length;
    const completed = completedVideos[category]?.length || 0;
    const percentage = (completed / totalVideos) * 100;
    document.getElementById('progress').style.width = percentage + "%";

    if (completed === totalVideos) {
        document.getElementById('uploadSection').style.display = "block";
    }
}
function submitContent() {
    const image = document.getElementById('foodImage').files[0];
    const video = document.getElementById('cookingVideo').files[0];

    if (image && video) {
        alert("Content submitted for verification.");
        // Send data to backend for verification
        verifyContent(image, video);
    } else {
        alert("Please upload both image and video.");
    }
}
