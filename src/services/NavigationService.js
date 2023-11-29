
 let navigationRef ;


function setTopLevelNavigator(navigatorRef) {
    navigationRef = navigatorRef;
    // console.log("_naviajgdafj ref : " , navigationRef)
}

function navigate(routeName, params) {
    
    navigationRef.navigate(routeName, params);
}

function goBack() {
    navigationRef.dispatch(NavigationAction.back());
}

export default {
    navigate,
    setTopLevelNavigator,
    goBack,
}