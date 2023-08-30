/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import agent from "../api/agent";
import { FlashcardSet } from "../models/flashcardSet";
import { v4 as uuid } from "uuid";
import { Formik, Field, ErrorMessage, FieldArray, Form } from "formik";
import { useParams } from "react-router-dom";
import { Flashcard } from "../models/flashcard";
import { router } from "./Routes";
import * as Yup from "yup";
import { User } from "../models/user";

interface FormikProps {
  push: (value: Flashcard) => void;
  remove: (index: number) => void;
}

const Study = () => {
  const { id } = useParams();
  const [set, setSet] = useState<FlashcardSet>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const setData = await agent.Set.detail(id);
        setSet(setData);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {set &&
        set.flashcards &&
        set?.flashcards.map((flashcard) => (
          <>
            <p>{flashcard.term}</p>
            <img src={flashcard.pictureUrl} />
          </>
        ))}
    </>
  );
};

const Create = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedFlashcard, setSelectedFlashcard] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await agent.Account.current();
      setUser(data);
    };

    fetchData();
  }, []);

  const setId = uuid();

  const initialValues = {
    id: setId,
    title: "",
    description: "",
    flashcards: [],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    flashcards: Yup.array().of(
      Yup.object().shape({
        term: Yup.string().required("Term is required"),
        definition: Yup.string().required("Definition is required"),
        pictureUrl: Yup.string(),
        setId: Yup.string().required("Set Id is required"),
      })
    ),
  });

  const handleSubmit = async (values: FlashcardSet) => {
    const set = {
      id: values.id,
      title: values.title,
      description: values.description || "",
      flashcards: values.flashcards?.map((flashcard: Flashcard) => ({
        id: flashcard.id,
        term: flashcard.term,
        definition: flashcard.definition,
        pictureUrl: flashcard.pictureUrl || "",
        setId,
      })),
    };

    await agent.Set.create(set);

    router.navigate("/Library");
  };

  return (
    <div>
      <h1>Create</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div>
              <label className="block" htmlFor="title">
                Title
              </label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>

            <div>
              <label className="block" htmlFor="description">
                Description
              </label>
              <Field type="text" id="description" name="description" />
            </div>

            <div>
              <h2>Flashcards</h2>
              <FieldArray
                name="flashcards"
                render={({ push, remove }: FormikProps) => (
                  <div>
                    {values.flashcards?.map((flashcard: Flashcard, index) => (
                      <div key={flashcard.id} className="">
                        <h3>Flashcard {index + 1}</h3>
                        <div>
                          <label
                            className="block"
                            htmlFor={`flashcards[${index}].term`}
                          >
                            Term
                          </label>
                          <Field
                            type="text"
                            name={`flashcards[${index}].term`}
                          />
                          <ErrorMessage
                            name={`flashcards[${index}].term`}
                            component="div"
                          />
                        </div>

                        <div>
                          <label
                            className="block"
                            htmlFor={`flashcards[${index}].definition`}
                          >
                            Definition
                          </label>
                          <Field
                            type="text"
                            name={`flashcards[${index}].definition`}
                          />
                          <ErrorMessage
                            name={`flashcards[${index}].definition`}
                            component="div"
                          />
                        </div>

                        <div>
                          <p
                            className="cursor-pointer"
                            onClick={() => {
                              setSelectedFlashcard(index);
                            }}
                          >
                            Add Picture
                          </p>
                          {selectedFlashcard === index && (
                            <>
                              <label
                                className="block"
                                htmlFor={`flashcards[${index}].pictureUrl`}
                              >
                                Picture URL
                              </label>
                              <Field
                                type="text"
                                name={`flashcards[${index}].pictureUrl`}
                              />
                              <ErrorMessage
                                name={`flashcards[${index}].pictureUrl`}
                                component="div"
                              />
                              {user &&
                                user.pictures.map((picture, pictureIndex) => (
                                  <img
                                    key={pictureIndex}
                                    src={picture.url}
                                    className="w-1/4 h-1/4"
                                    onClick={() => {
                                      setFieldValue(
                                        `flashcards[${index}].pictureUrl`,
                                        picture.url
                                      );
                                    }}
                                  />
                                ))}
                            </>
                          )}
                        </div>

                        <div>
                          <button type="button" onClick={() => remove(index)}>
                            Remove Flashcard
                          </button>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() =>
                        push({
                          id: uuid(),
                          term: "",
                          definition: "",
                          pictureUrl: "",
                          setId,
                        })
                      }
                    >
                      Add Flashcard
                    </button>
                  </div>
                )}
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const Edit = () => {
  const [exisitingSet, setExisitingSet] = useState<FlashcardSet>();
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [selectedFlashcard, setSelectedFlashcard] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await agent.Set.detail(id);
        const userData = await agent.Account.current();
        setExisitingSet(data);
        setUser(userData);
      }
    };

    fetchData();
  }, [id]);

  let initialValues: FlashcardSet = {
    id: "",
    title: "",
    description: "",
    flashcards: [],
  };

  if (exisitingSet) {
    initialValues = {
      id: exisitingSet.id,
      title: exisitingSet.title,
      description: exisitingSet.description,
      flashcards: exisitingSet.flashcards,
    };
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    flashcards: Yup.array().of(
      Yup.object().shape({
        term: Yup.string().required("Term is required"),
        definition: Yup.string().required("Definition is required"),
        pictureUrl: Yup.string(),
        setId: Yup.string().required("Set Id is required"),
      })
    ),
  });

  const handleSubmit = async (values: FlashcardSet) => {
    const set = {
      id: values.id,
      title: values.title,
      description: values.description || "",
      Flashcards: values.flashcards?.map((flashcard: Flashcard) => ({
        id: flashcard.id,
        term: flashcard.term,
        definition: flashcard.definition,
        pictureUrl: flashcard.pictureUrl || "",
        setId: flashcard.setId,
      })),
    };

    await agent.Set.update(set);

    router.navigate("/Library");
  };

  return (
    <div>
      <h1>Create</h1>
      {exisitingSet ? (
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div>
                <label className="block" htmlFor="title">
                  Title
                </label>
                <Field type="text" id="title" name="title" />
                <ErrorMessage name="title" component="div" />
              </div>

              <div>
                <label className="block" htmlFor="description">
                  Description
                </label>
                <Field type="text" id="description" name="description" />
                <ErrorMessage name="description" component="div" />
              </div>

              <div>
                <h2>Flashcards</h2>
                <FieldArray
                  name="flashcards"
                  render={({ push, remove }: FormikProps) => (
                    <div>
                      {values.flashcards?.map((flashcard: Flashcard, index) => (
                        <div key={flashcard.id} className="">
                          <h3>Flashcard {index + 1}</h3>
                          <div>
                            <label
                              className="block"
                              htmlFor={`flashcards[${index}].term`}
                            >
                              Term
                            </label>
                            <Field
                              type="text"
                              name={`flashcards[${index}].term`}
                            />
                            <ErrorMessage
                              name={`flashcards[${index}].term`}
                              component="div"
                            />
                          </div>

                          <div>
                            <label
                              className="block"
                              htmlFor={`flashcards[${index}].definition`}
                            >
                              Definition
                            </label>
                            <Field
                              type="text"
                              name={`flashcards[${index}].definition`}
                            />
                            <ErrorMessage
                              name={`flashcards[${index}].definition`}
                              component="div"
                            />
                          </div>

                          <div>
                            <p
                              className="cursor-pointer"
                              onClick={() => {
                                setSelectedFlashcard(index);
                              }}
                            >
                              Add Picture
                            </p>
                            {selectedFlashcard === index && (
                              <>
                                <label
                                  className="block"
                                  htmlFor={`flashcards[${index}].pictureUrl`}
                                >
                                  Picture URL
                                </label>
                                <Field
                                  type="text"
                                  name={`flashcards[${index}].pictureUrl`}
                                />
                                <ErrorMessage
                                  name={`flashcards[${index}].pictureUrl`}
                                  component="div"
                                />
                                {user &&
                                  user.pictures.map((picture, pictureIndex) => (
                                    <img
                                      key={pictureIndex}
                                      src={picture.url}
                                      className="w-1/4 h-1/4"
                                      onClick={() => {
                                        setFieldValue(
                                          `flashcards[${index}].pictureUrl`,
                                          picture.url
                                        );
                                      }}
                                    />
                                  ))}
                              </>
                            )}
                          </div>

                          <div>
                            <button type="button" onClick={() => remove(index)}>
                              Remove Flashcard
                            </button>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() =>
                          push({
                            id: uuid(),
                            term: "",
                            definition: "",
                            pictureUrl: "",
                            setId: exisitingSet.id,
                          })
                        }
                      >
                        Add Flashcard
                      </button>
                    </div>
                  )}
                />
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      ) : null}
    </div>
  );
};
