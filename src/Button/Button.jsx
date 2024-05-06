const Button = ({setModal, modal}) => {
    return(
        <button className="submit" onClick={() => setModal(!modal)}>{modal === true} Submit</button>
    )
}

export default Button;