import { FunctionComponent, useState } from "react";

type CheckboxProps = {
  id: string,
  label: string,
  handleOnChange: Function
}

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
  
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleOnCheckboxClick = (event: any) => {
    setIsChecked(prev => !prev)
    props.handleOnChange(event)
  }

  return (
    <div>
      <label>
        <input type="checkbox" id={props.id} name={props.label} value={props.label} onChange={handleOnCheckboxClick}/>
        <span>{props.label}</span>
      </label>
    </div>
  )
}

export default Checkbox