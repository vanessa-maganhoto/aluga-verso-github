import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { ReactComponent as Heart } from "../../assets/img/heart.svg";
import { ReactComponent as EyeSvg } from "../../assets/img/eye.svg";
// import EyeSvg from '../../assets/img/eye.svg';

import "./styles.scss";
import logo from "../../assets/fundo.png";
import { useAuth } from "../../providers/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Insira um email válido")
    .required("Digite o e-mail"),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Digite a senha"),
});

export function Login() {
  const { onAuth, token } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  if (token) navigate(-1);

  const handleSubmit = async (values) => {
    await onAuth(values);
    navigate(-1);
  };

  return (
    <div className="login-container">
      <img
        src={logo}
        alt="Login Page"
        className="login-container__login__logo"
      />

      <div className="login-container__container-login">
        <div className="login-container__wraper-login">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => (
              <Form className="login-container__login-form">
                <h1 className="login-container__login-form-title">
                  Fazer login
                </h1>
                <div className="login-container__wrapper-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="span"
                  className="login-container__error-message"
                />
                <div className="login-container__wrapper-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Senha"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span
                    onClick={() => setShowPassword((password) => !password)}
                  >
                    {" "}
                    <EyeSvg />{" "}
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="span"
                  className="login-container__error-message"
                />
                <div className="login-container__wrapper-form-additionals">
                  <div className="wraper__input-checkbox">
                    <input type="checkbox" name="remember" />
                    Lembrar-me
                  </div>
                  <a
                    href="https://google.com"
                    className="login-container__recovery-login"
                  >
                    Esqueci minha senha
                  </a>
                </div>

                <button
                  type="submit"
                  className="login-container__login-form-btn"
                  disabled={isSubmitting}
                >
                  Entrar
                </button>

                <div className="login-container__text-bottom">
                  <div className="login-container__text-center">
                    <span>Ainda não tem conta? </span>
                    <a className="login-container__register" href="/register">
                      {" "}
                      Registre-se{" "}
                    </a>
                  </div>

                  <div>
                    <span className="login-container__text-heart">
                      É de graça <Heart />{" "}
                    </span>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
