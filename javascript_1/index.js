if (window.location.pathname.includes("sign.up.html")) {
  const form = document.getElementById("usercreation");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("usercreate").value;
      const email = document.getElementById("enteremail").value;
      const password = document.getElementById("passwordcreate").value;

      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);

      //document.getElementById("message").textContent = `Account created for ${username}!`;
      window.location.href = "welcome.html";

    });
  }
}

