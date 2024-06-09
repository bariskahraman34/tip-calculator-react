export default function RightSide({totalPerPerson,totalTipPerPerson,resetValues}) {
  const getClassName = () => {
    return (totalPerPerson && totalTipPerPerson > 0 ? 'reset-btn active' : 'reset-btn not-active');
  }
  return (
    <div className="right-side-container">
      <div className="right-side-top-container">
          <div className="right-side-input-container">
              <div className="heading-container">
                  <h3 className="right-side-heading">Tip Amount</h3>
                  <span>/ person</span>
              </div>
              <span className="result" id="tip-amount-result"> {totalTipPerPerson ? `$${totalTipPerPerson.toFixed(2)}` : "$0.00"} </span>
          </div>
          <div className="right-side-input-container">
              <div className="heading-container">
                  <h3 className="right-side-heading">Total</h3>
                  <span>/ person</span>
              </div>
              <span className="result" id="total-result"> {totalPerPerson ? `$${totalPerPerson.toFixed(2)}` : "$0.00" }</span>
          </div>
      </div>
      <a href="#" className={getClassName()} onClick={resetValues}>RESET</a>
    </div>
  )
}
