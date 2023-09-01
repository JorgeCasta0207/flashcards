import React, { useState } from 'react';
import EditCard from '../components/EditCard';

const Edit = () => {
  // State for edit card instances and id counter
  const [editCardInstances, setEditCardInstances] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  // Function to add a new edit card instance
  const handleAddEditCard = () => {
    const newId = idCounter;
    setIdCounter(prevCounter => prevCounter + 1);

    setEditCardInstances(prevInstances => [
      ...prevInstances,
      <EditCard key={newId} id={newId} onDelete={handleDeleteEditCard} />
    ]);
  };

  // Function to delete an edit card instance
  const handleDeleteEditCard = (id) => {
    setEditCardInstances(prevInstances =>
      prevInstances.filter(instance => instance.props.id !== id)
    );
  };

  // Function to handle drag and drop reordering of edit card instances
  const handleDrop = (sourceId, targetId) => {
    const sourceIndex = editCardInstances.findIndex(card => card.props.id === sourceId);
    const targetIndex = editCardInstances.findIndex(card => card.props.id === targetId);

    const newEditCardInstances = [...editCardInstances];
    const [draggedCard] = newEditCardInstances.splice(sourceIndex, 1);
    newEditCardInstances.splice(targetIndex, 0, draggedCard);

    setEditCardInstances(newEditCardInstances);
  };

  return (
    <div className='create-page'>
      <div className="bg-primary">
        {/* Page title */}
        <div className=' text-white text-5xl p-4 m-4'>Edit {/*Replace With Date for Decks Name*/} Deck</div>

        <div className='overflow-auto'>
          {/* Render edit card instances */}
          {editCardInstances.map(editCardInstance => (
            <EditCard
              key={editCardInstance.props.id}
              id={editCardInstance.props.id}
              onDelete={handleDeleteEditCard}
              onDrop={handleDrop}
            />
          ))}
        </div>

        <div className='editCard'>
          {/* Button to add a new edit card instance */}
          <button className="m-6" onClick={handleAddEditCard}>
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
          {/* Buttons to save changes */}
          <button className='p-2 m-5 bg-violet-700 rounded-2xl text-secondary'>Save Changes</button>
          <button className='p-2 m-5 bg-violet-700 rounded-2xl text-secondary'>Save Copy</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
