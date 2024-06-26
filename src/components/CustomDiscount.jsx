import Input from "./Input"
import Heading from "./Heading"
import { useEffect, useState } from "react"

export default function CustomDiscount({discountValue,setDiscountValue,customDiscountValue,setCustomDiscountValue}) {
  const [active , setActive] = useState(null);
  const handleDiscountClick = (e,index) => {
    e.preventDefault();
    const val = e.target.getAttribute('data-value');
    if(val){
      setDiscountValue(Number(val));
      setActive(index);
    }
  }

  useEffect(() => {
    if(discountValue == ''){
      setActive(null);
    }
  },[discountValue])

  const buttons = [
    {value:"5" , label:'5%'},
    {value:"10" , label:'10%'},
    {value:"15" , label:'15%'},
    {value:"25" , label:'25%'},
    {value:"50" , label:'50%'},
  ]
  return (
    <div className="select-tip-container">
      <Heading text="Select Tip %" />
      <div className="discount-btn-container">
        {buttons.map((btn,index) => (
          <a 
            href="#"
            key={index}
            className={`discount-btn ${index === active ? 'active' : ''}`}
            onClick={(e) => handleDiscountClick(e,index)}
            data-value={btn.value}
          >
            {btn.label}
          </a>
        ))}
          <Input className="input-element" id="custom-discount" type="number" placeholder="Custom" value={customDiscountValue} onChange={(e) => {setDiscountValue(Number(e.target.value)); setActive(null); setCustomDiscountValue(Number(e.target.value))}}/>
      </div>
    </div>
  )
}
