import React, { useState, useEffect } from "react";
import "../../styles/signin.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { login } from "../../features/auth/authSlide";
import Notification from "../../components/Notification";
// validation input text
let schema = yup.object().shape({
  password: yup.string().required("Password must be 3 or more characters"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values)
      dispatch(login(values));
    },
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const authState = useSelector((state) => state.auth);

  const { user, isError, isSuccess, isLoading, message } = authState;

  useEffect(() => {
    if (isSuccess) {
      // window.location.reload('/admin');
      navigate("admin");
    } else {
      if (message?.status === 404) {
        setNotify({
          isOpen: true,
          message: message.title,
          type: "error",
        });
        navigate("");
      }
    }
  }, [user, isError, isSuccess, isLoading, message, navigate]);
  return (
    <>
      <main className="main">
        <div className="container py-5 py-sm-7">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="card card-lg mb-5">
                <div className="card-body">
                  <form>
                    <div className="text-center">
                      <div className="mb-5">
                        <h1 className="display-4">Đăng Nhập</h1>
                        <br />
                        <span>Xin chào Admin !!!</span>
                      </div>
                    </div>
                    {/* EMAIL INPUT */}
                    <div className="js-form-message form-group">
                      <label
                        className="input-label text-base"
                        htmlFor="signinSrEmail"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="signinSrEmail"
                        tabIndex="1"
                        placeholder="email@address.com"
                        aria-label="email@address.com"
                        required
                        data-msg="Please enter a valid email address."
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        value={formik.values.email}
                      />
                    </div>

                    {/* PASSWORD INPUT */}
                    <div className="js-form-message form-group">
                      <label
                        className="input-label email"
                        htmlFor="signinSrPassword"
                        tabIndex={"0"}
                      >
                        <span className="d-flex justify-content-between align-items-center text-base">
                          Mật khẩu
                        </span>
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type={passwordShown ? "text" : "password"}
                          className="js-toggle-password form-control form-control-lg"
                          name="password"
                          id="signinSrPassword"
                          placeholder="8+ characters required"
                          aria-label="8+ characters required"
                          required
                          onChange={formik.handleChange("password")}
                          onBlur={formik.handleBlur("password")}
                          value={formik.values.password}
                          // data-msg="Your password is invalid. Please try again."
                        />
                        <div
                          id="changePassTarget"
                          className="input-group-append"
                        >
                          <div
                            className="input-group-text"
                            onClick={togglePassword}
                          >
                            {passwordShown === false ? (
                              // <Icon fontSize="small">
                              <VisibilityIcon fontSize="small" />
                            ) : (
                              // </Icon>
                              <VisibilityOffIcon fontSize="small" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn--primary"
                      onClick={formik.handleSubmit}
                      // onClick={navigate('/admin')}
                    >
                      <h1 className="text-2xl text-white">Đăng nhập</h1>
                    </button>
                  </form>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default SignIn;
