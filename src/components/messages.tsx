import { useContext } from "react";
import { PopupContext } from "./popupContext";


interface MessageProps {
    contents: string
}

const Messages: React.FC<MessageProps> = ({contents}) => {
  
    switch (contents) {
        case 'INFO':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface <br></br> Version 1.1b24</div>
                        <div className="messageContent">
                            <div className="messageItem">Developed by Integrated Computer Systems, Inc. Cambridge Mass</div>
                            <div className="messageItem">Project Supervisor: Dennis Nedry</div>
                            <div className="messageItem">Chief Programmer: Mike Backes</div>
                            <div className="messageItem">&copy; Jurassic Park Inc. All Rights Reserved</div>
                        </div>
                    </div>
        case 'FIND':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: FIND</div>
                            <div className="messageItem">FIND is a context-sensitive command. Initiate FIND</div>
                            <div className="messageItem">at any point. See also: SEARCH, CHANGE, GO BACK</div>
                        </div>
                    </div>
        case 'GOBACK':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: GO BACK</div>
                            <div className="messageItem">Cannot GO BACK without a specific search option.</div>
                            <div className="messageItem">See Also: SEARCH, CHANGE, GO AHEAD, FIND, OPTIONS, REVIEW</div>
                        </div>
                    </div>
        case 'GOAHEAD':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: GO AHEAD</div>
                            <div className="messageItem">Cannot GO AHEAD without a specific search option.</div>
                            <div className="messageItem">See Also: SEARCH, CHANGE, GO BACk, FIND, OPTIONS, REVIEW</div>
                        </div>
                    </div>
        case 'ESTIMATE':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: ESTIMATE</div>
                            <div className="messageItem">ESTIMATE command tracks common order patterns.</div>
                            <div className="messageItem">See Also: ORDER, REVIVE, REPEAT, COLLATE</div>
                        </div>
                    </div>
        case 'ORDER':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: ORDER</div>
                            <div className="messageItem">ORDER command for common system inputs. Context needed for SEARCH or FIND command.</div>
                            <div className="messageItem">See Also: ESTIMATE, PARAMETERSS, REPEAT, COLLATE</div>
                        </div>
                    </div>
        case 'REVIVE':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: REVIVE</div>
                            <div className="messageItem">REVIVE command tracks phased out ORDER commands</div>
                            <div className="messageItem">See Also: ORDER, ESTIMATE, REPEAT, COLLATE</div>
                        </div>
                    </div>
        case 'SEARCH':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: SEARCH</div>
                            <div className="messageItem">SEARCH is a non contextual command. SEARCH all systems with given PARAMETERS.</div>
                            <div className="messageItem">See Also: FIND, CHANGE, GO AHEAD</div>
                        </div>
                    </div>
        case 'PARAMETERS':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: PARAMETERS</div>
                            <div className="messageItem">Set PARAMETERS for specified modules</div>
                            <div className="messageItem">See Also: ORDER, ESTIMATE, REPEAT, COLLATE</div>
                        </div>
                    </div>
        case 'REPEAT':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: REPEAT</div>
                            <div className="messageItem">REPEAT PARAMETERS for specified action</div>
                            <div className="messageItem">See Also: PARAMETERS, SEARCH, FIND</div>
                        </div>
                    </div>
        case 'COLLATE':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: COLLATE</div>
                            <div className="messageItem">COLLATE command saves dataset for REPORT. COLLATE IS A CONTEXT SENSITIVE COMMAND</div>
                            <div className="messageItem">See Also: REPORT, SEARCH, GO AHEAD</div>
                        </div>
                    </div>
        case 'REPORT':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: PARAMETERS</div>
                            <div className="messageItem">REPORT command to display summary data</div>
                            <div className="messageItem">See Also: ORDER, ESTIMATE, SEARCH, PARAMETERS, COLLATE</div>
                        </div>
                    </div>
        case 'ADVISE':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: ADVISE</div>
                            <div className="messageItem">Set recommended ORDER/ESTIMATE for specified modules</div>
                            <div className="messageItem">See Also: ORDER, ESTIMATE, REPEAT, COLLATE</div>
                        </div>
                    </div>
        case 'MONITOR':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: MONITOR</div>
                            <div className="messageItem">MONITOR command setup system view, module display</div>
                            <div className="messageItem">See Also: SYSTEMS, OPTIONS, TRACK</div>
                        </div>
                    </div>
        case 'OPTIONS':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: OPTIONS</div>
                            <div className="messageItem">Specify options for module action</div>
                            <div className="messageItem">See Also: PARAMETERS, MONITOR, SYSTEMS</div>
                        </div>
                    </div>
        case 'SYSTEMS':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: SYSTEMS</div>
                            <div className="messageItem">View SYSTEM info. Initiate with proper Authorization</div>
                            <div className="messageItem">See Also: MONITOR, OPTIONS, DELETE, TEST</div>
                        </div>
                    </div>
        case 'TEST':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: TEST</div>
                            <div className="messageItem">Setup TEST suite for related module</div>
                            <div className="messageItem">See Also: TRIAL, SYSTEMS, TRACK</div>
                        </div>
                    </div>
        case 'TRACK':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: TRACK</div>
                            <div className="messageItem">TRACK is a context-sensitive command</div>
                            <div className="messageItem">See Also: REPORT, GO AHEAD, MONITOR, TRIAL</div>
                        </div>
                    </div>
        case 'TRIAL':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: TRIAL</div>
                            <div className="messageItem">Run diagnostic suite</div>
                            <div className="messageItem">See Also: MONITOR, SYSTEMS, CONNOTE</div>
                        </div>
                    </div>
        case 'CONNOTE':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: CONNOTE</div>
                            <div className="messageItem">Set options for specified commands</div>
                            <div className="messageItem">See Also: ORDER, SYSTEMS, REPORT, COLLATE</div>
                        </div>
                    </div>
        case 'DELAY':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: DELAY</div>
                            <div className="messageItem">DELAY context module action</div>
                            <div className="messageItem">See Also: DELETE, SYSTEMS, REPORT, ORDER</div>
                        </div>
                    </div>
        case 'DELETE':
            return <div className="messageContainer">
                        <div className='messageHeader'>Jurassic Park Common User Interface</div>
                        <div className="messageContent">
                            <div className="messageItem">Command: DELETE</div>
                            <div className="messageItem">DELETE specified context action (requires AUTH)</div>
                            <div className="messageItem">See Also: SYSTEMS, OPTIONS</div>
                        </div>
                    </div>
        case 'ACCESS':
            return <div className="messageContainer">
                        <div className="messageContent">
                            <div className="messageItem">You Already Have Access</div>
                            <div className="messageItem">Make Your Selection From The Main Screen</div>
                        </div>
                    </div>
         case 'RESET':
            return <div className="messageContainer">
                        <div className="messageContent">
                            <div className="messageItem">THE COMPUTER IS NOW RESET</div>
                            <div className="messageItem">MAKE YOUR SELECTION FROM THE MAIN SCREEN</div>
                        </div>
                    </div>
            default:
                return <div>Error: Contents not Found.</div>
        }}

export default Messages