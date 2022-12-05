export function Viagens() {
    return (
        <div className="bg-berlimsm bg-no-repeat bg-scroll pb-5 w-full">
            <div className="text-center">
                <h2 className="text-2xl md:text-5xl font-semibold">Viagens</h2>
                <label>
                    Os melhores destinos, com os melhores preços, você encontra só aqui
                </label>
            </div>

            <div className="flex flex-col items-center justify-center text-dblue-900">
                <div className="bg-berlimsm bg-no-repeat bg-center bg-scroll w-11/12 rounded drop-shadow-lg text-green-200 items-center text-center mt-3 pt-6 md:pt-10">

                    <div>
                        <h1 className="font-h1 text-6xl leading-none">
                            Viaje para
                        </h1>
                        <h2 className="font-h2 text-6xl md:text-8xl leading-none font-semibold mb-4">
                            Berlim
                        </h2>

                        <span>
                            <label className="font-semibold text-lg md:text-2xl">
                                Por Apenas
                            </label>
                            <h3 className="font-h2 text-6xl md:text-8xl leading-none font-semibold mb-10">
                                R$ 899,99
                            </h3>
                        </span>
                    </div>

                </div>
            </div>

        </div>
    )
}