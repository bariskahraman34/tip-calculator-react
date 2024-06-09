import NopInput from "./NopInput"
import CustomDiscount from "./CustomDiscount"
import BillInput from "./BillInput"

export default function LeftSide({billAmount, setBillAmount , discountValue , setDiscountValue , numPeople, setNumPeople, customDiscountValue , setCustomDiscountValue}) {
  return (
    <div className="left-side-container">
      <BillInput billAmount={billAmount} setBillAmount={setBillAmount} />
      <CustomDiscount discountValue={discountValue} setDiscountValue={setDiscountValue} customDiscountValue={customDiscountValue} setCustomDiscountValue={setCustomDiscountValue} />
      <NopInput numPeople={numPeople} setNumPeople={setNumPeople} />
    </div>
  )
}
