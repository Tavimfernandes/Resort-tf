export function Header() {
    return (
        <div>
            <header>

                <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="" className="flex items-center">
                            <img src="Logo.svg" className="h-16 mr-2 sm:h-20" alt="Logo Resort" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">TF Resorts</span>
                        </a>
                        <div className="flex items-center md:order-2">
                            <button type="button" className="flex mr-2 ml-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Abrir menu de usuário</span>
                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="foto de perfil" />
                            </button>
                            {/* Dropdown menu */}
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-white">Lara Cristina</span>
                                    <span className="block text-sm font-medium  truncate text-gray-400">laracristina@outlook.com</span>
                                </div>
                                <ul className="py-1" aria-labelledby="user-menu-button">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-200 hover:text-white">Minhas viagens</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-200 hover:text-white">Meu perfil</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-200 hover:text-white">Configurações</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-200 hover:text-white">Sair</a>
                                    </li>
                                </ul>
                            </div>
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Menu principal</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">

                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 hover:bg-transparent md:p-0 text-gray-400 hover:text-white md:hover:bg-transparent border-gray-700">Explore</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 hover:bg-transparent md:p-0 text-gray-400 md:hover:text-white hover:text-white md:hover:bg-transparent border-gray-700">Viagens</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 hover:bg-transparent md:p-0 text-gray-400 md:hover:text-white hover:text-white md:hover:bg-transparent border-gray-700">Sobre nós</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
        </div>
    );
}

export default Header;