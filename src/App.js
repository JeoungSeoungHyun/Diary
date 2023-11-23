import "./assets/css/style.css"; //index.html에서 하는것과 차이는??

function App() {
    return (
        <>
            <div className="container">
                <div>오늘의 일기</div>
                <form>
                    <input className="title" />
                    <textarea className="content" />
                    <div className="score-container">
                        <span>오늘의 감정점수 : </span>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <button className="save">일기 저장하기</button>
                </form>
            </div>
        </>
    );
}

export default App;
