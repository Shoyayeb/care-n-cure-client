import React from 'react';

const Faq = () => {
    return (

        <div className="bg-lightblue py-20 px-4" >
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
                    Frequently-asked questions
                </h2>
                <dl className="w-full md:w-2/3">
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            Can I get medication with a prescription from your pharmacies?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            Yes you can. Present a certified and valid prescription at our pharmacy for dispensing. If using an Insurance Company, do come with a signed and stamped claim form if it’s an outside prescription
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            How can I complain about poor medical care I received in a hospital?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            Bring your complaints first to your doctor and nurses. If you have Medicare, you can file a complaint with your State's Quality Improvement Organization. Talk to your hospital social worker if you believe you are not ready for discharge from the hospital. Billing complaints should be discussed with the hospital or Medicare carrier.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            Where will I stay till I’m admitted to the hospital or after I’m discharged?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            Depending on your budget, we can arrange accommodation for you and your attendant close to the hospital at nearby guest houses, service apartments or luxurious 5-star hotels. Facilities like hospital visits, on-call doctor, cab services and emergency ambulance can also be arranged by us.
                        </p>
                    </dd>
                </dl>
            </div>
        </div>

    );
};

export default Faq;