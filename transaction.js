let balance = 10000; 
let transactions = []; 


function KartyaLetrehoz(termek, tipus, gender) {
    let genderBackup = termek.gender
    let imagebackup = termek.image
    if (tipus == "casual" || tipus == "clothing" || tipus == "all") {
        termek.gender = null
    }

    if (tipus == "all") {
        termek.image = termek.image.substr(1)
    }

    if (tipus == "all" || tipus == termek.type || gender == termek.gender || termek.gender == "U") {
        let kartyak = document.createElement('div');
        kartyak.className = "kartyak";
        

        let add_to_cart = document.createElement('a');
        add_to_cart.className = "add-to-cart";
        add_to_cart.innerHTML = "Add to cart";
        add_to_cart.href = "";


        add_to_cart.addEventListener('click', () => {

            balance -= termek.price;


            transactions.push({
                name: termek.name,
                date: new Date().toLocaleDateString(),
                amount: -termek.price,
            });


            updateTransactionList();
        });



        return kartyak;
    }
    return false;
}


function updateTransactionList() {
    const transactionList = document.querySelector('.transaction-list');
    transactionList.innerHTML = ''; 
    /
    transactions.forEach(transaction => {
        let transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');

        let transactionDetails = document.createElement('div');
        transactionDetails.classList.add('transaction-details');

        let transactionIcon = document.createElement('div');
        transactionIcon.classList.add('transaction-icon');
        transactionIcon.textContent = '🛒';

        let transactionInfo = document.createElement('div');
        transactionInfo.classList.add('transaction-info');

        let transactionName = document.createElement('span');
        transactionName.classList.add('transaction-name');
        transactionName.textContent = transaction.name;

        let transactionDate = document.createElement('span');
        transactionDate.classList.add('transaction-date');
        transactionDate.textContent = transaction.date;

        let transactionAmount = document.createElement('div');
        transactionAmount.classList.add('transaction-amount');
        transactionAmount.textContent = `$${transaction.amount.toFixed(2)}`;


        transactionInfo.appendChild(transactionName);
        transactionInfo.appendChild(transactionDate);
        transactionDetails.appendChild(transactionIcon);
        transactionDetails.appendChild(transactionInfo);
        transactionItem.appendChild(transactionDetails);
        transactionItem.appendChild(transactionAmount);


        transactionList.appendChild(transactionItem);
    });
}
