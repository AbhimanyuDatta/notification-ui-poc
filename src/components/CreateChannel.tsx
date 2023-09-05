import { FunctionComponent, useState } from "react";
import Notification from "./Notification";

const CreateChannel: FunctionComponent<{}> = () => {

  const [userId, setUserId] = useState<Number>()
  const [connected, setConnected] = useState<boolean>(false)

  const handleUserIdInput = (event: any) => {
    setUserId(event.target.value)
  }

  const handleLogin = () => {
    setTimeout(() => {}, 1000)
    setConnected(true)
  }

  return (
    <div>
      {
        connected
          ?
          <Notification user={userId || 0} />
          :
          <div>
            <br />
            <input type="text" placeholder="Enter your userId" onChange={handleUserIdInput}/>
            <button onClick={handleLogin}>Login</button>
          </div>
      }

    </div>
  )
}

export default CreateChannel