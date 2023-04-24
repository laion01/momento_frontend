import Image from "next/image";
import { useState } from "react"

export default function UserTable() {
    const [userList, setUserList] = useState(users);

    return (
        <div className="mx-[20px] md:mx-[2.5rem] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px]">
                    Momento Users
                </h2>
                <div className="mb-[120px] bg-white p-[2rem] rounded-[0.5rem]">
                    <table className="text-[0.75rem]">
                        <thead>
                            <tr className="border-b-[2px]">
                                <th className="h-[2.5rem] w-[2.5rem] text-center"> No </th>
                                <th className="h-[2.5rem] w-[200px] text-left px-[3rem]"> Name </th>
                                <th className="h-[2.5rem] w-[200px] text-left"> Email </th>
                                <th className="h-[2.5rem] w-[120px] text-left"> Phone </th>
                                <th className="h-[2.5rem] w-[400px] text-left"> Address </th>
                                <th className="h-[2.5rem] w-[100px] text-left"> Role </th>
                                <th className="h-[2.5rem] w-[120px] text-left"> Status </th>
                                <th className="h-[2.5rem] w-[160px] text-left"> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            { userList.map((user, index) => 
                                <tr key={index} className="border-b-[1px] border-b-[#F5F5F5] hover:bg-[#f5f5f5]">
                                    <td className="h-[2.5rem] w-[2.5rem] text-center"> {user.id} </td>
                                    <td className="h-[2.5rem] w-[200px] flex items-center">
                                        <div className="w-[2rem] h-[2rem] rounded-full bg-[#F5F5F5] mr-[0.5rem] rounded-full overflow-hidden">
                                            <Image alt="" width={32} height={32} src={user.avatar}/>
                                        </div>
                                        <p className="w-fit"> {user.firstName} {user.lastName} </p>
                                    </td>
                                    <td className="h-[2.5rem] w-[200px]"> { user.email } </td>
                                    <td className="h-[2.5rem] w-[120px] "> { user.phone } </td>
                                    <td className="h-[2.5rem] w-[400px] "> { user.address } </td>
                                    <td className="h-[2.5rem] w-[100px]"> 
                                        <button className="h-[2rem] bg-[#F5F5F5] rounded-[0.5rem] w-fit px-[0.5rem]"> { user.role == 1 ? "Admin" : "User"} </button>
                                    </td>
                                    <td className="h-[2.5rem] w-[120px]"> 
                                        <button className="h-[2rem] bg-[#F5F5F5] rounded-[0.5rem] w-fit px-[0.5rem]"> { user.role == 0 ? "unVerified" : user.role == 1 ? "Verified" : "Suspended"} </button>
                                    </td>
                                    <td className="h-[2.5rem] w-[160px]">
                                        <button className="h-[2rem] bg-[#F5F5F5] rounded-[0.5rem] w-fit px-[0.5rem] mr-[0.5rem]"> Edit </button>
                                        <button className="h-[2rem] bg-[#F5F5F5] rounded-[0.5rem] w-fit px-[0.5rem]"> Suspend </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const users = [
    {
        id: 1,
        firstName: "David",
        lastName: "Leiva",
        avatar: '/images/avatars/1.jpg',
        email: "davidleiva4999@gmail.com",
        phone: "+12055885568",
        address: "351 Markham street, Toronto On Canada",
        role: 1,
        status: 1,
    }, {
        id: 2,
        firstName: "James",
        lastName: "Bond",
        avatar: '/images/avatars/1.jpg',
        email: "jamesbond@gmail.com",
        phone: "+12055885568",
        address: "351 Markham street, Toronto On Canada",
        role: 1,
        status: 1,
    }, {
        id: 3,
        firstName: "Max",
        lastName: "Williams",
        avatar: '/images/avatars/1.jpg',
        email: "davidleiva4999@gmail.com",
        phone: "+12055885568",
        address: "351 Markham street, Toronto On Canada",
        role: 1,
        status: 1,
    }, {
        id: 4,
        firstName: "Mark",
        lastName: "Newman",
        avatar: '/images/avatars/1.jpg',
        email: "davidleiva4999@gmail.com",
        phone: "+12055885568",
        address: "351 Markham street, Toronto On Canada",
        role: 1,
        status: 1,
    }, {
        id: 5,
        firstName: "Mark",
        lastName: "Newman",
        avatar: '/images/avatars/1.jpg',
        email: "davidleiva4999@gmail.com",
        phone: "+12055885568",
        address: "351 Markham street, Toronto On Canada",
        role: 1,
        status: 1,
    }, {
        id: 6,
        firstName: "Mark",
        lastName: "Newman",
        avatar: '/images/avatars/1.jpg',
        email: "davidleiva4999@gmail.com",
        phone: "+12055885568",
        address: "351 Markham street, Toronto On Canada",
        role: 1,
        status: 1,
    }
]