import React, { useState } from 'react';

function CreateCard({ id, onDrag, onDrop }) {
    // State variables to manage editing and content for both sections
    const [isEditingA, setIsEditingA] = useState(true);
    const [isEditingB, setIsEditingB] = useState(true);
    const [contentA, setContentA] = useState('');
    const [contentB, setContentB] = useState('');

    // Function to toggle editing for section A(Question)
    const handleButtonClickA = () => {
        setIsEditingA(!isEditingA);
    };

    // Function to toggle editing for section B(Answer)
    const handleButtonClickB = () => {
        setIsEditingB(!isEditingB);
    };
    // Function to handle the delete button click
    const handleDeleteClick = () => {
        if (onDelete) {
            onDelete(id);
        }
    };
    // Function to set up drag-and-drop functionality when the card is being dragged
    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', id.toString());
        if (onDrag) {
            onDrag(id);
        }
    };
    // Function to prevent the default drag-over behavior
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    // Function to handle the drop event when a dragged item is dropped onto the card
    const handleDrop = (event) => {
        event.preventDefault();
        const draggedCardId = parseInt(event.dataTransfer.getData('text/plain'));
        if (draggedCardId !== id && onDrop) {
            onDrop(draggedCardId, id);
        }
    };
    // Function to update the content of section A(Question)
    const handleContentChangeA = (event) => {
        setContentA(event.target.value);
    };
    // Function to update the content of section B(Answer)
    const handleContentChangeB = (event) => {
        setContentB(event.target.value);
    };

    // JSX representing the card
    return (
        <div className={`editCard m-10`}
            draggable="true"
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}>

            {/* Top bar with delete and drag handle buttons */}
            <div className="topEditBar">
                {/* Delete button */}
                <div className='topBarButton'>
                    <button type="button" onClick={handleDeleteClick}>
                        <svg
                            width="28px"
                            height="28px"
                            viewBox="0 0 512 512"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
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
                                <title>trashcan</title>{" "}
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    {" "}
                                    <g
                                        id="Shape"
                                        fill="#000000"
                                        transform="translate(64.000000, 42.666667)"
                                    >
                                        {" "}
                                        <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z">
                                            {" "}
                                        </path>{" "}
                                    </g>{" "}
                                </g>{" "}
                            </g>
                        </svg>
                    </button>
                </div>
                {/* Drag handle */}
                <div className='topBarButton'>
                    <span className="dragHandle" draggable="true" onDragStart={handleDragStart}>
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
                            <line x1="12" y1="4" x2="12" y2="20" />
                            <line x1="18" y1="10" x2="12" y2="4" />
                            <line x1="6" y1="10" x2="12" y2="4" />
                            <line x1="18" y1="14" x2="12" y2="20" />
                            <line x1="6" y1="14" x2="12" y2="20" />
                        </svg>
                    </span>
                </div>

            </div>

            {/* Content section */}
            <div className="content flex ">
                <div className='pt-4 pl-4'>
                    {/* Add Image Button */}
                    <button>
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM19.7121 4.28794C20.096 4.67187 20.096 5.29434 19.7121 5.67826L19.6542 5.7361C19.5984 5.7919 19.5205 5.81718 19.4428 5.80324C19.3939 5.79447 19.3225 5.77822 19.2372 5.74864C19.0668 5.68949 18.843 5.5778 18.6326 5.36742C18.4222 5.15704 18.3105 4.93324 18.2514 4.76276C18.2218 4.67751 18.2055 4.60607 18.1968 4.55721C18.1828 4.47953 18.2081 4.40158 18.2639 4.34578L18.3217 4.28794C18.7057 3.90402 19.3281 3.90402 19.7121 4.28794ZM17.35 8.0403C17.2057 8.18459 17.1336 8.25673 17.054 8.31878C16.9602 8.39197 16.8587 8.45472 16.7512 8.50591C16.6602 8.54932 16.5634 8.58158 16.3698 8.64611L15.349 8.98639C15.2537 9.01814 15.1487 8.99335 15.0777 8.92234C15.0067 8.85134 14.9819 8.74631 15.0136 8.65104L15.3539 7.63021C15.4184 7.43662 15.4507 7.33983 15.4941 7.24876C15.5453 7.14133 15.608 7.0398 15.6812 6.94596C15.7433 6.86642 15.8154 6.79427 15.9597 6.65L17.7585 4.85116C17.802 4.80767 17.8769 4.82757 17.8971 4.88568C17.9707 5.09801 18.109 5.37421 18.3674 5.63258C18.6258 5.89095 18.902 6.02926 19.1143 6.10292C19.1724 6.12308 19.1923 6.19799 19.1488 6.24148L17.35 8.0403Z" fill="#000000"></path> </g></svg>
                    </button>
                </div>
                <div className="flex-grow">
                    {/* Editable content area for section A(Question) */}
                    <div
                        className={`flex-grow bg-white p-2 m-2 ${isEditingA ? 'editable' : ''}`}
                        style={{ backgroundColor: isEditingA ? '#F1FAFE5C' : 'inherit', direction: 'ltr' }}
                        contentEditable={isEditingA}
                        inputMode="text"
                        onInput={handleContentChangeA}
                    >
                        {contentA} {/* Display contentA here */}
                    </div>
                    <button className=' m-2 p-2' type="button" onClick={handleButtonClickA}>
                        {isEditingA ? (
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

                        ) : (
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
                                        fill="#231F20"
                                        d="M62.828,12.482L51.514,1.168c-1.562-1.562-4.093-1.562-5.657,0.001c0,0-44.646,44.646-45.255,45.255 C-0.006,47.031,0,47.996,0,47.996l0.001,13.999c0,1.105,0.896,2,1.999,2.001h4.99c0.003,0,9.01,0,9.01,0s0.963,0.008,1.572-0.602 s45.256-45.257,45.256-45.257C64.392,16.575,64.392,14.046,62.828,12.482z M37.356,12.497l3.535,3.536L6.95,49.976l-3.536-3.536 L37.356,12.497z M8.364,51.39l33.941-33.942l4.243,4.243L12.606,55.632L8.364,51.39z M3.001,61.995c-0.553,0-1.001-0.446-1-0.999 v-1.583l2.582,2.582H3.001z M7.411,61.996l-5.41-5.41l0.001-8.73l14.141,14.141H7.411z M17.557,60.582l-3.536-3.536l33.942-33.94 l3.535,3.535L17.557,60.582z M52.912,25.227L38.771,11.083l2.828-2.828l14.143,14.143L52.912,25.227z M61.414,16.725l-4.259,4.259 L43.013,6.841l4.258-4.257c0.782-0.782,2.049-0.782,2.829-0.002l11.314,11.314C62.195,14.678,62.194,15.943,61.414,16.725z"
                                    ></path>{" "}
                                </g>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="flex-grow">
                    {/* Editable content area for section B (Answer)*/}
                    <div
                        className={`flex-grow bg-white p-2 m-2 ${isEditingB ? 'editable' : ''}`}
                        style={{ backgroundColor: isEditingB ? '#F1FAFE5C' : 'inherit', direction: 'ltr' }}
                        contentEditable={isEditingB}
                        inputMode="text"
                        onInput={handleContentChangeB}
                    >
                        {contentB} {/* Display contentB here */}
                    </div>
                    <button className=' m-2 p-2' type="button" onClick={handleButtonClickB}>
                        {isEditingB ? (
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

                        ) : (
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
                                        fill="#231F20"
                                        d="M62.828,12.482L51.514,1.168c-1.562-1.562-4.093-1.562-5.657,0.001c0,0-44.646,44.646-45.255,45.255 C-0.006,47.031,0,47.996,0,47.996l0.001,13.999c0,1.105,0.896,2,1.999,2.001h4.99c0.003,0,9.01,0,9.01,0s0.963,0.008,1.572-0.602 s45.256-45.257,45.256-45.257C64.392,16.575,64.392,14.046,62.828,12.482z M37.356,12.497l3.535,3.536L6.95,49.976l-3.536-3.536 L37.356,12.497z M8.364,51.39l33.941-33.942l4.243,4.243L12.606,55.632L8.364,51.39z M3.001,61.995c-0.553,0-1.001-0.446-1-0.999 v-1.583l2.582,2.582H3.001z M7.411,61.996l-5.41-5.41l0.001-8.73l14.141,14.141H7.411z M17.557,60.582l-3.536-3.536l33.942-33.94 l3.535,3.535L17.557,60.582z M52.912,25.227L38.771,11.083l2.828-2.828l14.143,14.143L52.912,25.227z M61.414,16.725l-4.259,4.259 L43.013,6.841l4.258-4.257c0.782-0.782,2.049-0.782,2.829-0.002l11.314,11.314C62.195,14.678,62.194,15.943,61.414,16.725z"
                                    ></path>{" "}
                                </g>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateCard;
