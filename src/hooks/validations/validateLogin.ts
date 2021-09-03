import * as Yup from 'yup';
import { MutableRefObject } from 'react';

export default async function validateLogin(
  data,
  formRef: MutableRefObject<any>
) {
  try {
    // Remove all previous errors
    formRef.current.setErrors({});
    const schema = Yup.object().shape({
      email: Yup.string().email('Email inválido').required('campo obrigatório'),
      password: Yup.string().required('campo obrigatório')
    });

    await schema.validate(data, {
      abortEarly: false
    });
    // Validation passed
  } catch (err) {
    const validationErrors = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      formRef.current.setErrors(validationErrors);
    }
    throw err;
  }
}
