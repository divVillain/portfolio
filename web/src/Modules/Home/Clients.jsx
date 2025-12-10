'use client';

import CLIENTS from "../../data/CLIENTS.json";
import { useEffect, useState } from "react";
import { getClientsInfo } from "../../lib/get-clients-info.js";

export default function Clients() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setClients(await getClientsInfo())
        }
        fetchData();
    }, []);

    return (
        <section id="clients" className="carousel w-full flex p-10 overflow-x-auto items-center bg-[#191919] h-[160px]">
            <div className="flex loop-group shrink-0 items-center h-full">
                {clients.map((client, index) => (
                    <figure key={index} className="p-4 flex-shrink-0 items-center h-full">
                        <img
                            src={`http://localhost:1337${client.logo.url}`}
                            alt={client.name}
                            className="pr-10 border-r-[1px] border-gray-700 h-full w-auto"
                        />
                    </figure>
                ))}
            </div>
            <div className="flex loop-group shrink-0 items-center h-full">
                {clients.map((client, index) => (
                    <figure key={index} className="p-4 flex-shrink-0 items-center h-full">
                        <img
                            src={`http://localhost:1337${client.logo.url}`}
                            alt={client.name}
                            className="pr-10 border-r-[1px] border-gray-700 h-full w-auto"
                        />
                    </figure>
                ))}
            </div>
            
        </section>

    )
}