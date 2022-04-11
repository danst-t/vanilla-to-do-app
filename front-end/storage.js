
function getStorageItems() {
    let items;
    const list = localStorage.getItem('todoList');
    if (!list) { // if no list then create new list
        items = [];
    } else {
        try {
            const listArr = JSON.parse(list);
            if (Array.isArray(listArr)) {
                items = listArr;
            }
        } catch (error) {
            console.log('malformed list in localStorage');
        }
    }
    return items;
}



function addItemToStorage(item) {
    // check if the list exists
    let items;
    const list = localStorage.getItem('todoList');
    if (!list) { // if no list then create new list
        items = [item];
    }
    else {
        // get the list and add new item in in
        try {
            const listArr = JSON.parse(list);
            if (Array.isArray(listArr)) {
                listArr.push(item);
                items = listArr
            }
        } catch (error) {
            console.log('malformed list in localStorage');
        }
    }
    // save the array to storage
    localStorage.setItem('todoList', JSON.stringify(items));
}


function updateItemToStorage(item) {
    const itemID = item.itemID;
    const storageList = getStorageItems();

    // find the item by id
    const itemFromStorage = storageList.find(el => el.itemID == itemID);
    if (itemFromStorage) {
        // ................
        // TO DO update with new values
    }

    // save the array to storage
    localStorage.setItem('todoList', JSON.stringify(storageList));
}



function removeItemFromStorage(item) {
    console.log("aremove from storage ", item)
}


