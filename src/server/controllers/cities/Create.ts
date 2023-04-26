import { Request, Response } from "express";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";

interface ICity {
  name: string;
  state: string;
}

interface IFilter {
  filter: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICity>(yup.object().shape({
    name: yup.string().required().min(2),
    state: yup.string().required().length(2)
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().required().min(2)
  })),
}));


export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body);
  return res.send("Create!");
};