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
            default:
                return <div>Error: Contents not Found.</div>
        }}

export default Messages