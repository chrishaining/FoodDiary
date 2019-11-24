import React, {Component, Fragment} from 'react'
import DiaryEntry from './DiaryEntry'

class Diary extends Component {

    render() {

        return(
            <Fragment>
                <div className="DiaryEntry">
            <h3>Ich bin der Diary. I pass down to DiaryEntry.</h3>
            <DiaryEntry/>
            </div>
            </Fragment>
        )
    }
}

export default Diary