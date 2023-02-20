import React from 'react'
// import { createContext, useContext } from "react";
// import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
// import { ethers } from "ethers";

// interface StateContextProps {
//   address: string;
//   contract: any;
//   connect: () => Promise<void>;
//   createProject: (form: any) => Promise<void>;
//   getProjects: () => Promise<any>;
//   getUserProjects: () => Promise<any>;
//   donate: (pId: number, amount: string) => Promise<any>;
//   getDonations: (pId: number) => Promise<any>;
// }

// const StateContext = createContext<StateContextProps>({} as StateContextProps);

// export const StateContextProvider: React.FC = ({ children }) => {
//   const {contract} = useContract('0xBd4f5d862fda0e34914cFF7a446F0829750a19fe')
//   const { mutateAsync: createProject } = useContractWrite(contract, 'createProject');

//   const address = useAddress();
//   const connect = useMetamask();

//   const publishProject = async (form: any) => {
//     try {
//       const data = await createProject([
//         address, // owner project creator
//         form.title, // title
//         form.description, // description
//         form.target,
//         new Date(form.deadline).getTime(), // deadline
//         form.image
//       ])
      
//       console.log("contract call success", data)
//     } catch (error) {
//       console.log("contract call failure", error)
//     }
//   }

//   const getProjects = async () => {
//     const Projects = await contract.call('getProjects');

//     const parsedProjects = Projects.map((project: any, i: number) => ({
//       owner: project.owner,
//       title: project.title,
//       description: project.description,
//       target: ethers.utils.formatEther(project.target.toString()),
//       deadline: project.deadline.toNumber(),
//       amountCollected: ethers.utils.formatEther(project.amountCollected.toString()),
//       image: project.image,
//       pId: i
//     }));

//     return parsedProjects;
//   }

//   const getUserProjects = async () => {
//     const allProjects = await getProjects();

//     const filteredProjects = allProjects.filter((project) => project.owner === address);

//     return filteredProjects;
//   }

//   const donate = async (pId: number, amount: string) => {
//     const data = await contract.call('donateToProject', pId, {value: ethers.utils.parseEther(amount)});

//     return data;
//   }

//   const getDonations = async (pId: number) => {
//     const donations = await contract.call('getDonators', pId);
//     const numberOfDonations = donations[0].length;

//     const parsedDonations = [];

//     for(let i = 0; i < numberOfDonations; i++) {
//       parsedDonations.push({
//         donator: donations[0][i],
//         donation: ethers.utils.formatEther(donations[1][i].toString())
//       })
//     }

//     return parsedDonations
//   }

//   return (
//     <StateContext.Provider
//       value={{
//         address,
//         contract,
//         connect,
//         createProject: publishProject,
//         getProjects,
//         getUserProjects,
//         donate,
//         getDonations,
//       }}
//     >
//       {children}
//     </StateContext.Provider>
//   )
// }

// export const useStateContext = () => useContext(StateContext);

const Context = () => {
  return (
    <div className='pt-6 bg-gradient-to-r from-stone-800 to-gray-900 md:text-lg sm:text-base'>
    </div>
  )
}

export default Context