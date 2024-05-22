export default function RightSide() {
  return (
    <div className="right-side-container">
      <div className="right-side-top-container">
          <div className="right-side-input-container">
              <div className="heading-container">
                  <h3 className="right-side-heading">Tip Amount</h3>
                  <span>/ person</span>
              </div>
              <span className="result" id="tip-amount-result">$0.00</span>
          </div>
          <div className="right-side-input-container">
              <div className="heading-container">
                  <h3 className="right-side-heading">Total</h3>
                  <span>/ person</span>
              </div>
              <span className="result" id="total-result">$0.00</span>
          </div>
      </div>
      <a href="#" className="reset-btn not-active">RESET</a>
    </div>
  )
}
