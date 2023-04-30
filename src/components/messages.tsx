



    const InfoMessage = () => { 
        return (
            <div className="messageContainer">
                <div className='messageHeader'>Jurassic Park Common user Interface <br></br> Version 1.1b24</div>
                <div className="messageContent">
                    <div className="messageItem">Developed by Integrated Computer Systems, Inc. Cambridge Mass</div>
                    <div className="messageItem">Project Supervisor: Dennis Nedry</div>
                    <div className="messageItem">Chief Programmer: Mike Backes</div>
                    <div className="messageItem">&copy; Jurassic Park Inc. All Rights Reserved</div>
                </div>
            </div>
        )
    }



    const FindMessage: React.FC = () => { 
        return (
            <div className="messageContainer">
                <div className='messageHeader'>Jurassic Park Common user Interface</div>
                <div className="messageContent">
                    <div className="messageItem">Command: FIND</div>
                    <div className="messageItem">FIND is a context-sensitive command. Initiate FIND</div>
                    <div className="messageItem">at any point. See also: SEARCH, CHANGE, GO BACK</div>
                </div>
            </div>
        )
      }
    




export { InfoMessage, FindMessage }