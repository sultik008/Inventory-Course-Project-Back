import { Router } from "express"
import {createExampleCustomID,createElements,createInventory,deleteInventory,deleteUser,editInventory,getAccessibleInventories,getCategory,getInventories,getInventoryByID,getInventoryProps,getOwnInventories,getUsers,logIn,logInByGoogle,regByGoogle,revokeAdmin,setAdmin,helloworld,getInventory,registrationByEmail,saveCustomId, getItem, deleteElement, editItem} from "../controllers/controller.js"
import passport from "passport"
import checkToken from "../middlewares/token.js"

const router = Router()
const urlglobalback = "https://inventory-course-project-back-production.up.railway.app/api"
const urllocalback = "http://localhost:5000/api" 
const urlglobalfront = "https://inventory-course-projec-front.onrender.com"
const urllocalfront = "http://localhost:3000" 

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
router.put("/items/edit" , checkToken , editItem)
router.put("/inventory/edit" , checkToken , editInventory)
router.get("/category" , getCategory)
router.get("/inventory/common", getInventories)
router.delete("/inventory/delete", checkToken , deleteInventory)
router.get("/auth/github/callback",  passport.authenticate("github", { successRedirect: `${urlglobalfront}`, failureMessage: true  ,  failureRedirect: `${urlglobalfront}/registration` ,}) , (req , res) => {try {
  const user = req.user
  const token = user?.token
  console.log(user);
  console.log(token)
  console.log("router 31stroka")
  res.redirect(`${urlglobalfront}/?token=${token}`);
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
router.get("/item/:id" , getItem)
router.delete("/items/delete/:itemid" , checkToken , deleteElement)
router.get("/helloworld" , helloworld)

export default router
