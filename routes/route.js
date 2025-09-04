import { Router } from "express"
import {createExampleCustomID,createElements,createInventory,deleteInventory,deleteUser,editInventory,getAccessibleInventories,getCategory,getInventories,getInventoryByID,getInventoryProps,getOwnInventories,getUsers,logIn,logInByGoogle,regByGoogle,createCustomID,revokeAdmin,setAdmin,helloworld,getInventory,registrationByEmail,saveCustomId} from "../controllers/controller.js"
import passport from "passport"
import checkToken from "../middlewares/token.js"

const router = Router()

router.post("/regbygoogle", regByGoogle)
router.post("/loginbygoogle", logInByGoogle)
router.post("/login", logIn)
router.post("/inventory", checkToken , createInventory)
router.post("/elements" , createElements)
router.post("/examplecustomid" , createExampleCustomID)
router.post("/customid", createCustomID)
router.post("/customid/save" , saveCustomId)
router.get("/auth/github", passport.authenticate("github", { scope: "user:email"}))
router.get("/users", getUsers)
router.patch("/setadmin" , setAdmin)
router.patch("/revokeadmin" , revokeAdmin)
router.delete("/users/delete" , deleteUser)
router.put("/inventory/edit" , editInventory)
router.get("/category" , getCategory)
router.get("/inventory/common", getInventories)
router.delete("/inventory/delete", deleteInventory)
router.get("/auth/github/callback",  passport.authenticate("github", { failureRedirect: "/login"}) , (req , res) => {try {
    const {user , token} = req;
    res.redirect(`http://localhost:3000/?token=${token}`);
    console.log(user , token);
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
