window.addEventListener('load', fillEmptySpace);
window.addEventListener('resize', fillEmptySpace);

function fillEmptySpace() {
    var container = document.querySelector('.d36-works');
    
    // Remove existing dummy items
    var dummyItems = document.querySelectorAll('.dummy-item');
    dummyItems.forEach(function(item) {
        container.removeChild(item);
    });

    // Calculate the number of items per row
    var items = container.querySelectorAll('img');
    var itemsPerRow = getItemsPerRow(items);
    
    // Add dummy items if the number of items is not a multiple of itemsPerRow
    var itemCount = items.length;
    if (itemCount % itemsPerRow !== 0) {
        var remainingSpace = itemsPerRow - (itemCount % itemsPerRow);
        for (var i = 0; i < remainingSpace; i++) {
            var dummyItem = document.createElement('div');
            dummyItem.style.flex = '1';
            dummyItem.className = 'dummy-item';
            container.appendChild(dummyItem);
        }
    }
}

function getItemsPerRow(items) {
    var firstItem = items[0];
    var firstItemTop = firstItem.offsetTop;
    
    var itemsPerRow = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].offsetTop === firstItemTop) {
            itemsPerRow++;
        } else {
            break;
        }
    }

    return itemsPerRow;
}
