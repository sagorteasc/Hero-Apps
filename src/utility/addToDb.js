import { toast } from 'react-toastify';

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
        toast.error("App Is Already Installed");
        return;
    }
    else {
        installedApps.push(id);
        const installedAppsStr = JSON.stringify(installedApps);
        localStorage.setItem("installed_apps", installedAppsStr);
        toast.success("App Successfully Installed");
    }
}

// remove data from localstorage
const removeFromLocalStorage = (id) => {
    const installedApps = getFromLocalStorage();
    const remainingApps = installedApps.filter(appId => appId !== id);
    const remainingAppsStr = JSON.stringify(remainingApps);
    localStorage.setItem("installed_apps", remainingAppsStr);
    toast.warn("App Has Been Uninstalled");
}

export { getFromLocalStorage, storeInLocalStorage, removeFromLocalStorage };