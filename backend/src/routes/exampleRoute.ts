import {Router} from "express";
import {ExampleController} from "../controllers/exampleController";

const exampleRoute = Router();

exampleRoute.get('/example', ExampleController.index);

export default exampleRoute;
