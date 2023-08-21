"use client"

import ChartBar from "./Chart";
import PieChart from "./PieChart";
import Total_Revenues_Icon from '@/assets/images/Vector.png';
import Total_Transaction_Icon from '@/assets/images/total_transactions_icon.png';
import Total_Likes_Icon from '@/assets/images/total_likes.png';
import Total_Users_Icon from '@/assets/images/total_users.png';
import Notification_Icon from "@/assets/images/notification_icon.png"
import Search_Icon from "@/assets/images/Search icon.png"
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Dashboard() {

  const { data: session } = useSession();

  return (
    <div className="w-full px-4 pt-6 md:px-6 lg:pl-10">
      <div className="flex justify-between items-center">
        <h2 className="font-semi-bold tracking-wide">Dashboard</h2>
        <div className="flex gap-4 items-center pr-3">
          <div className="ml-2 relative">
            <input placeholder="Search..." className="rounded-md px-2 h-8" />
            <span className="absolute right-3 top-3">
                <Image src={Search_Icon} alt="search" />
            </span>
          </div>
          <Image src={Notification_Icon} alt="notification" />
          {session?.user && (
            <Image
            src={session?.user.image}
            alt="logo"
            width={37}
            height={37}
            className="rounded-full"
            // onClick={() => setToggle((prev) => !prev)}
          />
          )}
        </div>
      </div>
      <div className="py-4">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mt-4">
          <div className="bg-emerald-100 rounded-2xl lg:max-w-[260px]">
            <div className="flex justify-end pr-4 pt-4">
              <Image src={Total_Revenues_Icon} alt="total revenues" />
            </div>
            <div className="px-4 pb-4">
              <h4 className="text-small">Total Revenues</h4>
              <span>$2,439,985</span>
            </div>
          </div>
          <div className="bg-orange-100 rounded-2xl lg:max-w-[260px]">
            <div className="flex justify-end pr-4 pt-4">
            <Image src={Total_Transaction_Icon} alt="total transactions" />
            </div>
            <div className="px-4 pb-4">
              <h4 className="text-small">Total Transactions</h4>
              <span>1,520</span>
            </div>
          </div>
          <div className="bg-red-100 rounded-2xl lg:max-w-[260px]">
            <div className="flex justify-end pr-4 pt-4">
            <Image src={Total_Likes_Icon} alt="total likes" />
            </div>
            <div className="px-4 pb-4">
              <h4 className="text-small">Total Likes</h4>
              <span>9,721</span>
            </div>
          </div>
          <div className="bg-violet-100 rounded-2xl lg:max-w-[260px]">
            <div className="flex justify-end pr-4 pt-4">
            <Image src={Total_Users_Icon} alt="total users" />
            </div>
            <div className="px-4 pb-4">
              <h4 className="text-small">Total Users</h4>
              <span>821</span>
            </div>
          </div>
        </div>
        <div className="my-8">
          <ChartBar />
        </div>
        <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-8 rounded-xl">
            <div className="flex justify-between mx-8">
              <h3 className="font-medium">Top products</h3>
              <span className="text-gray-500">May - June 2021</span>
            </div>
            <div className="flex justify-around items-center mt-6">
              <PieChart />
              <div className="space-y-2">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <span className="bg-green-600 h-1 w-2 p-1 rounded-full" />
                    <p className="text-small font-medium">Basic Trees</p>
                  </div>
                  <span className="ml-4 text-gray-500">55%</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <span className="bg-yellow-400 h-1 w-2 p-1 rounded-full" />
                    <p className="text-small font-medium">Custom Short Pants</p>
                  </div>
                  <span className="ml-4 text-gray-500">31%</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <span className="bg-red-500 h-1 w-2 p-1 rounded-full" />
                    <p className="text-small font-medium">Super Hoodies</p>
                  </div>
                  <span className="ml-4 text-gray-500">14%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <div className="flex justify-between mx-8">
              <h3 className="font-medium">Today&apos;s schedule</h3>
              <span className="text-gray-500">See All {">"}</span>
            </div>
            <div className="mt-6 mx-8">
              <div className="flex gap-4">
                <span className="bg-green-300 h-18 w-2 p-1" />
                <div>
                  <h4 className="text-gray-700 font-medium">Meeting with suppliers from Kuta Bali</h4>
                  <p className="text-gray-500">14.00-15.00</p>
                  <p className="text-gray-500">at Sunset Road, Kuta, Bali</p>
                </div>
              </div>
            </div>
            <div className="mt-6 mx-8">
              <div className="flex gap-4">
                <span className="bg-violet-400 h-18 w-2 p-1" />
                <div>
                  <h4 className="text-gray-700 font-medium">Check operation at Giga Factory 1</h4>
                  <p className="text-gray-500">18.00-20.00</p>
                  <p className="text-gray-500">at Central Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
