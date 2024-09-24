import NavBar from "./NavBar";

function CheckFounds() {
    return (
        <div>
            <NavBar />
            <section className="text-black bg-gray-100 body-font min-h-screen">
                <h2 className="text-center font-bold text-2xl py-6 uppercase">SALDO</h2>
                <div className="flex justify-center">
                    <div className="bg-white rounded-lg w-4/5 shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4">
                                <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-8">
                                    <div className="flex flex-row items-center">
                                        <div className="bg-green-800 p-3 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 text-right md:text-center">
                                            <h5 className="font-bold uppercase text-gray-600">SALDO DISPONIBLE</h5>
                                            <h3 className="font-bold text-4xl">$3249 <span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                                        <img src="./withdraw.png" alt="" className="w-10" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex flex-row mb-3">
                                            <a href="#" className="mr-4"><h2 className="text-black text-lg font-medium">Retirar</h2></a>
                                            <a href="#" className="mr-4"><h2 className="text-black text-lg font-medium">Depositar</h2></a>
                                        </div>
                                        <div>
                                            <label className="block mb-1">Monto a retirar</label>
                                            <input type="text" className="border rounded-md p-2 w-full" placeholder="Ingrese monto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CheckFounds;
