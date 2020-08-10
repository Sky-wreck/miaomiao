const state = {
    name : window.localStorage.getItem('nowName') ,
    cityId : window.localStorage.getItem('nowId')
};

const action = {

};

const mutations = {
    CITY_INFO(state, payload){
        state.name = payload.name
        state.cityId = payload.cityId
    }
};

export default{
    namespaced : true,
    state,
    action,
    mutations
}