let lastId = 0;
export default function reducer(state = [], action) {
  if (action.type === "BUG_ADD")
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === "BUG_DEL")
    return state.filter((bug) => bug.ig !== action.payload.description);

  return state;
}
