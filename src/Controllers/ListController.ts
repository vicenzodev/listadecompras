import { createListModel } from "../Models/ListModel";
import { Request, Response } from "express";

export const createList = async (req:Request, res:Response) => {
    try {
        const { name } = req.body;

        if (!name) {
            res.status(400).json({ message: "O campo 'name' é obrigatório." });
        }

        const create = await createListModel(name);
        res.status(201).json(create);
    } catch (error) {
        res.status(500).json({ message: "Erro interno ao criar a lista." });
    }
};