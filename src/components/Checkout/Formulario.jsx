import React from "react";

const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div>
      <h2 className="form-title">Complete con sus datos para enviar una orden</h2>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre y apellido:</label>
          <input type="text" className="form-control" id="name" name="name" value={datosForm.name} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono:</label>
          <input type="text" className="form-control" id="phone" name="phone" value={datosForm.phone} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={datosForm.email} onChange={handleChangeInput}/>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmEmail" className="form-label">Confirmar Email:</label>
          <input type="email" className="form-control" id="confirmEmail" name="confirmEmail" value={datosForm.confirmEmail} onChange={handleChangeInput}/>
        </div>
        <button type="submit" className="itemcount-submit">Enviar Orden</button>
      </form>
    </div>
  );
};

export default Formulario;
