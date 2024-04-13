import Image from "next/image"

interface catagoriesprop {
    dataCatagory: string,
    setCatagory: (dataCatagory: string) => void
}

const Catagories: React.FC<catagoriesprop> = ({dataCatagory, setCatagory}) => {
    return (
        <>
            <div className="flex flex-row gap-3 my-4">
                <div 
                    onClick={() => setCatagory("Beach")}
                    className={`cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 ${dataCatagory == 'Beach' ? 'border-gray-800': 'border-white' }  hover:border-gray-200`}>
                    <Image 
                    src={'/icons8-beach-80.png'}
                    alt='Beach Image'
                    width={35}
                    height={35}
                    />
                    <span>Beach</span>
                </div>
                <div 
                    onClick={() => setCatagory("Cottage")}
                    className={`cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 ${dataCatagory == 'Cottage' ? 'border-gray-800': 'border-white' }  hover:border-gray-200`}>
                    <Image 
                    src={'/icons8-beach-80.png'}
                    alt='Beach Image'
                    width={35}
                    height={35}
                    />
                    <span>Cottage</span>
                </div>
                <div 
                    onClick={() => setCatagory("Villas")}
                    className={`cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 ${dataCatagory == 'Villas' ? 'border-gray-800': 'border-white' }  hover:border-gray-200`}>
                    <Image 
                    src={'/icons8-beach-80.png'}
                    alt='Beach Image'
                    width={35}
                    height={35}
                    />
                    <span>Villas</span>
                </div>
                <div 
                    onClick={() => setCatagory("Tiny")}
                    className={`cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-100 border-b-4 ${dataCatagory == 'Tiny' ? 'border-gray-800': 'border-white' }  hover:border-gray-200`}>
                    <Image 
                    src={'/icons8-beach-80.png'}
                    alt='Beach Image'
                    width={35}
                    height={35}
                    />
                    <span>Tiny</span>
                </div>
                
            </div>
        </>
    )
}

export default Catagories;