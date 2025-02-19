


const Newslatter = () => {
    return (
        <div className="nnn  bg-white p-10 md:grid grid-cols-2 max-w-7xl mx-auto rounded-3xl">
            <div>
                <h2 className="text-2xl font-semibold text-red-500">Newsletter</h2>
                <h1 className="text-4xl font-semibold mt-5 text-red-500">Lets Work Together</h1>
                <h4 className="text-xl font-semibold mt-5">Are you impressed and want a Customs Project? Give a call and email me any time.</h4>
            </div>
            <div className="flex items-center justify-center mt-5">

                <input className=" input " type="email" name="" placeholder="Email" id="" />

                <div>
                <button className="btn btn-warning btn-outline m-3">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Newslatter;