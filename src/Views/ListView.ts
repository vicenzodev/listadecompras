import { Router } from "express";
import { createList } from "../Controllers/ListController";

const viewer = Router();

viewer.post("/create",createList);

export default viewer;