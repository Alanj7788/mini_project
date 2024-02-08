import React from 'react';
import SectionTitle from '../../components/SectionTitle';

function Contact() {
    const user = {
        "name": "Alan Jose",
        "email": "alanjoseaj987@gmail.com",
        "gender": "Male",
        "mobile": "9497204867",
        "country": "India"
    };

    return (
        <div>
            <SectionTitle title="Say Hello" />
            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-white">{'{'}</p>

                    {Object.keys(user).map((key) => (
                        <p className="ml-5 ">
                            <span className="text-[#a8dfe0] ">{key}</span> :{" "}
                            <span className="text-[#a8dfe0]">"{user[key]}"</span>,
                        </p>
                    ))}

                    <p className="text-white ">{'}'}</p>
                </div>
                <div className="h-[400px]">
                <lottie-player src="https://lottie.host/219c0a00-4ea9-4c4a-90d0-3664a93ff2d8/4rbrXvqTpx.json" background="##ffffff" speed="1"  loop  autoplay direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div>
    );
}

export default Contact;
