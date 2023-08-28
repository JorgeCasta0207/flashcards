// import { useState, useEffect } from "react";
// import agent from "../api/agent";
// import { Flashcard } from "../models/flashcard";
// import { PaginatedResult } from "../models/pagination";
// import { FlashcardSet } from "../models/flashcardSet";
// import { v4 as uuidv4 } from "uuid";

// const Example = () => {
//   const [sets, setSets] = useState<PaginatedResult<FlashcardSet[]>>();
//   const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const flashcardsData = await agent.Flashcards.list(
//         "F7D24C8C-42E7-47C4-937A-3D4E9FED30E9"
//       );

//       setFlashcards(flashcardsData);
//     };

//     fetchData();
//   }, []);

//   console.log(flashcards);

//   useEffect(() => {
//     const fetchData = async () => {
//       const params = new URLSearchParams();
//       params.append("pageNumber", "1");
//       params.append("pageSize", "10");
//       const sets = await agent.Set.list(params);
//       setSets(sets);
//     };

//     fetchData();
//   }, []);

//   console.log(sets);
//   const onClickLogin = async () => {
//     const user = await agent.Account.login({
//       email: "quizlit@test.com",
//       password: "Pa$$w0rd",
//     });
//     localStorage.setItem("token", user.token);
//   };
//   const setId = uuidv4();
//   const onClickSetCreate = () => {
//     const set: FlashcardSet = {
//       id: setId,
//       title: "test frontend set",
//       description: "test",
//       appUserId: "265446eb-e5f2-47a5-b0fe-c8111855315a",
//       flashcards: [
//         {
//           id: uuidv4(),
//           term: "test",
//           definition: "test",
//           pictureUrl: "test",
//           setId: setId,
//         },
//         {
//           id: uuidv4(),
//           term: "testtwo",
//           definition: "testtwo",
//           pictureUrl: "testtwo",
//           setId: setId,
//         },
//       ],
//     };
//     agent.Set.create(set);
//   };

//   const onClickSetEdit = () => {
//     const set: FlashcardSet = {
//       id: "cf10dd7a-9a86-4d68-87e6-df72835e4eb3",
//       title: "test edit frontend",
//       description: "",
//       appUserId: "265446eb-e5f2-47a5-b0fe-c8111855315a",
//     };

//     agent.Set.update(set);
//   };

//   const onClickEditFlashcards = () => {
//     const flashcards: Flashcard[] = [
//       {
//         id: "b8c5e943-af82-4055-b027-acf749df54c4",
//         term: "test edit flashcard",
//         definition: "test",
//         pictureUrl: "test.com",
//         setId: "4301922e-eb35-4812-8262-11379c665e62",
//       },
//       {
//         id: uuidv4(),
//         term: "test add card",
//         definition: "test",
//         pictureUrl: "",
//         setId: "4301922e-eb35-4812-8262-11379c665e62",
//       },
//     ];

//     agent.Flashcards.update(flashcards, "4301922e-eb35-4812-8262-11379c665e62");
//   };
//   return (
//     <div className="flex gap-2 m-4">
//       <button className="bg-white p-2 rounded-md" onClick={onClickLogin}>
//         Login
//       </button>
//       <button className="bg-white p-2 rounded-md" onClick={onClickSetCreate}>
//         Create test set
//       </button>
//       <button className="bg-white p-2 rounded-md" onClick={onClickSetEdit}>
//         Edit test set
//       </button>
//       <button
//         className="bg-white p-2 rounded-md"
//         onClick={onClickEditFlashcards}
//       >
//         Edit flashcards
//       </button>
//     </div>
//   );
// };

// export default Example;

// import { Formik, FieldArray, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FlashcardSet } from "../models/flashcardSet";
// import { Flashcard } from "../models/flashcard";
// import { v4 as uuid } from "uuid";
// import agent from "../api/agent";
// import { router } from "./Routes";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// interface FormikProps {
//   push: (value: Flashcard) => void;
//   remove: (index: number) => void;
// }

// const Edit = () => {
//   const [exisitingSet, setExisitingSet] = useState<FlashcardSet>();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       if (id) {
//         const data = await agent.Set.detail(id);
//         setExisitingSet(data);
//       }
//     };

//     fetchData();
//   }, [id]);

//   let initialValues: FlashcardSet = {
//     id: "",
//     title: "",
//     description: "",
//     flashcards: [],
//   };

//   if (exisitingSet) {
//     initialValues = {
//       id: exisitingSet.id,
//       title: exisitingSet.title,
//       description: exisitingSet.description,
//       flashcards: exisitingSet.flashcards,
//     };
//   }

//   const validationSchema = Yup.object({
//     title: Yup.string().required("Title is required"),
//     flashcards: Yup.array().of(
//       Yup.object().shape({
//         term: Yup.string().required("Term is required"),
//         definition: Yup.string().required("Definition is required"),
//         pictureUrl: Yup.string(),
//         setId: Yup.string().required("Set Id is required"),
//       })
//     ),
//   });

//   const handleSubmit = async (values: FlashcardSet) => {
//     const set = {
//       id: values.id,
//       title: values.title,
//       description: values.description || "",
//       Flashcards: values.flashcards?.map((flashcard: Flashcard) => ({
//         id: flashcard.id,
//         term: flashcard.term,
//         definition: flashcard.definition,
//         pictureUrl: flashcard.pictureUrl || "",
//         setId: flashcard.setId,
//       })),
//     };

//     await agent.Set.update(set);

//     router.navigate("/Library");
//   };

//   return (
//     <div>
//       <h1>Create</h1>
//       {exisitingSet ? (
//         <Formik
//           initialValues={initialValues}
//           enableReinitialize
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ values }) => (
//             <Form>
//               <div>
//                 <label className="block" htmlFor="title">
//                   Title
//                 </label>
//                 <Field type="text" id="title" name="title" />
//                 <ErrorMessage name="title" component="div" />
//               </div>

//               <div>
//                 <label className="block" htmlFor="description">
//                   Description
//                 </label>
//                 <Field type="text" id="description" name="description" />
//                 <ErrorMessage name="description" component="div" />
//               </div>

//               <div>
//                 <h2>Flashcards</h2>
//                 <FieldArray
//                   name="flashcards"
//                   render={({ push, remove }: FormikProps) => (
//                     <div>
//                       {values.flashcards?.map((flashcard: Flashcard, index) => (
//                         <div key={flashcard.id} className="">
//                           <h3>Flashcard {index + 1}</h3>
//                           <div>
//                             <label
//                               className="block"
//                               htmlFor={`flashcards[${index}].term`}
//                             >
//                               Term
//                             </label>
//                             <Field
//                               type="text"
//                               name={`flashcards[${index}].term`}
//                             />
//                             <ErrorMessage
//                               name={`flashcards[${index}].term`}
//                               component="div"
//                             />
//                           </div>

//                           <div>
//                             <label
//                               className="block"
//                               htmlFor={`flashcards[${index}].definition`}
//                             >
//                               Definition
//                             </label>
//                             <Field
//                               type="text"
//                               name={`flashcards[${index}].definition`}
//                             />
//                             <ErrorMessage
//                               name={`flashcards[${index}].definition`}
//                               component="div"
//                             />
//                           </div>

//                           <div>
//                             <label
//                               className="block"
//                               htmlFor={`flashcards[${index}].pictureUrl`}
//                             >
//                               Picture URL
//                             </label>
//                             <Field
//                               type="text"
//                               name={`flashcards[${index}].pictureUrl`}
//                             />
//                             <ErrorMessage
//                               name={`flashcards[${index}].pictureUrl`}
//                               component="div"
//                             />
//                           </div>

//                           <div>
//                             <button type="button" onClick={() => remove(index)}>
//                               Remove Flashcard
//                             </button>
//                           </div>
//                         </div>
//                       ))}

//                       <button
//                         type="button"
//                         onClick={() =>
//                           push({
//                             id: uuid(),
//                             term: "",
//                             definition: "",
//                             pictureUrl: "",
//                             setId: exisitingSet.id,
//                           })
//                         }
//                       >
//                         Add Flashcard
//                       </button>
//                     </div>
//                   )}
//                 />
//               </div>

//               <button type="submit">Submit</button>
//             </Form>
//           )}
//         </Formik>
//       ) : null}
//     </div>
//   );
// };

// export default Edit;

// import { Formik, FieldArray, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FlashcardSet } from "../models/flashcardSet";
// import { Flashcard } from "../models/flashcard";
// import { v4 as uuid } from "uuid";
// import agent from "../api/agent";
// import { router } from "./Routes";

// interface FormikProps {
//   push: (value: Flashcard) => void;
//   remove: (index: number) => void;
// }

// const Create = () => {
//   const setId = uuid();

//   const initialValues = {
//     id: setId,
//     title: "",
//     description: "",
//     flashcards: [],
//   };

//   const validationSchema = Yup.object({
//     title: Yup.string().required("Title is required"),
//     flashcards: Yup.array().of(
//       Yup.object().shape({
//         term: Yup.string().required("Term is required"),
//         definition: Yup.string().required("Definition is required"),
//         pictureUrl: Yup.string(),
//         setId: Yup.string().required("Set Id is required"),
//       })
//     ),
//   });

//   const handleSubmit = async (values: FlashcardSet) => {
//     const set = {
//       id: values.id,
//       title: values.title,
//       description: values.description || "",
//       flashcards: values.flashcards?.map((flashcard: Flashcard) => ({
//         id: flashcard.id,
//         term: flashcard.term,
//         definition: flashcard.definition,
//         pictureUrl: flashcard.pictureUrl || "",
//         setId,
//       })),
//     };

//     await agent.Set.create(set);

//     router.navigate("/Library");
//   };

//   return (
//     <div>
//       <h1>Create</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values }) => (
//           <Form>
//             <div>
//               <label className="block" htmlFor="title">
//                 Title
//               </label>
//               <Field type="text" id="title" name="title" />
//               <ErrorMessage name="title" component="div" />
//             </div>

//             <div>
//               <label className="block" htmlFor="description">
//                 Description
//               </label>
//               <Field type="text" id="description" name="description" />
//             </div>

//             <div>
//               <h2>Flashcards</h2>
//               <FieldArray
//                 name="flashcards"
//                 render={({ push, remove }: FormikProps) => (
//                   <div>
//                     {values.flashcards?.map((flashcard: Flashcard, index) => (
//                       <div key={flashcard.id} className="">
//                         <h3>Flashcard {index + 1}</h3>
//                         <div>
//                           <label
//                             className="block"
//                             htmlFor={`flashcards[${index}].term`}
//                           >
//                             Term
//                           </label>
//                           <Field
//                             type="text"
//                             name={`flashcards[${index}].term`}
//                           />
//                           <ErrorMessage
//                             name={`flashcards[${index}].term`}
//                             component="div"
//                           />
//                         </div>

//                         <div>
//                           <label
//                             className="block"
//                             htmlFor={`flashcards[${index}].definition`}
//                           >
//                             Definition
//                           </label>
//                           <Field
//                             type="text"
//                             name={`flashcards[${index}].definition`}
//                           />
//                           <ErrorMessage
//                             name={`flashcards[${index}].definition`}
//                             component="div"
//                           />
//                         </div>

//                         <div>
//                           <label
//                             className="block"
//                             htmlFor={`flashcards[${index}].pictureUrl`}
//                           >
//                             Picture URL
//                           </label>
//                           <Field
//                             type="text"
//                             name={`flashcards[${index}].pictureUrl`}
//                           />
//                           <ErrorMessage
//                             name={`flashcards[${index}].pictureUrl`}
//                             component="div"
//                           />
//                         </div>

//                         <div>
//                           <button type="button" onClick={() => remove(index)}>
//                             Remove Flashcard
//                           </button>
//                         </div>
//                       </div>
//                     ))}

//                     <button
//                       type="button"
//                       onClick={() =>
//                         push({
//                           id: uuid(),
//                           term: "",
//                           definition: "",
//                           pictureUrl: "",
//                           setId,
//                         })
//                       }
//                     >
//                       Add Flashcard
//                     </button>
//                   </div>
//                 )}
//               />
//             </div>

//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Create;
