import { NextFunction, Request, Response } from "express"
import * as yup from "yup"

export const validationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string(). required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  telephone: yup.string().required()
})


export const validationFieldsMiddleware = (schema: yup.Schema) => async (req: Request, res: Response, next: NextFunction) => {
 
  try {
      const validated = await validationSchema.validate(req.body)
      req.body = validated
      next()
  } catch (error) {
    if(error instanceof yup.ValidationError){
      return res.status(400).json({message: error.errors.join(', ')})
    }
  }
}





