
let currentBid = JSON.parse(localStorage.getItem('currentBidArray'));
if (currentBid == null) {
    currentBid = [0];
}

let mainDoc = document.getElementById('parentElement');
mainDoc.addEventListener('click', (e) => {
    if (e.target.id == 'submit1') {
        let bid1 = parseInt(document.getElementById('bid1').value);
        if (bid1 != '' && !isNaN(bid1)) {
            if (bid1 > currentBid[currentBid.length-1]) {
                currentBid.push(bid1);
                updateCurrentBid('higher');
                save();
            }
            else {updateCurrentBid('lower');}
        }
    }
    if (e.target.id == 'submit2') {
        let bid2 = parseInt(document.getElementById('bid2').value);
        if (bid2 != '' && !isNaN(bid2)) {
            if (bid2 > currentBid[currentBid.length-1]) {
                currentBid.push(bid2);
                updateCurrentBid('higher');
                save();
            } else {updateCurrentBid('lower');}
        }
    }
});

function updateCurrentBid(string) {
    switch(string) {
        case 'higher':
            document.getElementById('current-bid').innerText = `The highest bid is ${currentBid[currentBid.length-1]}`;
            break;
        case 'lower':
            document.getElementById('current-bid').innerText = `${currentBid[currentBid.length-1]} is not the highest bid`;
            break;
    }
}
function save() {
    localStorage.setItem('currentBidArray', JSON.stringify(currentBid));
}