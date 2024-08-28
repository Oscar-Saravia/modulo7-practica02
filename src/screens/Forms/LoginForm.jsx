import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useForm from "../../hooks/useForm";
import Modal from "../../components/Modal";
import { saveFormData, clearFormData } from "../../reduxs/form/formActions";

const LoginForm = () => {
  const [values, handleChange, resetForm] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para el modal de error de contraseña
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.password === "mod7ReactUSIP") {
      dispatch(saveFormData(values));
    } else {
      setShowErrorModal(true); // Muestra el modal de error si la contraseña es incorrecta
    }
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(clearFormData());
    resetForm(); // Limpia los datos del formulario
    setShowLogoutModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {showLogoutModal && (
        <Modal
          visible={showLogoutModal}
          message="¿Desea cerrar sesión?"
          onClose={() => setShowLogoutModal(false)}
        >
          <button onClick={handleLogout}>Clic para salir</button>
        </Modal>
      )}
      {showErrorModal && (
        <Modal
          visible={showErrorModal}
          message="Incorrect password"
          onClose={() => setShowErrorModal(false)}
        />
      )}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5>username: {form.formData.username}</h5>
          <h5>email: {form.formData.email}</h5>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="button-container">
            <button type="submit">Submit</button>
            <a href="#" onClick={() => setShowLogoutModal(true)}>
              Logout
            </a>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginForm;
