import { log } from 'console';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepo(name) {
  const res = await fetch(`https://api.github.com/repos/cookiejar2104/${name}`);
  const repo = await res.json();
  return repo;
}

const RepoCard = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <div className='m-4'>
        <h1 className='bg-gray-500 p-6 rounded-lg text-2xl'>Repo Details</h1>
        <div className='m-4'>
          <h1 className="text-2xl">{repo.name}</h1>
          <p className='text-gray-400'>{repo.description}</p>
          <div className="flex justify-between mt-2">
            <span className='flex'>
              Stars<FaStar className='mt-1 mx-2' /> {repo.stargazers_count}
            </span>
            <span className='flex'>
              Forks<FaCodeBranch className='mt-1 mx-2' /> {repo.forks_count}
            </span>
            <span className='flex'>
              Watchers<FaEye className='mt-1 mx-2' /> {repo.watchers_count}
            </span>
            <Link href={repo.html_url}><button className='btn'>Visit Repo</button></Link>            
          </div>
        </div>
      </div>
    </>
  )
}

export default RepoCard