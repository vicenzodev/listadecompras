import { Router } from 'express';
import listView from './ListView';

const viewer = Router();

viewer.use("/list",listView);

export default viewer;