const setVisibilityFilter = (visibilityFilter,action)=>{
	return (action.visibilityFilter ? action.visibilityFilter:"ALL");
};

export default setVisibilityFilter;