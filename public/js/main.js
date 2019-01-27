window.addEventListener("load", () => {
	const navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll(".navbar-burger"),
		0
	);
	if (navbarBurgers.length > 0) {
		navbarBurgers.forEach(el => {
			el.addEventListener("click", () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}

	function signupvalidation() {
		const fn = document.getElementById("firstname");
		const ln = document.getElementById("surname");
		const pw = document.getElementById("password");
		const cpw = document.getElementById("confirmpassword");
		const mn = document.getElementById("phonenum");
		const email = document.getElementById("email");
		const pwerr = document.getElementById("pwerr");
		const cpwerr = document.getElementById("cpwerr");
		const fnerr = document.getElementById("fnerr");
		const lnerr = document.getElementById("lnerr");
		const mnerr = document.getElementById("mnerr");
		const emerr = document.getElementById("emerr");
		if (fn.value === "") {
			fnerr.textContent = "Firstname cannot be empty";
			setInterval(() => {
				fnerr.textContent = "";
			}, 5000);
			fn.focus();
			return false;
		} else if (ln.value === "") {
			lnerr.textContent = "Surname cannot be empty";
			setInterval(() => {
				lnerr.textContent = "";
			}, 5000);
			ln.focus();
			return false;
		} else if (email.value === "") {
			emerr.textContent = "Email cannot be empty";
			setInterval(() => {
				emerr.textContent = "";
			}, 5000);
			email.focus()
			return false;
		} else if (pw.value.length < 8) {
			pwerr.textContent = "Password must be at least 8 characters";
			setInterval(() => {
				pwerr.textContent = "";
			}, 5000);
			pw.focus();
			return false;
		} else if (pw.value !== cpw.value) {
			cpwerr.textContent = "Password doesn't match";
			setInterval(() => {
				cpwerr.textContent = "";
			}, 5000);
			cpw.focus();
			return false;
		} else if (isNaN(mn.value) || mn.value.length !== 11) {
			mnerr.textContent = "Mobile number must be 11 digits";
			setInterval(() => {
				mnerr.textContent = "";
			}, 5000);
			mn.focus();
			return false;
		} else {
			return true;
		}
	}

	const signupbtn = document.getElementById("signupbtn");
	signupbtn.addEventListener("click", e => {
		e.preventDefault();
		if (signupvalidation()) {
			document.getElementById("form_id").submit();
		}
	});
});
