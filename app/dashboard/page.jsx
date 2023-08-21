import Dashboard from "@/components/Dashboard";
import Dashboard_Icon from '@/assets/images/dashboard_icon.png'
import Transaction_Icon from '@/assets/images/transaction_icon.png';
import Schedule_Icon from '@/assets/images/schedule_icon.png'
import User_Icon from '@/assets/images/user_icon.png'
import Setting_Icon from '@/assets/images/setting_icon.png'
import { RxHamburgerMenu } from 'react-icons/rx'

import Image from "next/image";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row font-montserrat">
        <div className="bg-black h-14 z-50 text-white fixed bottom-0 left-0 right-0 max-w-screen md:static md:min-h-[700px] lg:min-h-[760px] md:rounded-2xl md:my-6 lg:my-auto md:ml-4 md:w-20 lg:w-1/5 flex flex-col justify-between">
          <div>
            <h2 className="sm:hidden lg:flex justify-center pt-12 text-2xl font-bold">
              Board.
            </h2>
            <nav className="pt-4 md:pt-12 ">
              <ul className="mx-4 flex justify-between items-center md:flex-col gap-8 lg:items-start lg:mx-8">
                <li className="flex items-center gap-6">
                  <Image src={Dashboard_Icon} alt="dashboard" />
                  <span className="sm:hidden lg:flex">Dashboard</span>
                </li>
                <li className="flex items-center gap-6">
                <Image src={Transaction_Icon} alt="transactions" />
                  <span className="sm:hidden lg:flex">Transactions</span>
                </li>
                <li className="flex items-center gap-6">
                <Image src={Schedule_Icon} alt="schedules" />
                  <span className="sm:hidden lg:flex">Schedules</span>
                </li>
                <li className="flex items-center gap-6">
                <Image src={User_Icon} alt="users" />
                  <span className="sm:hidden lg:flex">Users</span>
                </li>
                <li className="flex items-center gap-6">
                <Image src={Setting_Icon} alt="settings" />
                  <span className="sm:hidden lg:flex">Settings</span>
                </li>
                <li className="flex items-center gap-6 lg:hidden">
                <RxHamburgerMenu size={25} />
                  <span className="sm:hidden lg:flex">Dashboard</span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sm:hidden lg:flex">
            <ul className="my-16 mx-8 space-y-2">
              <li className="text-[14px]">Help</li>
              <li className="text-[14px]">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="w-full max-h-screen overflow-y-auto">
          <Dashboard />
          </div>
      </div>
    </>
  );
}
