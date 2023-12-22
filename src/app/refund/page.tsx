import React from 'react'

const Page = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-semibold mb-6">Refund and Cancellation Policy</h1>

            <div className="prose max-w-none">
                <p>
                    At <strong>DocWhisperer</strong>, we are committed to providing clarity and transparency regarding our policies. Please review our Refund and Cancellation Policy to understand our practices related to refunds, cancellations, and subscription management.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Policy</h2>
                <p>
                    We do not offer refunds for any subscriptions or services purchased through DocWhisperer. All sales are final, and refunds will not be provided under any circumstances.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Cancellation Policy</h2>
                <p>
                    Users have the option to cancel their subscription at any time. However, please be aware that if a cancellation is initiated after the subscription has commenced, it will be processed to take effect on the date when the subscription would have naturally expired. No refunds or partial refunds will be issued for the remaining subscription period.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Subscription Management with Stripe</h2>
                <p>
                    Subscription billing and management for DocWhisperer are securely handled by <strong>Stripe</strong>, a trusted and reliable payment processing platform. With Stripe, users benefit from:
                </p>
                <ul className="list-disc list-inside">
                    <li>Secure and encrypted payment processing</li>
                    <li>Automated recurring billing for subscription renewals</li>
                    <li>Flexible payment methods and currency options</li>
                    <li>Real-time transaction tracking and invoicing</li>
                    <li>Comprehensive subscription management tools</li>
                </ul>
                <p>
                    For any questions or concerns related to your subscription, billing, or account management, please consult your Stripe dashboard or contact our support team for assistance.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p>
                    Should you have any questions, require further clarification, or encounter issues related to our Refund and Cancellation Policy, please do not hesitate to <a href="/contact">contact us</a>. Our dedicated support team is available to assist you and ensure a positive experience with DocWhisperer.
                </p>
            </div>
        </div>
    )
}

export default Page;