import { useEffect, useState } from "react";
import placeholder from "../assets/360_F_462636502_9cDAYuyVvBY4qYJlHjW7vqar5HYS8h8x.jpg";
import { ChangeUserFormValues, User } from "../models/user";
import agent from "../api/agent";
import * as Yup from "yup";
import { Formik, ErrorMessage, Field } from "formik";
import { router } from "./Routes";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await agent.Account.current();
      setUser(data);
    };

    fetchData();
  }, [refetch]);

  const regexPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?!.*\s).{6,10}$/;

  const usernameSchema = Yup.object({
    username: Yup.string().required("The new username is required"),
    password: Yup.string().required("Password is required"),
  });

  const passwordSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    newPassword: Yup.string()
      .required("New password is required")
      .matches(
        regexPattern,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values: ChangeUserFormValues) => {
    if (values.newPassword) {
      await agent.Account.password(values);
    } else {
      await agent.Account.username(values);
    }

    setRefetch(true);
  };

  const handleDelete = async (user: User) => {
    console.log("I run");
    await agent.Account.delete(user);
    localStorage.removeItem("token");
    setUser(null);

    router.navigate("/");
  };

  if (user) {
    return (
      <div className="max-w-[1100px] mx-auto mt-6 p-2 mb-32">
        <div className="w-fit mx-auto">
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src={placeholder}
            alt="Rounded avatar"
          ></img>
          <div className="py-2 px-8 bg-accent w-fit rounded-full border-2 border-black mx-auto">
            <h3 className="text-lg font-bold">{user?.username}</h3>
          </div>
        </div>
        <div className="bg-accent p-6 mt-4 rounded-xl w-3/4 lg:w-1/2 mx-auto">
          <h2 className="text-md font-bold mb-4">Change Username</h2>
          <Formik
            initialValues={{ username: "", password: "", error: null }}
            validationSchema={usernameSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <Field
                  type="text"
                  name="username"
                  className="border-b-2 bg-transparent text-black placeholder-black"
                  placeholder="Enter new username"
                />
                <ErrorMessage name="username" component="div" />
                <Field
                  type="password"
                  name="password"
                  className="border-b-2 bg-transparent text-black placeholder-black"
                  placeholder="Enter new password"
                />
                <ErrorMessage name="password" component="div" />
                <button
                  type="submit"
                  className="text-white bg-purple-900 w-28 rounded-full p-2 mx-auto"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="flex flex-col gap-4 bg-accent p-6 mt-4 rounded-xl w-3/4 lg:w-1/2 mx-auto">
          <h2 className="text-md font-bold">Change Password</h2>
          <Formik
            initialValues={{
              password: "",
              newPassword: "",
              confirmPassword: "",
              error: null,
            }}
            validationSchema={passwordSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <Field
                  type="password"
                  name="password"
                  className="border-b-2 bg-transparent text-black placeholder-black"
                  placeholder="Enter password"
                />
                <ErrorMessage name="password" component="div" />
                <Field
                  type="password"
                  name="newPassword"
                  className="border-b-2 bg-transparent text-black placeholder-black"
                  placeholder="Enter new password"
                />
                <ErrorMessage name="newPassword" component="div" />
                <Field
                  type="password"
                  name="confirmPassword"
                  className="border-b-2 bg-transparent text-black placeholder-black"
                  placeholder="Confirm new password"
                />
                <ErrorMessage name="confirmPassword" component="div" />
                <button
                  type="submit"
                  className="text-white bg-purple-900 w-28 rounded-full p-2 mx-auto"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="mx-auto w-fit">
          <button
            className="text-red-500 bg-white w-45 rounded-full px-5 py-2 mt-5"
            onClick={() => handleDelete(user)}
          >
            Delete Account
          </button>
        </div>
      </div>
    );
  } else {
    null;
  }
};

export default Profile;
