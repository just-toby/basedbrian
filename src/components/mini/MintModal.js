import React, { useState } from 'react';

const MintModal = ({didMint}) => {
    const [isOpen, setIsOpen] = useState(true);  // State to track modal visibility
    console.log("Should be open: " + isOpen)

    const handleClose = () => {
        setIsOpen(false);  // Close the modal when the "Close" button is clicked
    }

    if (!isOpen) {
        return null;  // Don't render the modal if it's not open
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Congratulations!</h3>
                    </div>

                    <div className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                            <p>Thank you for minting! You are now based. 🔥</p>
                            <p>Welcome to the elite.</p>
                            <p>Based.</p>
                        </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50">
                        <button
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MintModal;
