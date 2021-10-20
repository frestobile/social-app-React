import { AUTHENTICATE, SET_DID_TRY_AUTO_LOGIN, LOGOUT, IS_SOCIAL_ACTIVE } from "../actions/auth";

const initialState = {
    token: null,
    user: null,
    didTryAutoLogin: false,
    isSocial: false
};

export default (state=initialState, action) => {
    switch(action.type){
        case AUTHENTICATE:
            return {
                token: action.token,
                user: action.user,
                didTryAutoLogin: true
            };
        case SET_DID_TRY_AUTO_LOGIN:
            return{
                ...state,
                didTryAutoLogin: true
            };
        case LOGOUT:
            return {
                ...initialState,
                didTryAutoLogin: true
            };
        case IS_SOCIAL_ACTIVE:
            return {
                ...state,
                isSocial: action.isSocial
            }
        default:
            return state;
    }
}