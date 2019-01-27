const router = require("express").Router();
const userController = require("../controllers/user-controller");

router.get("/", userController.homepage);
router.get("/signup", userController.userSignupGet);
router.post("/signup", userController.userSignupPost);
router.get("/login", userController.userLoginGet);
router.post("/login", userController.userLoginPost);
router.get("/edit", userController.userUpdateGet);
router.patch("/edit", userController.userUpdatePost);
router.get("/profile", userController.userProfile);
router.get("/dashboard", userController.userDashboard);
router.get("/about", userController.aboutPage);
router.get("/faq", userController.faqPage);
router.get("/contact-us", userController.contactUs);
router.get("/logout", userController.userLogout);

module.exports = router;
