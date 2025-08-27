// -------------------- SIGN UP PAGE --------------------
if (window.location.pathname.includes("sign_up.html")) {
	const form = document.getElementById("usercreation")

	if (form) {
		form.addEventListener("submit", function (e) {
			e.preventDefault()

			// Get values from form inputs
			const username = document.getElementById("usercreate").value.trim()
			const email = document.getElementById("enteremail").value.trim()
			const password = document.getElementById("passwordcreate").value.trim()

			if (!username || !email || !password) {
				alert("Fill out all fields")
				return
			}

			// Get existing users or start fresh
			const users = JSON.parse(localStorage.getItem("users")) || []

			// Check for duplicate username
			const exists = users.some((user) => user.username === username)
			if (exists) {
				alert("Username already taken")
				return
			}

			// Add new user
			users.push({ username, email, password })
			localStorage.setItem("users", JSON.stringify(users))

			// Optional: store current user
			localStorage.setItem("loggedInUser", JSON.stringify({ username, email }))

			// Redirect to welcome page
			window.location.href = "welcome.html"
		})
	}
}

// -------------------- WELCOME PAGE --------------------
document.addEventListener("DOMContentLoaded", function () {
	if (window.location.pathname.includes("welcome.html")) {
		const user = JSON.parse(localStorage.getItem("loggedInUser"))
		const welcome = document.getElementById("welcomeMessage")
		if (user && welcome) {
			welcome.textContent = `Welcome, ${user.username} to Cats Project!`
		}
	}
})

// -------------------- LOGIN PAGE --------------------
if (window.location.pathname.includes("login.html")) {
	const loginBtn = document.getElementById("login")
	const usernameInput = document.getElementById("loginuser") // <-- make sure login.html uses this ID
	const passwordInput = document.getElementById("loginpassword") // <-- and this one

	if (loginBtn) {
		loginBtn.addEventListener("click", (e) => {
			e.preventDefault()

			const username = usernameInput.value.trim()
			const password = passwordInput.value.trim()

			if (!username || !password) {
				alert("Enter both username and password")
				return
			}

			// Get existing users
			const users = JSON.parse(localStorage.getItem("users")) || []

			// Check credentials
			const validUser = users.find(
				(user) => user.username === username && user.password === password
			)
			if (!validUser) {
				alert("Invalid username or password")
				return
			}

			// Save logged in user
			localStorage.setItem("loggedInUser", JSON.stringify(validUser))

			// Redirect to welcome
			window.location.href = "welcome.html"
		})
	}
}
