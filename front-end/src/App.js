import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Contact';
function App() {
    return (
        <div>
            <Header />
            <div className='body-wrapper'>
                <SearchBar />
                <h1>hi</h1>
                <h2>isdvicsndiv</h2>
                <div className='card-container'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
