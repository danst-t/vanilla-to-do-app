
let itemList;
let descField;
let timeField;

function onPageLoad() {
    itemList = document.getElementById('list');
    descField = document.getElementById('new-item-desc');
    timeField = document.getElementById('new-item-time');

    const storageItems = getStorageItems();
    storageItems.forEach(el => {
        createListItem(el.desciption, el.time, el.doneState, el.itemID)
    });

}

function checkItemkHandler(item, checkBox) {
    return () => {
        console.log('check item', checkBox.checked);
        // if checked > make it disable  + set in the storage

    }
}

function createListItem(desciption, time, doneState = false, itemID = Math.random().toString(36).substr(2, 10)) {
    // create a new to do item
    const item = document.createElement('div');
    item.id = itemID;
    item.className = "list-item color1";

    const listItemObj = {
        item: item,
        itemID: itemID,
        desciption: desciption,
        time: time,
        doneState: doneState,
    };

    // info
    const itemInfo = document.createElement('div');
    const itemHour = document.createElement('div');
    itemHour.className = "item-hour";
    itemHour.textContent = time;

    const itemDesc = document.createElement('div');
    itemDesc.className = "item-desc";
    itemDesc.textContent = desciption
    itemInfo.appendChild(itemHour);
    itemInfo.appendChild(itemDesc);

    // chckbox
    const itemCheck = document.createElement('div');
    itemCheck.className = "item-check";
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.onchange = checkItemkHandler(listItemObj, checkBox);
    itemCheck.appendChild(checkBox);

    item.appendChild(itemInfo);
    item.appendChild(itemCheck);

    itemList.appendChild(item);

    return listItemObj;
}


function addNewItemToList() {
    // get form data
    const desciption = descField.value;
    const time = timeField.value;

    const newItem = createListItem(desciption, time, false);
    delete newItem.item; // we don't need to starage the html element
    addItemToStorage(newItem);
}

