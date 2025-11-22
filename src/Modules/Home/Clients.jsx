import CLIENTS from "../../data/CLIENTS.json";

export default function Clients() {
    return (
        <section id="clients" className="carousel w-full flex p-10 overflow-x-auto items-center">
            <div className="flex loop-group shrink-0 items-center">
                {CLIENTS.map((client, index) => (
                    <figure key={client.id} className="p-4 flex-shrink-0 items-center">
                        <img
                            src={`/home/${client.logo}`}
                            alt={client.name}
                            className="pr-10 border-r-[1px] border-gray-700"
                        />
                    </figure>
                ))}
            </div>
            <div className="flex loop-group shrink-0 items-center">
                {CLIENTS.map((client, index) => (
                    <figure key={client.id} className="p-4 flex-shrink-0 items-center">
                        <img
                            src={`/home/${client.logo}`}
                            alt={client.name}
                            className="pr-10 border-r-[1px] border-gray-700"
                        />
                    </figure>
                ))}
            </div>
            
        </section>

    )
}