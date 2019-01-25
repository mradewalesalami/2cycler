const router = require("express").Router();
const user_controller = require("../controllers/UserController");

router.get("/", user_controller.homepage);
router.get("/signup", user_controller.user_signup_get);
router.post("/signup", user_controller.user_signup_post);
router.get("/login", user_controller.user_login_get);
router.post("/login", user_controller.user_login_post);
router.get("/edit", user_controller.user_update_get);
router.patch("/edit", user_controller.user_update_post);
router.get("/profile", user_controller.user_profile);
router.get("/dashboard", user_controller.user_dashboard);
router.get("/about", user_controller.about_page);
router.get("/faq", user_controller.faq_page);
router.get("/contact-us", user_controller.contact_us);
router.get("/logout", user_controller.user_logout);

module.exports = router;
