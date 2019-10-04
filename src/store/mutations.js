export const ADD_BEER_DATA = (state, beerData) => {
    return state.beer = beerData;
};

export const ADD_BEER_DATA_LIST = (state, beerDataList) => {
    return state.beerList = beerDataList;
};

export const UPDATE_BEER_LIST = (state, beersList) => {
    return state.beerList = beersList;
};