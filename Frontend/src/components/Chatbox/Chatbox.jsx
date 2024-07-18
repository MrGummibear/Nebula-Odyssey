import "./Chatbox.css"

const Chatbox = () => {
    return (
        <div className="chat">
            <div className="messages">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-regular fa-envelope"></i>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-solid fa-user-gear"></i>
            </div>
            <div className="chat-box">
                <div className="chat-window"></div>
                <div className="chat-input">
                    <button type="submit" className="submit-button"></button>
                </div>
            </div>
        </div>
    );
}

export default Chatbox;
