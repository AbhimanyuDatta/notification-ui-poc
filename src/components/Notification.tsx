import { FunctionComponent, useEffect, useState } from "react";
import CreateNotification from "./CreateNotification";

type NotificationProps = {
  user: Number
}

const Notification: FunctionComponent<NotificationProps> = (props) => {
  
  const [response, setResponse] = useState<Array<String>>([])

  const handleOnResponse = (data: String) => {
    setResponse(oldResponse => [...oldResponse, data])
  }

  useEffect(() => {
    const eventSource = new EventSource(`http://localhost:8080/notifications/${props.user}`)
    eventSource.onmessage = event => handleOnResponse(event.data)
  }, [])
  
  return (
    <div>
      <p>{ response }</p>
      <CreateNotification />
    </div>
  )
}

export default Notification