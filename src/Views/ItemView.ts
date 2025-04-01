import { Router } from "express";
import { createItem } from "../Controllers/ItemController";

const viewer = Router();

viewer.post("/create",createItem);

export default viewer;