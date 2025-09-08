import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken'
import { PrismaClient } from '../generated/prisma/index.js'
import crypto, { randomInt, randomUUID } from 'crypto'
import dayjs from 'dayjs';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const prisma = new PrismaClient()
const secret = process.env.JWT_SECRET


export function helloworld(req , res) {
    try {
        console.log("hello world")
        res.json("hello world")
    } catch (error) {
        console.log(error)
    }
}


export async function createInventory(req , res) {
    try {
        console.log("Hello world")
        
        const { owner , isPublic , description, image , field1 , field2 , field3, category , name , ownerName } = req.body
        const inventory  = await prisma.inventory.create({data: {owner: owner , public: isPublic , description: description , image: image , field1: field1 , field2: field2 , field3: field3 , category: category , name: name , ownername: ownerName , customid: ``}})
        let usersinvs
        if(isPublic == false){
            usersinvs = await prisma.usersinvs.create({data: { inventoryid: inventory.inventoryid , userid: owner , role: "Owner" }})
        }
        res.json(inventory)
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({error})
    }
}
export async function regByGoogle(req , res) {
    try {
        const {credential} = req.body
        const googleUser = await getUserData(credential);
        const exists = await prisma.users.findFirst({where:{email: googleUser.email}})
        if (exists) {
            res.json({error: {message:"Email has already been registred , try to login"}})
        }
        const user = await prisma.users.create({
           data: {
            email: googleUser.email,
            name: googleUser.name , 
            isadmin: false,
            picture: googleUser.picture,
           }
        })
        const token = generateToken(user)
        res.json({user , token})
        console.log(user , '\n' , token)
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({error})
    }
}
export async function getAccessibleInventories(req , res) {
    try {
        const {id} = req.params
        console.log(id)
        const inventoryPublic = await prisma.inventory.findMany({where: {public: true}})
        const inventoryPrivate = await prisma.usersinvs.findMany({where: {userid: id , OR: [ {role: "editor"} , {role: "owner"}]}} )
        const inventories = [...inventoryPublic , ...inventoryPrivate]
        res.json(inventories)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
export async function getInventory(req , res) {
    try {
        const {inventoryid} = req.params
        const inv = await prisma.inventory.findFirst({where: {inventoryid: inventoryid}} )
        res.json(inv)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
export async function logInByGoogle(req , res) {
    try {
        let {credential } = req.body
        console.log(credential)
        const googleUser = await getUserData(credential);
        const user = await prisma.users.findFirst({where: {email: googleUser.email}})
        if(!user){
            res.json({
                message: "User hasn’t registered yet",
                redirect: "https://inventory-course-projec-front.onrender.com/registration"
            })
        }
        console.log(user)
        const token = generateToken(user)
        res.json({token , user , redirect: "https://inventory-course-projec-front.onrender.com/main" })
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
export async function registrationByEmail(req , res) {
    try {
        const {email , name , password} = req.body
        const exist = await prisma.users.findFirst({where: {email: email}})
        if (!exist) {
            password = crypto.createHash("sha256")
            console.log(password)
            const res = await prisma.users.create({data: {email: email , name: name , password: password}})
            const token = generateToken(res)
            res.json({token})
        }
        else res.json({error: {message: "user has already been registered"}})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
export async function logIn(req , res) {
    try {
        const { email , password } = req.body
        const result = await prisma.users.findFirst({where: email})
        if(!result){
            res.redirect("https://inventory-course-projec-front.onrender.com/registration").json({error: {message: "User is not authorized"}})
        }
        else {
            password = crypto.createHash("sha256")
            if (password == result.password) {
                const token = generateToken(result)
                res.json({result , token})
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
export async function getUsers(req , res) {
    try {
        const result = await prisma.users.findMany({orderBy: {logedin: 'desc'}})
        res.json(result)
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({error})
    }
}
export async function setAdmin(req , res) {
    try {
        const {ids} = req.body
        const result = await prisma.users.updateMany({where: {id: {in: ids}} , data: {isadmin: true}})
        res.json(result)
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({error})
    }
}
export async function revokeAdmin(req , res) {
    try {
        const {ids } = req.body
        const result = await prisma.users.updateMany({where: {id: {in: ids}} , data: {isadmin: false}})
        res.json(result)
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({error})
    }
}
export async function getInventories(req , res) {
    try {
        const result = await prisma.inventory.findMany()
        res.json(result)
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({error})
    }
}
export async function deleteInventory(req , res) {
    try {
        let inventoryid = req.body.ids
        inventoryid
        let inventory
        if (Array.isArray(inventoryid)) {
            inventory = await prisma.inventory.deleteMany({where: {inventoryid: {in: inventoryid}}})
        } 
        else{
            inventory = await prisma.inventory.delete({where: {inventoryid: inventoryid}})
        }
        
        res.json(inventory)
    } catch (error) {
        console.log(error?.message)
        res.status(500).json({error})
    }
}
export async function deleteUser(req , res) {
    try {
        const { ids } = req.body
        console.log(1 , req.body)
        console.log(ids , 1)
        const result = await prisma.users.deleteMany({where: {id: {in: ids}}} )
        console.log(result)
        console.log("Hello world")
        res.json("deleted")
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
async function getUserData(credential) {
    try {
        console.log(process.env.GOOGLE_CLIENT_ID , credential)
    const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID
    });

  const payload = ticket.getPayload();
  return {
    googleId: payload.sub,
    email: payload.email,
    name: payload.name,
    picture: payload.picture
  };
    } catch (error) {
        console.log(error)
        throw error;
    }
}
export function generateToken(user) {
    console.log(user)
    const token = jwt.sign({id: user.id,} , secret , {expiresIn: "1d"})
    console.log(token)
    return token
}
export async function getCategory(req , res) {
    try {
        const category = await prisma.category.findMany()
        res.json(category)
    } catch (error) {
        res.status(500).json({error})
    }
}
export async function getOwnInventories(req , res) {
    try {
        const {id} = req.params
        const inventories = await prisma.usersinvs.findMany({where: {userid: id , role: "Owner"}} )
        res.json(inventories)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
export async function editInventory(req , res) {
    try {
        const {inventoryid,ispublic,description,image,field1,field2,field3,name,category} = req.body
        const edited = await prisma.inventory.update({where: {inventoryid: inventoryid} , data: { public: ispublic , description: description , image: image , field1: field1 , field2: field2 ,field3: field3 , name: name , category: category }})
        console.log(edited)
        res.json(edited)
    } catch (error) {
        console.log(JSON.stringify(error))
        res.status(500).json({error})
    }
}
export async function createElements(req , res) {
    try {
        const { inventoryid , image , fieldvalue1 , fieldvalue2 , fieldvalue3 , createdby , ownername} = req.body
        const inv = await prisma.inventory.findFirst({where: {inventoryid: inventoryid}})
        console.log(inv.customid)
        let customID = generateCustomID(inv.customid)
        JSON.stringify(customID)
        const item = await prisma.items.create({data: {inventoryid: inventoryid , image: image , fieldvalue1: fieldvalue1 , fieldvalue2: fieldvalue2 , fieldvalue3: fieldvalue3 , createdby: createdby , customid: customID , ownername: ownername }, include: {users: {select: {id: true}}}})
        res.json(item)
    } catch (error) {
        console.log(error)
        res.json({error: error})
    }
}
export async function getItem(req ,res) {
    try {
        const {id} = req.params
        console.log(id)
        const item = await prisma.items.findFirst({where: {id: id.trim()}})
        console.log(item)
        res.json(item)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }
}
export async function getInventoryByID(req , res) {
    try {
        const { inventoryid } = req.params
        const inventory = await prisma.items.findMany({where: {inventoryid: inventoryid}})
        res.json(inventory)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
export async function getInventoryProps(req , res) {
    try {
        const {inventoryid} = req.params
        const inventory = await prisma.inventory.findFirst({where: {inventoryid: inventoryid}})
        const fields = [inventory.field1 , inventory.field2 , inventory.field3]
        if (fields.length > 0) {
            res.json(fields)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
function generateExampleCustomID(format , formatValues) {
    const gathered = []
    for (let i = 0; i < format.length; i++) {
        if (format[i] == 'Fixed') {
            gathered.push(`${formatValues[i]}`)
        }
        else if (format[i] == '20-bit Random') {
            const block = crypto.randomBytes(2.5).toString('hex')
            gathered.push(block)
        }
        else if (format[i] == '32-bit Random') {
            const block = crypto.randomBytes(4).toString('hex')
            gathered.push(block)
        }
        else if (format[i] == '6 digits') {
            const block = crypto.randomInt(100000 , 999999)
            gathered.push(block)
        }
        else if (format[i] == '9 digits') {
            const block = crypto.randomInt(100000000 , 999999999)
            gathered.push(block)
        }
        else if (format[i] == 'GUID') {
            const block = randomUUID()
            gathered.push(block)
        }
        else if (format[i] == 'Date/Time') {
            const block = dayjs().format("YYYY-MM-DD HH-mm-ss")
            gathered.push(block)
        }
        else if (format[i] == 'Sequence') {
            const block = randomInt(0,100000)
            gathered.push(block)
        }
    }
    const customID = gathered.join('-')
    return customID
}
function generateCustomID(format) {
    const gathered = []
    format = JSON.parse(format)
    for (let i = 0; i < format.length; i++) {
        if (format[i] == '20-bit Random') {
            const block = crypto.randomBytes(2.5).toString('hex')
            gathered.push(block)
        }
        else if (format[i] == '32-bit Random') {
            const block = crypto.randomBytes(4).toString('hex')
            gathered.push(block)
        }
        else if (format[i] == '6 digits') {
            const block = crypto.randomInt(100000 , 999999)
            gathered.push(block)
        }
        else if (format[i] == '9 digits') {
            const block = crypto.randomInt(100000000 , 999999999)
            gathered.push(block)
        }
        else if (format[i] == 'GUID') {
            const block = randomUUID()
            gathered.push(block)
        }
        else if (format[i] == 'Date/Time') {
            const block = dayjs().format("YYYY-MM-DD HH-mm-ss")
            gathered.push(block)
        }
        else if (format[i] == 'Sequence') {
            const block = randomInt(0,100000)
            gathered.push(block)
        }
        else{
            gathered.push(`${format[i]}`)
        }
    }
    const customID = gathered.join('-')
    console.log(customID)
    return customID
}
export async function createExampleCustomID(req ,res) {
    try {
        const {format , formatValues} = req.body
        const customID = generateExampleCustomID(format  , formatValues)
        console.log(customID)
        res.json(customID)
    } catch (error) {
        res.status(500).json({error})
    }
}
export async function saveCustomId(req , res) {
    try {
        let {inventoryid , format, formatValues} = req.body
        let customID = generateCutomIDFormat(format  , formatValues)
        customID = JSON.stringify(customID)
        console.log(customID)
        const inventory = await prisma.inventory.update({where: {inventoryid: inventoryid} , data: {customid: customID}})
        res.json(inventory)
    } catch (error) {
        console.log(error?.message)
        res.status(500).json(error?.message)
    }
}
function generateCutomIDFormat(format , formatValues) {  

    for (let i = 0; i < format.length; i++) {
        if (format[i] == "Fixed") {
            format[i] = formatValues[0]
        }
    }
    console.log(format)
    return format
}