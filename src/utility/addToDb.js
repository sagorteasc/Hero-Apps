// get data from local storage
const getFromLocalStorage = () => {
    const installedApps = localStorage.getItem("installed_apps");
    if (installedApps) {
        const installedAppsInt = JSON.parse(installedApps);
        return installedAppsInt;
    }
    else {
        return [];
    }
}

// store data in local storage
const storeInLocalStorage = (id) => {
    const installedApps = getFromLocalStorage();
    if (installedApps.includes(id)) {
        alert("App Already Installed");
        return;
    }
    else {
        installedApps.push(id);
        const installedAppsStr = JSON.stringify(installedApps);
        localStorage.setItem("installed_apps", installedAppsStr);
        alert("App Successfully Installed");
    }
}

// remove data from localstorage
const removeFromLocalStorage = (id) => {
    const installedApps = getFromLocalStorage();
    const remainingApps = installedApps.filter(appId => appId !== id);
    const remainingAppsStr = JSON.stringify(remainingApps);
    localStorage.setItem("installed_apps", remainingAppsStr);
}

export { getFromLocalStorage, storeInLocalStorage, removeFromLocalStorage };