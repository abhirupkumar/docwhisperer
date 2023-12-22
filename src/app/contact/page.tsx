import React from 'react';

const Page = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

            <div className="prose max-w-none">
                <p>
                    We are here to help! Whether you have questions, feedback, or need assistance, we invite you to reach out to us. Our dedicated team is committed to providing you with timely and helpful support.
                </p>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                            <textarea id="message" name="message" rows={5} className="w-full p-2 border rounded-md" required></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                    </form>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Reach Out Directly</h2>
                    <p>
                        For immediate assistance or inquiries, you can contact us via email or phone:
                    </p>
                    <ul className="list-disc list-inside">
                        <li><strong>Email:</strong> <a href="mailto:support@docwhisperer.com">support@docwhisperer.com</a></li>
                        <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page;