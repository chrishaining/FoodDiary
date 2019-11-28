import React, {
    Component,
    Fragment
} from 'react'
import DiaryEntry from './DiaryEntry'
import {
    Calendar,
    momentLocalizer
} from 'react-big-calendar';
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    start: new Date(),
                    end: new Date(moment()),
                    title: ""
                }
            ]
        }
    }

    render() {
        return (<Fragment>
            <div className="Diary">
                <Calendar localizer={
                    localizer
                }
                    defaultDate={
                        new Date()
                    }
                    defaultView="month"
                    events={
                        this.state.events
                    }
                    style={
                        {
                            height: "50vh",
                            width: "150vh"
                        }
                    }
                    components={
                        {
                            event: DiaryEntry
                        }
                    }
                />
            </div >
            {/* <DiaryEntry /> */}

        </Fragment>
        )
    }
}

export default Diary