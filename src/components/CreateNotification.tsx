import { FunctionComponent, useState } from "react";
import Checkbox from "./Checkbox";
import axios from "axios";

const CreateNotification: FunctionComponent<{}> = () => {
  
  const [userIds, setUserIds] = useState<Array<Number>>([])
  const [notification, setNotification] = useState<String>('')

  const handleCheckboxOnChange = (event: any) => {
    if (event.target.checked) {
      setUserIds(oldIds => [...oldIds, Number(event.target.id)])
    } else {
      setUserIds(oldIds => oldIds.filter(ui => ui != Number(event.target.id)))
    }
  }

  const handleNotificationOnChange = (event: any) => {
    setNotification(event.target.value)
  }

  const handleOnSend = () => {
    axios.post('http://localhost:8080/notifications', {"userIds": userIds, "text": notification})
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
    setNotification('')  
  }
  
  return (
    <div>
      <Checkbox id="1" label="User 1" handleOnChange={handleCheckboxOnChange} />
      <Checkbox id="2" label="User 2" handleOnChange={handleCheckboxOnChange} />
      <Checkbox id="3" label="User 3" handleOnChange={handleCheckboxOnChange} />
      <br />
      <input type="text" placeholder="Enter notification" onChange={handleNotificationOnChange} value={String(notification)} />
      <button onClick={handleOnSend}>Send</button>
    </div>
  )
}

export default CreateNotification