
import './Toolbar.css'
import { Data } from "../Data/Data";

function Toolbar({ toolbarItems, setItems, fiterItems }) {
    console.log(toolbarItems)
    return (
        <div className="toolbar">
            <div className="toolbar_list">
                <button className="toolbar_btn"
                    onClick={() => setItems(Data)}>All
                </button>
                {
                    toolbarItems.map((val,selected) => (
                        <button className={val === selected ? 'toolbar_btn active' : 'toolbar_btn'}
                            onClick={() => fiterItems(val)}>
                            {val}
                        </button>
                    ))
                }

            </div>
        </div>
    )
}

export default Toolbar