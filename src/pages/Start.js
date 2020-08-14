import React from 'react';
import ResultsList from "../components/Results/ResultsList";
import StartList from "../components/Start/StartList";


class Start extends React.Component {

    render() {
        return (
            <div className={"FlexSpacer Padding40T"}>
                <StartList/>
            </div>
        );
    }
}

export default Start;
