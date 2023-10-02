import Link from 'next/link'
import RepoCard from '../../../components/RepoCard'
import RepoDir from '../../../components/RepoDir'

const RepoPage = ({ params: { name } }) => {
  return (
    <div>
      <Link href='/code/repos' className='btn btn-back m-4 mt-6 p-6 text-[60px]'>
        Back To Repositories
      </Link>
      <RepoCard name={name} />
      <RepoDir name={name} />
    </div>
  )
}

export default RepoPage