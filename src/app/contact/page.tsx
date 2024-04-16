import React from 'react';
import ClientComponent from '@/components/variants/ClientComponent';
import { Experiment, Variant } from "testnix/server";

const Page = async () => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto py-10 min-h-screen">
            <Experiment experimentId="checkout-1" experimentHash="4AEF7740-4938-4EC0-8530-B5AF6ACE58D1YZ5LTZ8NAI">
                <Variant variantId="checkout-1-1">
                    <h1 className="text-3xl font-semibold mb-6">Contact Us A</h1>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Reach Out Directly</h2>
                        <p>
                            For assistance or inquiries, you can contact us via our email:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>Email:</strong> <a href="abhirupkumar2003@gmail.com">abhirupkumar2003@gmail.com</a></li>
                        </ul>
                    </div>
                    <ClientComponent variantId="checkout-1-1" experimentId="checkout-1" hash="4AEF7740-4938-4EC0-8530-B5AF6ACE58D1YZ5LTZ8NAI" />
                </Variant>
                <Variant variantId="checkout-1-2">
                    <h1 className="text-3xl font-semibold mb-6">Contact Us B</h1>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Reach Out Directly</h2>
                        <p>
                            For assistance or inquiries, you can contact us via our email:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>Email:</strong> <a href="abhirupkumar2003@gmail.com">abhirupkumar2003@gmail.com</a></li>
                        </ul>
                    </div>
                    <ClientComponent variantId="checkout-1-2" experimentId="checkout-1" hash="4AEF7740-4938-4EC0-8530-B5AF6ACE58D1YZ5LTZ8NAI" />
                </Variant>
                <Variant variantId="checkout-1-3">
                    <h1 className="text-3xl font-semibold mb-6">Contact Us C</h1>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Reach Out Directly</h2>
                        <p>
                            For assistance or inquiries, you can contact us via our email:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>Email:</strong> <a href="abhirupkumar2003@gmail.com">abhirupkumar2003@gmail.com</a></li>
                        </ul>
                    </div>
                    <ClientComponent variantId="checkout-1-3" experimentId="checkout-1" hash="4AEF7740-4938-4EC0-8530-B5AF6ACE58D1YZ5LTZ8NAI" />
                </Variant>
            </Experiment>
        </div>
    )
}

export default Page;