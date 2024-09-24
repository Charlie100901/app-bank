import NavBar from "./NavBar";

function Transfer() {
    return (
        <div>
            <NavBar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center mb-6 w-96">
                    <h2 className="font-bold text-2xl mb-4">Transferir Dinero a otra Cuenta</h2>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">Número de Cuenta</label>
                                <input
                                    type="text"
                                    id="account-number"
                                    name="account-number"
                                    placeholder="Ingresa el número de cuenta"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Monto a Transferir</label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    placeholder="Ingresa el monto"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Transferir
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transfer;
