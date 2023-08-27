import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  model: yup.string().required(),
  make: yup.string().required(),
  year: yup.number().integer().required(),
  mileage: yup.number().integer().required(),
  color: yup.string().required(),
  license_plate: yup.string().required(),
});
