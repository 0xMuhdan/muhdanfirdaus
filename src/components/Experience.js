"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { fontRobonto } from "./Foonts";
import Image from "next/image";

export function Experience() {
    return (
        <div className='mt-16'>
            <div className="flex flex-col justify-center items-center">
                <div className='md:text-3xl text-xl flex gap-2'>
                    <h1 className={`${fontRobonto.className} font-bold hover:scale-[1.02]`}>Experience</h1> ⚒️
                </div>
                <div className="md:w-52 w-36 md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full"></div>
                <div className="md:w-52 w-36 md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1"></div>
            </div>
            <TracingBeam className="px-8 mt-4">
                <div className="max-w-full antialiased pt-3 pb-8 relative pl-2">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <div className="flex gap-4 md:gap-6">
                                {item.image && (
                                    <div className="flex-shrink-0">
                                        <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.imageAlt}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <h1 className={`${twMerge("text-xl md:text-3xl lg:text-4xl")} ${fontRobonto.className}`}>
                                            {item.title}
                                        </h1>
                                        <p className="text-xs opacity-85">{item.time}</p>
                                    </div>
                                    <h2 className="bg-black text-white rounded-full text-sm md:text-lg lg:text-xl">
                                        {item.badge}
                                    </h2>
                                    <h3 className="text-[10px] opacity-70 mb-2 -mt-1">{item?.status}</h3>
                                    <div className="text-sm prose prose-sm dark:prose-invert flex flex-col gap-2">
                                        {item.description !== undefined && item.description.map((i, idx) => (
                                            <div className="flex items-start gap-2" key={idx}>
                                                <div className="bg-white max-h-[0.35rem] min-h-[0.35rem] mt-[6px] max-w-[0.35rem] min-w-[0.35rem] bg-gradient-to-br from-slate-300 via-slate-400 to-slate-700" />
                                                <p key={idx} className="text-xs">{i}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </div>
    );
}

const dummyContent = [
    {
        title: "Bawaslu Kabupaten Tasikmalaya",
        description: [
            "Menerima dan menindaklanjuti laporan pelanggaran pemilu.",
            "Melakukan kajian awal terhadap laporan untuk menentukan jenis pelanggaran.",
            "Menyusun laporan dan rekomendasi penyelesaian sengketa secara tertulis."
        ],
        time: "2024 - 2025",
        badge: "Staf Panwas Kecamatan Rajapolah Divisi Penanganan Pelanggaran dan Penyelesaian Sengketa",
        image: "/experience/bawaslu.jpg",
        imageAlt: "Bawaslu Kabupaten Tasikmalaya"
    },
];
