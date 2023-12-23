import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto py-10 min-h-screen">
            <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Reach Out Directly</h2>
                <p>
                    For assistance or inquiries, you can contact us via our email:
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Email:</strong> <a href="abhirupkumar2003@gmail.com">abhirupkumar2003@gmail.com</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Page;