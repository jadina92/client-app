export default (state, action) => {
    switch (action.type) {
      case "ADD_recette_TO_favouriteLIST":
        return {
          ...state,
          favouritelist: [action.payload, ...state.favouritelist],
        };
      case "REMOVE_recette_FROM_favouriteLIST":
        return {
          ...state,
          favouritelist: state.favouritelist.filter(
            (recette) => recette.id !== action.payload
          ),
        };
   
    } 
}