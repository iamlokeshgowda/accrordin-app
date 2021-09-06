import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function Questions({title, info}) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div>
            <div className="question">
                <header>
                    <p className="header">{title} </p>
                    <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        
                    </button>
                </header>
                {showInfo && <p className="info">{info} </p>}
            </div>
        </div>
    )
}

export default Questions
