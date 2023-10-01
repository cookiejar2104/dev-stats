import Link from 'next/link'

async function fetchRepoCont(name) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(
        `https://api.github.com/repos/cookiejar2104/${name}/contents`,
        {
            next: {
                revalidate: 60,
            },
        }
    );
    const contents = await response.json();
    return contents;
}

const RepoDir = async ({ name }) => {
    const contents = await fetchRepoCont(name);
    const dirs = contents.filter((contents) => contents.type === 'dir')
    return (
        <div className='m-4'>
            <h3 className='bg-gray-800 p-6 rounded-lg text-1xl'>Directories</h3>
            <ul className='m-4 p-6'>
                {dirs.map((dir) => (
                    <li key={dir.path} className='p-2'>
                        <Link href={`/code/repos/${name}/${dir.path}`} className='underline'>{dir.path}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RepoDir