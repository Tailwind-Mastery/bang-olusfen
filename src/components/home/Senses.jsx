import sensesImg from '../../assets/home/senses.jpg'

export default function Senses() {
    return (
        <div className="flex flex-col gap-5">
            
            <div className="bg-yellow-100/50 py-10 flex flex-col gap-10 font-medium items-center lg:px-10 px-5">
                <h3 className="font-serif tracking-wider lining-nums">
                    SINCE 1925
                </h3>
                <h2 className="text-2xl">
                    Your Senses, Set Free.
                </h2>
                <img src={sensesImg} alt="B&O-senses" className="w-full h-full md:h-[30rem] lg:h-[40rem] object-cover rounded"/>
            </div>

        </div>
    )
}