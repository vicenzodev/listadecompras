import { createItemModel } from "../Models/ItemModel";
import { Request, Response } from "express";

export const createItem = async (req:Request, res:Response) => {
    try {
        const { name,check,listId } = req.body;

        if (!name) {
            res.status(400).json({ message: "O campo 'name' é obrigatório." });
        }

        const create = await createItemModel(name,check,listId);
        res.status(201).json(create);
    } catch (error) {
        res.status(500).json({ message: "Erro interno ao criar a lista." });
    }
};