import { actions } from "./App";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() => dispatch({ type: actions.choose, payload: { operation } })}
    >
      {operation}
    </button>
  );
}
