import star from "../../images/icon-star.svg"
import '../App/App.css'

const App = () => {
    return(
        <div className='caixa'>
            <img src="../images/icon-star.svg" height="25px" width="25px"/>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <button className="submit">SUBMIT</button>
        </div>
    )
}

export default App;