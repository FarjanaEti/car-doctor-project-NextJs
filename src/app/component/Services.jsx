import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import dbConnect from '@/lib/dbConnect';
export default async function Services() {
    const servicesCollection=await dbConnect("services");
   const data= await servicesCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      {data.map((item) => {
        return (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
            key={item._id}
          >
            <figure className="w-full h-3/4 flex justify-center items-center">
              <Image
                className="w-full h-full object-fit"
                src={item.img}
                width={314}
                height={108}
                alt={item.title}
              />
            </figure>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="font-bold text-xl text-orange-500">
                  Price : ${item.price}
                </p>
              </div>
              <div>
                <Link
                  href={`/services/${item._id}`}
                  className="text-orange-500"
                >
           <FaArrowRight></FaArrowRight>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}
