import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarUpdateResponse } from "../../interfaces/car";

export const carUpdateSchema: SchemaOf<ICarUpdateResponse> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    model: yup.string().notRequired(),
    year: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    km: yup.number().notRequired(),
    color: yup.string().notRequired(),
    price: yup.string().notRequired(),
    fipe: yup.number().notRequired(),
    description: yup.string().notRequired(),
    published: yup.boolean().notRequired(),
    cover_image: yup.string().notRequired(),
  });
