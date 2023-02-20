import { Response, Request } from 'express'
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import { Client, FixedPhone, Phone } from '../models/clients';

export const login = async (req: Request, res: Response) => {

    const { name, password } = req.body

    const findedUser: any = await User.findOne({ where: { name: name } })

    if (!findedUser) {
        return res.status(400).json({
            msg: 'The user: ' + name + ' is not registered'
        })
    }

    const passwordValid = await bcrypt.compare(password, findedUser.password)

    if (!passwordValid) {
        return res.status(400).json({
            msg: 'Password Incorrect'
        })
    }

    const token = jwt.sign({
        username: name,
    }, process.env.SECRET_KEY || 'mariobros123');

    res.json({token});
}

export const registerUser = async (req: Request, res: Response) => {

    const { name, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    User.create({
        name: name,
        password: hashPassword
    })
    res.json({
        msg: "User: " + name + " created successfully",
    })
}


export const newClient = (req: Request, res: Response) => {

    const { name } = req.body;

    Client.create({
        name
    })
    res.json({
        msg: "Client: " + name + " created successfully",
    })
}

export const newPhone = (req: Request, res: Response) => {

    const { namePhone, number, clientId} = req.body

    Phone.create({
        namePhone,
        number,
        clientId
    })

    res.json({
        msg: "Phone: " + namePhone + " add",
    })
}

 export const fixedPhone = (req: Request, res: Response) => {

    const {reparation, phoneId} = req.body
    
    FixedPhone.create({
        reparation,
        phoneId
    })
    res.json({
        msg:  reparation,
    })
}  

export const phoneClient = async (req: Request, res: Response) => {

    const{ id }= req.body
     const allPhoneClient = await Phone.findAll({
         where:{
             clientId: id 
         },
         include:[{model:FixedPhone}]
     })
     
     return res.json(allPhoneClient)
 } 
 