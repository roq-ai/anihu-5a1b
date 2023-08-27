import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  review: yup.string().required(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
