const DELETE_USER = "DELETE_USER"

export const deleteUserRedux = (id) => ({
    type: DELETE_USER,
    payload: id,
  });

  const deleteReducer = (deleteUsers =[], action) => {
    switch (action.type) {
      case DELETE_USER:
          return [...deleteUsers, action.payload ]
      default:
        return deleteUsers;
    }
  };
  
  export default deleteReducer;