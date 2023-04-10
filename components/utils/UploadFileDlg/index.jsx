import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faClose } from "@fortawesome/free-solid-svg-icons"

export default function UploadFileDlg({ onClose }) {
    return (
        <div className="fixed top-0 left-0 w-[100vw] min-h-[100vh]  z-[50] flex justify-center bg-[#00000080] backdrop-blur-sm">
            <div className="bg-white flex flex-col px-[30px] py-[25px] h-fit mt-[100px] mx-[50px] shadow-md">
                <div className="flex justify-between items-center mb-[10px]">
                    <p className="text-[#996D01] text-[2.5rem] ml-[10px]"> Upload files </p>
                    <button className="text-[#747067] flex justify-center items-center" onClick={() => {onClose(false)}}>
                        <FontAwesomeSvgIcon icon={faClose} width={20} height={20} className="text-[#747067]" />
                    </button>
                </div>
                <div className="border-[1px] border-[#BDBDBD] text-[#996D01] px-[20px] py-[10px]">
                    <p> My Photos </p>
                </div>
                <div className="border-[1px] border-t-[0px] border-[#BDBDBD] p-[32px] flex bg-[#F5F5F5]">
                    <button className="relative bg-white border-[2px] border-[#B6B6B6] border-dashed bg-white aspect-video min-h-[360px] h-fit mr-[1.875rem]">
                        <div className="absolute top-0 w-full h-full flex flex-col flex justify-center items-center">
                            <div className="w-[40px] h-[40px]">
                                <Image alt="" src="/images/upload-gray.svg" width={40} height={40} />
                            </div>
                            <p className="text-[1.5rem] leading-[2.25rem] text-[#BEBEBE]"> or drag a file here </p>
                        </div>
                    </button>
                    <div className="flex flex-col">
                        <button className="flex items-center bg-white px-[2rem] py-[0.75rem] hover:bg-[#996D01] border-[#BDBDBD] border-[2px] hover:border-[996D01] text-black hover:text-white mb-[10px]">
                            <div className="w-[2.5rem] h-[2.5rem] mr-[1.25rem] flex justify-center items-center">
                                
                                <img alt="" width={40} height={40} src="/images/sharing.svg" fill="blue"/>

                            </div>
                            <p className="text-[1.25rem] leading-[2rem]">
                                UPLOAD FROM COMPUTER
                            </p>
                        </button>
                        <button className="flex items-center bg-white px-[2rem] py-[0.75rem] hover:bg-[#996D01] border-[#BDBDBD] border-[2px] hover:border-[996D01] text-black hover:text-white mb-[10px] hover:[&>div>svg>path]:fill-white">
                            <div className="w-[2.5rem] h-[2.5rem] mr-[1.25rem] flex justify-center items-center">
                                
<svg width="40" height="41" viewBox="0 0 40 41" xmlns="http://www.w3.org/2000/svg">
<path d="M39.3815 26.8115H38.2939H37.8674V9.54478C37.8674 7.29847 36.069 5.5 33.8226 5.5H6.17736C3.93105 5.5 2.13258 7.29847 2.13258 9.54478V26.8115H1.79847H1.02364H0V29.918C0 32.1643 1.79847 33.9628 4.04478 33.9628H35.9552C38.2015 33.9628 40 32.1643 40 29.918V26.8115H39.3815ZM3.84574 9.54478C3.84574 8.28657 4.83384 7.29847 6.09206 7.29847H33.8298C35.088 7.29847 36.0761 8.28657 36.0761 9.54478L36.1543 26.8115H3.92394L3.84574 9.54478ZM38.2939 29.918C38.2939 31.1762 37.3058 32.1643 36.0476 32.1643H4.04478C2.78656 32.1643 1.79847 31.1762 1.79847 29.918V29.4204V29.2V28.61H38.2939V29.918Z" fill="red"/>
</svg>

                            </div>
                            <p className="text-[1.25rem] leading-[2rem]">
                                Dropbox
                            </p>
                        </button>
                        <button className="flex items-center bg-white px-[2rem] py-[0.75rem] hover:bg-[#996D01] border-[#BDBDBD] border-[2px] hover:border-[996D01] text-black hover:text-white mb-[10px]">
                            <div className="w-[2.5rem] h-[2.5rem] mr-[1.25rem] flex justify-center items-center">
                                
<svg width="40" height="41" viewBox="0 0 40 41" fill="red" xmlns="http://www.w3.org/2000/svg">
<path d="M39.3815 26.8115H38.2939H37.8674V9.54478C37.8674 7.29847 36.069 5.5 33.8226 5.5H6.17736C3.93105 5.5 2.13258 7.29847 2.13258 9.54478V26.8115H1.79847H1.02364H0V29.918C0 32.1643 1.79847 33.9628 4.04478 33.9628H35.9552C38.2015 33.9628 40 32.1643 40 29.918V26.8115H39.3815ZM3.84574 9.54478C3.84574 8.28657 4.83384 7.29847 6.09206 7.29847H33.8298C35.088 7.29847 36.0761 8.28657 36.0761 9.54478L36.1543 26.8115H3.92394L3.84574 9.54478ZM38.2939 29.918C38.2939 31.1762 37.3058 32.1643 36.0476 32.1643H4.04478C2.78656 32.1643 1.79847 31.1762 1.79847 29.918V29.4204V29.2V28.61H38.2939V29.918Z" fill="white"/>
</svg>

                            </div>
                            <p className="text-[1.25rem] leading-[2rem]">
                                DROP BOX
                            </p>
                        </button>
                        <button className="flex items-center bg-white px-[2rem] py-[0.75rem] hover:bg-[#996D01] border-[#BDBDBD] border-[2px] hover:border-[996D01] text-black hover:text-white mb-[10px]">
                            <div className="w-[2.5rem] h-[2.5rem] mr-[1.25rem] flex justify-center items-center">
                                
<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.3815 26.8115H38.2939H37.8674V9.54478C37.8674 7.29847 36.069 5.5 33.8226 5.5H6.17736C3.93105 5.5 2.13258 7.29847 2.13258 9.54478V26.8115H1.79847H1.02364H0V29.918C0 32.1643 1.79847 33.9628 4.04478 33.9628H35.9552C38.2015 33.9628 40 32.1643 40 29.918V26.8115H39.3815ZM3.84574 9.54478C3.84574 8.28657 4.83384 7.29847 6.09206 7.29847H33.8298C35.088 7.29847 36.0761 8.28657 36.0761 9.54478L36.1543 26.8115H3.92394L3.84574 9.54478ZM38.2939 29.918C38.2939 31.1762 37.3058 32.1643 36.0476 32.1643H4.04478C2.78656 32.1643 1.79847 31.1762 1.79847 29.918V29.4204V29.2V28.61H38.2939V29.918Z" fill="white"/>
</svg>

                            </div>
                            <p className="text-[1.25rem] leading-[2rem]">
                                GOOGLE PHOTOS
                            </p>
                        </button>
                        <button className="flex items-center bg-white px-[2rem] py-[0.75rem] hover:bg-[#996D01] border-[#BDBDBD] border-[2px] hover:border-[996D01] text-black hover:text-white mb-[10px]">
                            <div className="w-[2.5rem] h-[2.5rem] mr-[1.25rem] flex justify-center items-center">
                                
<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.3815 26.8115H38.2939H37.8674V9.54478C37.8674 7.29847 36.069 5.5 33.8226 5.5H6.17736C3.93105 5.5 2.13258 7.29847 2.13258 9.54478V26.8115H1.79847H1.02364H0V29.918C0 32.1643 1.79847 33.9628 4.04478 33.9628H35.9552C38.2015 33.9628 40 32.1643 40 29.918V26.8115H39.3815ZM3.84574 9.54478C3.84574 8.28657 4.83384 7.29847 6.09206 7.29847H33.8298C35.088 7.29847 36.0761 8.28657 36.0761 9.54478L36.1543 26.8115H3.92394L3.84574 9.54478ZM38.2939 29.918C38.2939 31.1762 37.3058 32.1643 36.0476 32.1643H4.04478C2.78656 32.1643 1.79847 31.1762 1.79847 29.918V29.4204V29.2V28.61H38.2939V29.918Z" fill="white"/>
</svg>

                            </div>
                            <p className="text-[1.25rem] leading-[2rem]">
                                FROM RECENT FILES
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}