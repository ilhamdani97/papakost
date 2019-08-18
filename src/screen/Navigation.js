import {NavigationActions} from 'react-navigation'
let _navigator;

function setTopLevelNavigator(navigatorRef){
    _navigator = navigatorRef
}
function navigate(rooteName, params){
    _navigator.dispatch(
        NavigationActions.navigate({
            rooteName,params
        })
    )
}
export default {
    navigate,setTopLevelNavigator
}