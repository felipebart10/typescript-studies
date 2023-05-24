import { Request, Response } from "express";
import { validation } from "../../shared/middlewares";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { ICity } from "../../database/models";

interface IBodyProps extends Omit<ICity, "id"> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    name: yup.string().required().min(2),
  }))
}));


export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.CREATED).json(1);
};