import React from 'react';
import ImageUpload from './UploadImage';

const AddItemForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Modal container */}
            <div className="w-full max-w-md rounded-lg bg-cyan-700 p-8 shadow-lg border-gray-700 border-opacity-15 border-4 relative z-10">
                <div className='flex justify-between items-center mb-4'>
                    <button
                        className="text-white bg-cyan-900 px-4 py-2 rounded-md hover:bg-cyan-700"
                        onClick={() => console.log('Add Item clicked')} // Add functionality as needed
                    >
                        Add
                    </button>
                    <button
                        className="text-white text-xl hover:text-gray-300"
                        onClick={onClose} // Close the modal
                    >
                        ✕
                    </button>
                </div>

                <h2 className='flex justify-center items-center text-gray-100 text-3xl font-bold mb-4'>
                    Add New Item 
                </h2>
                
                <input
                    type="text"
                    className="p-2 border border-gray-400 rounded-md w-1/3 ml-7 selection: text-lg focus:outline-none"
                    placeholder="Date"
                />
                <input
                    type="text"
                    className="p-2 border border-gray-400 translate-x-2 rounded-md w-1/3 ml-14 focus:outline-none text-lg"
                    placeholder="Time"
                />
                <br />
                <br />
                <textarea
                    id="description"
                    style={{ width: '84%' }}
                    className="flex justify-center translate-x-7 px-2 py-2 pt-1 h-full text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    placeholder="Enter a description for the item"
                />
                <br />
                <h2 className='flex justify-start items-center text-gray-100 text-xl font-bold translate-x-7'>
                    Image Upload and Preview:
                </h2>
                <br />
                <div className='translate-x-7'>
                    <ImageUpload />
                </div>
            </div>
        </div>
    );
}

export default AddItemForm;
