import { useAddress, ThirdwebNftMedia, useContractWrite, useContractRead } from "@thirdweb-dev/react";

import { STAKIING_ADDRESS, NFT_ADDRESS, REWARD_ADDRESS, STAKING_ABI, NFT_ABI } from "configs"

export default function StakingNFTItem({data}) {
    const address = useAddress();

    const onStakeClicked = async () => {

    };

    const onClaimClicked = async () => {

    };

    const onUnStakeClicked = async () => {

    };

    return (
        <div className="flex flex-col m-[12px] bg-[url('/images/nftback.png')] bg-cover pb-[23px]">
            <div className="w-[203px] h-[203px] mt-[25px]">
                {/* <img alt="" src={data.metadata.image} width={200} height={200}/> */}
                <ThirdwebNftMedia metadata={data.metadata} height={200} controls={true}/>
            </div>
            <p className="mx-[21px] mt-[15px] text-white"> {data.metadata.name}</p>
            <div className="mx-[21px] mt-[16px] flex justify-between items-center">
                <p className="text-[#6C6376] text-[12px]"> Earned </p>
                <p className="text-[#91D2F6] text-[12px]"> 22.42 </p>
            </div>
            <div className="h-[8px] mx-[21px] bg-[#6C6376] overflow-hidden flex justify-end mt-[5px]">
                <div className="h-[8px] bg-white" style={{width : "30%"}}></div>
            </div>
            <p className="mx-[21px] text-[#6C6376] text-[12px]"> 5/7 days staking </p>
            <div className="mx-[21px] flex justify-between items-center">
                { data.owner == address ?
                    <button className="text-[1rem] text-white pointer-events-auto" onClick={() => {onStakeClicked()}}> Stake </button> :
                    <button className="text-[1rem] text-white pointer-events-auto" onClick={() => {onUnStakeClicked()}}> Unstake </button>
                }
                <button className="text-[1rem] text-[#91D2F6] pointer-events-auto" onClick={() => {onClaimClicked()}} disabled={data.owner == address}> Claim </button>
            </div>
        </div>
    )
}