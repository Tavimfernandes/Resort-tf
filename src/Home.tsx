import { Airplane } from 'phosphor-react';
import { Header } from './Header';

export function Home() {
    return (
        <div className="bg-noruegasm bg-no-repeat bg-scroll pb-5 ">
            <Header />
            <div className="flex flex-col items-center justify-center text-dblue-900">
                <div className="bg-noruegasm bg-no-repeat bg-center bg-scroll w-11/12 rounded drop-shadow-lg text-green-200 items-center text-center">

                    <div className="flex justify-end mr-2 mt-2 text-lg">
                        <Airplane className="cursor-pointer" />
                    </div>

                    <div className="pt-3 pb-6 pr-3 pl-3 text-sm md:text-lg">
                        <label>
                            País escandinavo que abrange montanhas, geleiras e fiordes litorâneos profundos. O país famoso pela pesca, pelas trilhas e pelo esqui.
                        </label>
                    </div>

                    <div>
                        <h1 className="font-h1 text-6xl leading-none">
                            Incrível
                        </h1>
                        <h2 className="font-h2 text-6xl md:text-8xl leading-none font-semibold mb-20 md:mb-28">
                            Noruega
                        </h2>
                    </div>
                </div>
            </div>

            <div>
                <h3>Conheça</h3>

            </div>
        </div>
    )
}