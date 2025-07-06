import '../css/main.css';

export default function Main(props) {
    return (
        <div id='main'>
            <div id='LeftMain'>
                <h3>
                    Welcome {props.username}. We’re here to help you learn, grow, and succeed.
                </h3>
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search for courses, tips..." 
                        className="search-input"
                    />
                    <button className="search-button">
                        <i className="fas fa-search"></i> {/* Font Awesome icon - optional */}
                    </button>
                </div>
            </div>
            <div id='rightMain'>
                <img 
                    width="400px" 
                    src="https://i.pinimg.com/736x/29/dd/db/29dddbb74db0c68adc5358271281e03a.jpg" 
                    alt="Learning Visual" 
                />
            </div>
        </div>
    );
}

