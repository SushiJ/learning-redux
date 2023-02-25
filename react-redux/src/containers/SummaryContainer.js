import { connect } from "react-redux"
import { Summary } from "../components/Summary"

const mapStateToProps = (state) => {
  const subTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tipAmount = subTotal * (state.tipPercentage / 100)
  const total = subTotal + tipAmount

  return {
    subTotal, tipAmount, total
  }
}

export const SummaryContainer = connect(mapStateToProps)(Summary)