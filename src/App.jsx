import Counter from './components/Counter'
import RepositoryList from './components/RepositoryList'
import './styles/global.scss'

export default function App() {
    return(
   // throw new Error("kkkkk")
        <>
            <RepositoryList />
            <Counter />
        </>
    );
}