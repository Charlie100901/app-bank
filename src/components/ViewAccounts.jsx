import NavBar from "./NavBar";

function ViewAccounts() {
    return (
        <div>
            <NavBar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center mb-6 w-full max-w-3xl">
                    <h2 className="font-bold text-2xl mb-4 uppercase">Cuentas</h2>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-black">
                                <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Nombre</th>
                                        <th scope="col" className="px-6 py-3">Nombre de Usuario</th>
                                        <th scope="col" className="px-6 py-3">Número de Cuenta</th>
                                        <th scope="col" className="px-6 py-3">Saldo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Apple MacBook Pro 17"</th>
                                        <td className="px-6 py-4">Silver</td>
                                        <td className="px-6 py-4">Laptop</td>
                                        <td className="px-6 py-4">$2999</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Microsoft Surface Pro</th>
                                        <td className="px-6 py-4">White</td>
                                        <td className="px-6 py-4">Laptop PC</td>
                                        <td className="px-6 py-4">$1999</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Magic Mouse 2</th>
                                        <td className="px-6 py-4">Black</td>
                                        <td className="px-6 py-4">Accessories</td>
                                        <td className="px-6 py-4">$99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAccounts;
