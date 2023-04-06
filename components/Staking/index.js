import { ThirdwebNftMedia, useContract, useNFT, useAddress, useOwnedNFTs, useContractRead, useTotalCount, useChainId } from "@thirdweb-dev/react";
import StakingNFTItem from "components/StakingNFTItem";
import { useEffect, useState } from "react"
import Image from "next/image";
import { BigNumber } from "ethers";

import { STAKIING_ADDRESS, NFT_ADDRESS, REWARD_ADDRESS, STAKING_ABI, NFT_ABI } from "configs"

export default function Staking() {
    const { contract: stakingContract } = useContract(STAKIING_ADDRESS, STAKING_ABI);
    const { contract: nftContract } = useContract(NFT_ADDRESS, NFT_ABI);
    const address = useAddress();
    const chainId = useChainId();

    
    const [totalRewards, setTotalRewards] = useState(0);
    const [selectedTab, selectTab] = useState(0);
    const [stakedGhost, setStakedGhost] = useState(0);
    const [unStakedGhost, setUnStakedGhost] = useState(0);
    const [nfts, setNFTs] = useState([]);

    let { data: ownedNFTs, isLoading: isLoadingOwnedNFTs, errorOwnedNFTs } = useOwnedNFTs(nftContract, address);

    let { data: unStakedNFTCountData, isLoading: isLoadingOwnedNFTCount, errorOwnedNFTCount } = useTotalCount(nftContract, address);
    let { data: stakedNFTCountData, isLoading: isLoadingStakedNFTCount, errorStakedNFTCount } = useContractRead(stakingContract, "stakedNFTCount", address);
    const { data: totalRewardData, isLoading: isLoadingTotalRewards, errorTotalRewards } = useContractRead(stakingContract, "totalRewards", address);

    useEffect(() => {
        const b = BigNumber.from(totalRewardData?._hex ? totalRewardData?._hex : "0" )
        setTotalRewards(b.toString())
    }, [totalRewardData])

    useEffect(() => {
        const b = BigNumber.from(unStakedNFTCountData?._hex ? unStakedNFTCountData?._hex : "0" )
        setUnStakedGhost(b.toString())
    }, [unStakedNFTCountData])

    useEffect(() => {
      const b = BigNumber.from(stakedNFTCountData?._hex ? stakedNFTCountData?._hex : "0" )
      setStakedGhost(b.toString())
  }, [stakedNFTCountData])

    useEffect(() => {
        if(selectedTab == 2) {
            setNFTs(ownedNFTs);
        }
    }, [ownedNFTs, selectedTab])

    useEffect(() => {
        if(selectedTab < 2) 
            setNFTs([])
    }, [selectedTab])

    return (
        <div className="flex flex-col pt-[200px] z-10 relative lg:mx-[100px] md:mx-[80px] mx-[50px] pointer-events-none">
            <div className="">
                <h2 className="text-white text-[32px]"> GB Staking </h2>
            </div>

            <div className="flex items-end">
                <button className={"min-w-[150px] px-[16px] py-[10px] mr-[10px] h-[50px] rounded-[8px] text-[16px] pointer-events-auto" + (selectedTab == 0 ? " bg-[#AAEFFF] text-black" : " bg-[transparent] text-white")}
                    onClick={() => { selectTab(0)}}
                >
                    All
                </button>
                <button className={"min-w-[150px] px-[16px] py-[10px] mr-[10px] h-[50px] rounded-[8px] text-[16px] pointer-events-auto" + (selectedTab == 1 ? " bg-[#AAEFFF] text-black" : " bg-[transparent text-white")}
                    onClick={() => { selectTab(1)}}
                >
                    Staked Ghost{stakedGhost > 0 ? `(${stakedGhost})` : ``}
                </button>
                <button className={"min-w-[150px] px-[16px] py-[10px] mr-[10px] h-[50px] rounded-[8px] text-[16px] pointer-events-auto" + (selectedTab == 2 ? " bg-[#AAEFFF] text-black" : " bg-[transparent text-white")}
                    onClick={() => { selectTab(2)}}
                >
                    Unstaked Ghost{ownedNFTs?.length > 0 ? `(${ownedNFTs?.length})` : ``}
                </button>

                <div className="grow"></div>
                <div className="flex bg-gradient-to-r border-[#400077] border-[2px] rounded-[10px]  h-[111px] w-[470px]"  style={{background: "linear-gradient(90deg, #AAEFFF 0%, #EEAFFF 100%)", boxShadow: "0px 5px 0px #400077"}}>
                    <div className="w-1/2 border-r-[2px] border-r-[black] flex flex-col px-[30px] justify-center">
                        <p className="text-[#6F617A] text-[16px]"> Total Rewards</p>
                        <p className="text-white text-[32px]"> { totalRewards } </p>
                    </div>
                    <div className="w-1/2 border-r-[2px] border-r-[black] flex flex-col px-[30px] justify-center">
                        <p className="text-[#6F617A] text-[16px]"> Available for claim </p>
                        <p className="text-white text-[32px]">$ 5.550 </p> 
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-[60px]">
                {nfts?.map((item, index) => 
                    <StakingNFTItem key={index} data={item}/>
                )}
            </div>

            <div className="flex justify-between items-center mb-[100px] mt-[50px]">
                <button className="flex items-center"> 
                    <p className="text-white mr-[10px]"> Powered by </p>
                    <Image alt="" src="/images/yxn.io.png" width={98} height={18} />
                </button>
                <button className="flex items-center"> 
                    <p className="flex flex text-white mr-[10px]"> Find all ghosts </p>
                    <Image alt="" src="/images/arrow_right.png" width={43} height={23} />
                </button>
            </div>
        </div>
    )
}