import * as yup from "yup";

let userSchema = yup.object({
  name: yup.string().required("Por favor, ingrese un nombre"),
  phone: yup.string().required("Por favor, ingrese un número de teléfono").matches(/^\d+$/, "Ingrese un número de teléfono válido"),
  email: yup.string().email("Ingrese un email válido").required("Por favor, ingrese un email"),
  confirmEmail: yup.string().oneOf([yup.ref("email"), null], "Los correos electrónicos deben coincidir").required("Por favor, confirme su email"),
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
