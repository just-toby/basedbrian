import React, { useState } from 'react';

const TermsModal = () => {
    const [isChecked, setChecked] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const handleAccept = () => {
        if (isChecked) {
            // Handle the accept logic here, e.g. close the modal
            setIsOpen(false);
        } else {
            alert("Please accept the Terms of Service before proceeding.");
        }
    }

    if (!isOpen) {
        return null;  // Don't render the modal if it's not open
    }

    return (
        <div className="fixed z-9 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Terms of Service</h3>
                    </div>

                    <div className="px-6 py-4">
                        <div className="text-sm text-gray-600 overflow-y-auto h-48">
                            {/* Insert your Terms of Service content here */}
                            <p>1. Introduction

Welcome to our platform! Before you proceed, it's essential to understand and agree to these Terms of Service, which govern your use and access. By using our services, you are confirming that you've read, understood, and accepted these terms.

2. Access and Use of the Platform

(a) You are only permitted to connect to the BASE chain. Any attempts to connect to other chains or platforms are strictly prohibited and may result in immediate termination of your access without notice.

(b) Unauthorized use of the platform or any related services, including but not limited to unauthorized connection to chains other than BASE chain, may be a violation of federal and state laws.

3. Conduct on the Platform

You agree to use our platform responsibly. Specifically, you agree:

(a) Not to harass, threaten, intimidate, impersonate, or attempt to impersonate any person or entity, including but not limited to Brian or any other user of this platform.

(b) Not to post or transmit any content that is invasive of another's privacy, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, hateful, or racially or ethnically objectionable.

(c) That you will be the sole person responsible for any consequences of your actions on our platform.

4. Limitation of Liability

To the fullest extent permitted by applicable law, we will not be liable for any indirect, incidental, special, consequential, punitive, or multiple damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill or other intangible losses, resulting from: (a) your use or inability to use our platform; (b) unauthorized access or use of our platform.</p>
                        </div>

                        <div className="mt-6 flex items-center">
                            <input
                                id="accept_terms"
                                name="accept_terms"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                onChange={() => setChecked(!isChecked)}
                            />
                            <label htmlFor="accept_terms" className="ml-3 block text-sm font-medium text-gray-700">
                                I accept the Terms of Service
                            </label>
                        </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50">
                        <button
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleAccept}
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsModal;
