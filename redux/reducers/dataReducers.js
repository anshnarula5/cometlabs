export const getDataReducer = (state = { data: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA_REQUEST":
      return { loading: true, data: [] };
    case "GET_DATA_SUCCESS":
      return { loading: false, data: payload };
    default:
      return state;
  }
};
