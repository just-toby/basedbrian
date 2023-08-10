import { useState } from "react";

function BaseChainModal({isOpen}) {
    const [reminder,setReminder] = useState(isOpen);
    if (!reminder) {
        return null;
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">BASED Alert</h3>
                    </div>

                    <div className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                            <p>You're not truly BASED unless you're on the BASE chain. Make the switch to get BASED.</p>
                        </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50">
                        <button
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={() => setReminder(false)}
                        >
                            Understood
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaseChainModal;
