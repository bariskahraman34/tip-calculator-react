import NopInput from "./NopInput"
import CustomDiscount from "./CustomDiscount"
import BillInput from "./BillInput"

export default function LeftSide() {
  return (
    <div className="left-side-container">
      <BillInput />
      <CustomDiscount />
      <NopInput />
    </div>
  )
}
