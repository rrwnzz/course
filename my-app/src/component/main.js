import '../css/main.css';
import BasicGrid from './top';

export default function Main(props) {
    return (
        <div id='main'>
            <div className="topSection">
                <div id='LeftMain'>
                    <h3>
                        Welcome {props.username}. We're here to help you learn, grow, and succeed.
                    </h3>
                    <div className="searchContainer">
                        <input 
                            type="text" 
                            placeholder="Search for courses, tips..." 
                            className="searchInput"
                        />
                        <button className="searchButton">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>

                <div id='rightMain'>
                    <img 
                        src="https://i.pinimg.com/736x/29/dd/db/29dddbb74db0c68adc5358271281e03a.jpg"  
                    />
                </div>
            </div>
            {/* بدي احط البيسك غريد تحت المين */}
            <BasicGrid />
        </div>
    );
}
