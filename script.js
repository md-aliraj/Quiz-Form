function handleLogin(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    // ✅ Check if email already attempted
    const attemptedEmails = JSON.parse(localStorage.getItem("attemptedEmails")) || [];
    if (attemptedEmails.includes(email)) {
      alert("⚠️ This email has already attempted the exam.");
      return;
    }

    // ✅ Save user data
    localStorage.setItem("userData", JSON.stringify({ name, roll, phone, email, course }));
    window.location.href = "quiz.html";
  }