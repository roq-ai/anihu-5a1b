import * as yup from 'yup';

export const usageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  duration: yup.number().integer().required(),
  distance: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  vehicle_id: yup.string().nullable().required(),
});
