import data from '../services/beerData';

export const addBeerData = ( {commit} ) => {
    data.getBeerData().then(data => {
        commit('ADD_BEER_DATA', data);
    });
};

export const addBeerDataList = ( {commit} ) => {
    data.getBeerData().then(data => {
        commit('ADD_BEER_DATA_LIST', data);
    });
};

export const updateBeersList = ( {commit}, data ) => {
    commit('UPDATE_BEER_LIST', data);
};