import React from 'react'
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { resolve } from 'path';

async function fetchRepos() {
    const res = await fetch('https://api.github.com/users/cookiejar2104/repos');
    await new Promise((resolve)=>setTimeout(resolve,1000));
    const repos = await res.json();
    return repos;
}


const ReposPage = async () => {
    const repos = await fetchRepos();
    return (
        <>
            <h1 className='bg-gray-500 p-6 rounded-lg text-2xl m-4'>All Repositories</h1>
            <ul className="repos-list m-4 p-4 rounded-md">
                {
                    repos.map((repo) => (
                        
                        <li key={repo.id} className=' bg-gray-800 p-3 m-2 rounded-md hover:scale-105'>
                            <a href={`/code/repos/${repo.name}`}>
                                <h3>{repo.name}</h3>
                                <p className=' text-gray-400 '>{repo.description}</p>
                                <div className="flex justify-between w-max-[200px]">
                                    <span className='flex'>
                                        <FaStar className='mt-1 mr-2' /> {repo.stargazers_count}
                                    </span>
                                    <span className='flex'>
                                        <FaCodeBranch className='mt-1 mr-2'/> {repo.forks_count}
                                    </span>
                                    <span className='flex'>
                                        <FaEye className='mt-1 mr-2'/> {repo.watchers_count}
                                    </span>
                                </div>
                            </a>

                        </li>
                    ))
                }
            </ul>
        </>

    )
}

export default ReposPage