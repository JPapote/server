import {Response, Request} from 'express'
import { Client, FixedPhone, Phone } from '../models/clients'


export const getClient = async (req: Request, res: Response) => {
    const allClients = await Client.findAll({
        include:[{model:Phone}]
    });
    
    res.json(allClients)
} 
export const reparation = async (req: Request, res: Response) => {

    const allRepations = await FixedPhone.findAll({
        include:[{model:Phone}]
    });
    
    
    res.json(allRepations)
} 

