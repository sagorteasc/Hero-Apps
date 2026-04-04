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

export { getFromLocalStorage, storeInLocalStorage };