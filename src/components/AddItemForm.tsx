import React from 'react';

const AddItemForm: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-cardcol p-8 shadow-ld  border-gray-700 border-opacity-15 border-4">
                <div className='flex justify-center items-center'>
                    <h2 className='flex justify-center items-center text-gray-100 text-3xl font-bold'>
                        Add New Item 
                    </h2>
                </div>
                <br/>
                <input
                    type="text"
                    className="p-2 border border-gray-400 rounded-md w-1/3 ml-7 selection: text-lg focus:outline-none"
                    placeholder="Date"
                />
                <input
                    type="text"
                    className="p-2 border border-gray-400 rounded-md w-1/3 ml-14 focus:outline-none text-lg"
                    placeholder="Time"
                />
                <br/>
                <br/>
                <textarea
                    id="description"
                    style={{ width: '81.5%' }}
                    className="flex justify-center translate-x-7 px-2 py-2 pt-1 h-full text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none "
                    placeholder="Enter a description for the item"
                />
            </div>
        </div>
    );
}

export default AddItemForm;