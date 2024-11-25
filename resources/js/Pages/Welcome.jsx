import AppLayout from "@/Layouts/AppLayout";
import { Radio, RadioGroup } from "@headlessui/react";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome({}) {



    const links = [
        {
            name: "Home",
        },
        {
            name: "Messages",
        },
        {
            name: "Tasks",
        },
        {
            name: "Members",
        },
        {
            name: "Settings",
        },
    ];

    const projects = [
        {
            name: "Mobile App",
        },
        {
            name: "Website",
        },
        {
            name: "Design System",
        },
        {
            name: "Wireframes",
        },
    ];

    const [selected, setSelected] = useState(projects[0])

    return (
        <AppLayout>
            <Head title="Welcome" />
            <div className="w-[30%] border-r-2 flex flex-col">
                <div className="">
                    <div className="flex flex-col pl-5 py-4 space-y-4">
                        {links.map((link) => (
                            <span className="hover:cursor-pointer hover:bg-gray-600 w-fit">{link.name}</span>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <div className=" h-[0.1rem] my-5 bg-gray-200 w-[90%]"/>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="px-5 space-y-4">
                    <span className="text-sm uppercase font-semibold">My Projects</span>
                    <RadioGroup by="name" className={'flex flex-col space-y-5'} value={selected} onChange={setSelected}>
                        {projects.map((project) => (
                            <Radio key={project.name} value={project.name} className={`group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10`}>
                                <span>{project.name}</span>
                            </Radio>
                        ))}
                    </RadioGroup>
                </div>
            </div>
            <div className="w-full"></div>
        </AppLayout>
    );
}
