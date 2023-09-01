import React, { useState } from 'react';
import CreateCard from '../components/CreateCard'; // Update the path as needed

const Create = () => {
  // State for create card instances, id counter, and deck title
  const [createCardInstances, setCreateCardInstances] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [deckTitle, setDeckTitle] = useState('');
  const [isEditingTitle, setIsEditingTitle] = useState(true); // Initially set to true for editing

  // Function to add a new create card instance
  const handleAddCreateCard = () => {
    const newId = idCounter;
    setIdCounter(prevCounter => prevCounter + 1);

    setCreateCardInstances(prevInstances => [
      ...prevInstances,
      <CreateCard key={newId} id={newId} />
    ]);
  };

  // Function to handle drag and drop reordering of create card instances
  const handleDrop = (sourceId, targetId) => {
    const sourceIndex = createCardInstances.findIndex(card => card.props.id === sourceId);
    const targetIndex = createCardInstances.findIndex(card => card.props.id === targetId);

    const newCreateCardInstances = [...createCardInstances];
    const [draggedCard] = newCreateCardInstances.splice(sourceIndex, 1);
    newCreateCardInstances.splice(targetIndex, 0, draggedCard);

    setCreateCardInstances(newCreateCardInstances);
  };

  // Function to handle changes in the deck title input
  const handleDeckTitleChange = (event) => {
    setDeckTitle(event.target.value);
  };


  // Function to toggle editing of the deck title
  const handleEditTitle = () => {
    setIsEditingTitle(!isEditingTitle);
  };

  return (
    <div className='create-page'>
      <div className="bg-primary">
        {/* Page title */}
        <div className=' text-white text-5xl p-4 m-4'>Create a New Deck</div>

        <div className='m-4'>
          {/* Input for deck title */}
          <div className='flex items-center justify-between'>
            {isEditingTitle ? (
              <div className='relative flex-grow'>
                <input
                  type="text"
                  placeholder="Enter title for your Deck"
                  className="block w-full p-2 pl-10 text-sm placeholder-secondary bg-violet-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-secondary shadow-[inset_0_0px_4px_rgba(0,0,0,0.6)]"
                  value={deckTitle}
                  onChange={handleDeckTitleChange}
                />
                <button
                  className="absolute inset-y-0 right-0 px-2 py-1 text-secondary"
                  onClick={handleEditTitle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>

                </button>
              </div>
            ) : (
              <div className='relative flex-grow'>
                <input
                  type="text"
                  className="block w-full p-2 pl-10 text-sm placeholder-secondary bg-violet-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-secondary shadow-[inset_0_0px_4px_rgba(0,0,0,0.6)]"
                  value={deckTitle}
                  readOnly
                />
                <button
                  className="absolute inset-y-0 right-0 px-2 py-1 text-secondary"
                  onClick={handleEditTitle}
                >
                  <svg
                    version="1.0"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    height="22px"
                    viewBox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#FFFFFF"
                        d="M62.828,12.482L51.514,1.168c-1.562-1.562-4.093-1.562-5.657,0.001c0,0-44.646,44.646-45.255,45.255 C-0.006,47.031,0,47.996,0,47.996l0.001,13.999c0,1.105,0.896,2,1.999,2.001h4.99c0.003,0,9.01,0,9.01,0s0.963,0.008,1.572-0.602 s45.256-45.257,45.256-45.257C64.392,16.575,64.392,14.046,62.828,12.482z M37.356,12.497l3.535,3.536L6.95,49.976l-3.536-3.536 L37.356,12.497z M8.364,51.39l33.941-33.942l4.243,4.243L12.606,55.632L8.364,51.39z M3.001,61.995c-0.553,0-1.001-0.446-1-0.999 v-1.583l2.582,2.582H3.001z M7.411,61.996l-5.41-5.41l0.001-8.73l14.141,14.141H7.411z M17.557,60.582l-3.536-3.536l33.942-33.94 l3.535,3.535L17.557,60.582z M52.912,25.227L38.771,11.083l2.828-2.828l14.143,14.143L52.912,25.227z M61.414,16.725l-4.259,4.259 L43.013,6.841l4.258-4.257c0.782-0.782,2.049-0.782,2.829-0.002l11.314,11.314C62.195,14.678,62.194,15.943,61.414,16.725z"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className=' overflow-y-scroll'>
          {/* Render create card instances */}
          {createCardInstances.map(createCardInstance => (
            <CreateCard key={createCardInstance.props.id} id={createCardInstance.props.id} onDrop={handleDrop} />
          ))}
        </div>

        <div className='editCard'>
          {/* Button to add a new create card instance */}
          <button className="m-6" onClick={handleAddCreateCard}>
            <div className='flex items-center justify-center'>
              <div className='mr-1 p-6'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <div>Add Card</div>
            </div>
          </button>
        </div>
        <div className='flex items-center justify-end'>
          {/* Button to save the deck */}
          <button className='p-2 m-5 bg-violet-700 rounded-2xl text-secondary'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
