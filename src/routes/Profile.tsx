import { useEffect, useState } from "react";
import { ChangeUserFormValues, User } from "../models/user";
import agent from "../api/agent";
import * as Yup from "yup";
import { Formik, ErrorMessage, Field } from "formik";
import { router } from "./Routes";
import { Avatar } from "@mui/material";
import Picture from "../models/picture";
import PictureUploadWidget from "../components/pictureUpload/PictureUploadWidget";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [refetch, setRefetch] = useState(false);
  const [addPictureMode, setAddPictureMode] = useState(false);

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
    await agent.Account.delete(user);
    localStorage.removeItem("token");
    setUser(null);

    router.navigate("/");
  };

  const handlePictureUpload = async (file: Blob) => {
    await agent.Account.uploadPicture(file);
    const data = await agent.Account.current();
    setUser(data);

    setAddPictureMode(false);
  };

  const handleSetProfilePicture = async (pictureId: string) => {
    await agent.Account.setProfilePicture(pictureId);
    const data = await agent.Account.current();
    setUser(data);
  };

  const handleDeletePicture = async (pictureId: string) => {
    await agent.Account.deletePicture(pictureId);
    const data = await agent.Account.current();
    setUser(data);
  };

  if (user) {
    return (
      <div className="max-w-[1100px] mx-auto mt-6 p-2 mb-32">
        <div className="w-fit mx-auto">
          {user.image ? (
            <Avatar
              src={user.image}
              className="cursor-pointer"
              sx={{ width: 250, height: 250 }}
            />
          ) : (
            <Avatar
              sx={{ bgcolor: "#ff5722", width: 150, height: 150 }}
              className="cursor-pointer"
            >
              <p className="text-6xl">{user.username[0].toUpperCase()}</p>
            </Avatar>
          )}
          <div className="py-2 px-8 bg-accent w-fit rounded-full border-2 border-black mx-auto mt-4">
            <h3 className="text-lg font-bold">{user?.username}</h3>
          </div>
        </div>

        <div className="bg-accent p-6 mt-4 rounded-xl w-3/4 lg:w-1/2 mx-auto">
        {user && user.pictures ? (
        <div>
          {addPictureMode ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Add Picture</h2>
                <button
                  className="text-white bg-purple-900 w-28 rounded-md p-1"
                  onClick={() => setAddPictureMode(!addPictureMode)}
                >
                  Cancel
                </button>
              </div>
              <PictureUploadWidget uploadPicture={handlePictureUpload} />
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Your Pictures</h2>
                <button
                  className="text-white bg-purple-900 w-28 rounded-full p-2"
                  onClick={() => setAddPictureMode(!addPictureMode)}
                >
                  Add Picture
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {user.pictures.map((picture: Picture) => (
                  <div key={picture.id}>
                    <img src={picture.url} />
                    <button
                      className="text-white bg-purple-900 w-28 rounded-full p-2"
                      onClick={() => handleSetProfilePicture(picture.id)}
                    >
                      Set Profile Picture
                    </button>
                    <button
                      className="text-white bg-purple-900 w-28 rounded-full p-2"
                      onClick={() => handleDeletePicture(picture.id)}
                    >
                      Delete Picture
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        ) : (
          <p>User has no pictures available</p>
        )}
      </div>

        <div className="bg-accent p-6 mt-4 rounded-xl w-3/4 lg:w-1/2 mx-auto">
          <h2 className="text-xl font-bold mb-4">Change Username</h2>
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
          <h2 className="text-xl font-bold">Change Password</h2>
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
    return null;
  }
};

export default Profile;
