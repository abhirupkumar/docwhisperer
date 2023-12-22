import React from 'react'

const Page = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-semibold mb-6">Terms and Conditions</h1>

            <div className="prose max-w-none">
                <p>
                    Welcome to <strong>DocWhisperer</strong>. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to abide by these terms.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
                <p>
                    Our services are designed to assist users in extracting and analyzing information from PDF documents. You agree not to misuse our services or engage in any activity that may harm or impair our platform's functionality.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
                <p>
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately if you suspect any unauthorized access or misuse of your account.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
                <p>
                    All content, trademarks, logos, and intellectual property rights displayed on DocWhisperer are the property of our company or respective owners. Unauthorized use or reproduction of any content may violate copyright laws.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
                <p>
                    DocWhisperer shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use our services. Our liability is limited to the extent permitted by law.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
                <p>
                    We reserve the right to modify or update these Terms and Conditions at any time. Changes will be posted on this page, and it is your responsibility to review these terms periodically.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
                <p>
                    These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
                <p>
                    By using DocWhisperer, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our platform.
                </p>
            </div>

        </div>
    )
}

export default Page
