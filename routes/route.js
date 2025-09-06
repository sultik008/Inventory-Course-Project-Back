import { Router } from "express"
import {createExampleCustomID,createElements,createInventory,deleteInventory,deleteUser,editInventory,getAccessibleInventories,getCategory,getInventories,getInventoryByID,getInventoryProps,getOwnInventories,getUsers,logIn,logInByGoogle,regByGoogle,revokeAdmin,setAdmin,helloworld,getInventory,registrationByEmail,saveCustomId} from "../controllers/controller.js"
import passport from "passport"
import checkToken from "../middlewares/token.js"

const router = Router()

router.post("/regbygoogle", regByGoogle)
router.post("/loginbygoogle", logInByGoogle)
router.post("/login", logIn)
router.post("/inventory/create", checkToken , createInventory)
router.post("/elements" ,checkToken , createElements)
router.post("/examplecustomid" , createExampleCustomID)
router.post("/customid/save" , checkToken , saveCustomId)
router.get("/auth/github", passport.authenticate("github", { scope: "user:email"}))
router.get("/users", getUsers)
router.patch("/setadmin" , checkToken , setAdmin)
router.patch("/revokeadmin" , checkToken , revokeAdmin)
router.delete("/users/delete" , checkToken , deleteUser)
router.put("/inventory/edit" , checkToken , editInventory)
router.get("/category" , getCategory)
router.get("/inventory/common", getInventories)
router.delete("/inventory/delete", checkToken , deleteInventory)
router.get("/auth/github/callback",  passport.authenticate("github", { successRedirect: "https://inventory-course-projec-front.onrender.com/", failureMessage: true  ,  failureRedirect: "https://inventory-course-projec-front.onrender.com/registration" ,}) , (req , res) => {try {
    const {user , token} = req
    res.redirect(`https://localhost:3000/?token=${token}`);
    console.log(user , token );
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
router.post("/registrationbyemail" , registrationByEmail)
router.get("/fields/:inventoryid" , getInventoryProps)
router.get("/items/:inventoryid" , getInventoryByID)
router.get("/inventory/:id", getAccessibleInventories)
router.get("/inventory/:inventoryid" , getInventory)
router.get("/owninventory/:id" , getOwnInventories)
router.get("/helloworld" , helloworld)

export default router
