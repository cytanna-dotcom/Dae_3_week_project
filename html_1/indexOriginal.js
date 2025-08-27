if (window.location.pathname.includes("sign_up.html")) {
	const form = document.getElementById("usercreation")

	if (form) {
		form.addEventListener("submit", function (e) {
			e.preventDefault()

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

			window.location.href = "welcome.html"
		})
	}
}
document.addEventListener("DOMContentLoaded", function () {
	if (window.location.pathname.includes("welcome.html")) {
		const user = JSON.parse(localStorage.getItem("loggedInUser"))
		const welcome = document.getElementById("welcomeMessage")
		if (user && welcome) {
			welcome.textContent = `Welcome, ${user.username} to Cats Project!}`
		}
	}
})

// DOM elements
const loginBtn = document.getElementById("login")
const usernameInput = document.getElementById("input1")
const passwordInput = document.getElementById("input2")
const email = document.getElementById("input3").value.trim()

// Save login data and redirect
loginBtn.addEventListener("click", (e) => {
	e.preventDefault()

	const username = usernameInput.value.trim()
	const password = passwordInput.value.trim()

	if (!username || !password) {
		alert("Enter both username and password")
		return
	}

	// Save to localStorage
	localStorage.setItem("loggedInUser", JSON.stringify({ username, password }))

	// Redirect manually
	window.location.href = "welcome.html"
})
