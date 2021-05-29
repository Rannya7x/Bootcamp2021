import RepositoryItem from './RepositoryItem'

const repositoryItem = {
    name: 'name',
    description: 'alguma coisa',
    link: 'https://google.com',
}

export default function RepositoryList() {
    return(
        <div>
            <h1>Lista</h1>

            <RepositoryItem repository = {repositoryItem} />
        </div>
    )
}