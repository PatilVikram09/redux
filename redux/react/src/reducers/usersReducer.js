const USERLIST = "USERLIST";
const initialState = {
    userList: []
};
const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERLIST: {
            return {
                ...state,
                userList: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
export default userListReducer;