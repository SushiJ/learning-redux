import { connect } from "react-redux";
import NewItemForm from "../components/NewItemForm";
import { addNewItem } from "../store/items/actions";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (name, price) => dispatch(addNewItem(name, price))
  }
}

// Dispatch automatically gets passed in if you don't provide mapState or mapDispatch
export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm)
