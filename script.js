const dataProduct =[
    {
        "id" : 1,
        "nama": "mobil",
        "src" : "no-image-icon-23485.png",
        "harga" : 30000
    },
    {
        "id" : 2,
        "nama": "motor",
        "src" : "no-image-icon-23485.png",
        "harga" : 10000
    },
    {
        "id" : 3,
        "nama": "truck",
        "src" : "no-image-icon-23485.png",
        "harga" : 450000
    },
    {
        "id" : 4,
        "nama": "pesawat",
        "src" : "no-image-icon-23485.png",
        "harga" : 100000
    },
    {
        "id" : 5,
        "nama": "sepeda",
        "src" : "no-image-icon-23485.png",
        "harga" : 5000
    },
    {
        "id" : 6,
        "nama": "robot",
        "src" : "no-image-icon-23485.png",
        "harga" : 15000
    }
]

let totalCart = 0;
const resultData =[]
function addObjectToArray(obj) {
    resultData.push(obj);
}

function generateData(){
    const tableResult = document.getElementById('table-result');
    tableResult.innerHTML = ''
    let total = 0;
    let no = 1;
    
    resultData.forEach(result => {

        const tableRow = document.createElement('tr');
    
        const noCol = document.createElement('td'); // Ganti elemen <tr> menjadi <td>
        noCol.textContent = no;
        no++;
    
        const nameCol = document.createElement('td');
        nameCol.textContent = result.nama;
    
        const hargaCol = document.createElement('td');
        hargaCol.textContent = result.harga;
    
        const kuantCol = document.createElement('td');
        kuantCol.textContent = result.kuantitas;
    
        const totalCol = document.createElement('td');
        totalCol.textContent = result.jumlah;
        totalCol.id = `${result.id}`
    
        tableRow.appendChild(noCol);
        tableRow.appendChild(nameCol);
        tableRow.appendChild(hargaCol);
        tableRow.appendChild(kuantCol);
        tableRow.appendChild(totalCol);
    
        tableResult.appendChild(tableRow);
    
        total = total + result.jumlah;

    });

    totalCart = total
    const totalCartElement = document.getElementById('total-cart');
    totalCartElement.textContent = `Total: ${totalCart}`;
}


const cardContainer = document.getElementById('card-container')


dataProduct.forEach(product=>{
    let quant =1;
    const col = document.createElement('div');
    col.classList.add('col-sm-4','mt-2');

    const card = document.createElement('div');
    card.classList.add('card', 'text-center');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = product.src;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const productName = document.createElement('h5');
    productName.textContent = product.nama;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Rp. ${product.harga}`;

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group')

    const decreaseButton = document.createElement('button'); // Tombol kurang
    decreaseButton.type = 'button';
    decreaseButton.classList.add('btn', 'btn-primary');
    decreaseButton.id = `btn-decrease-${product.id}`
    decreaseButton.textContent = '-';
    
    const quantityDisplay = document.createElement('button'); // Tampilan jumlah
    quantityDisplay.classList.add('btn', 'btn-light', 'disabled');
    quantityDisplay.id = `quantity-${product.id}`
    quantityDisplay.innerHTML = 1;
    
    const increaseButton = document.createElement('button'); // Tombol tambah
    increaseButton.type = 'button';
    increaseButton.classList.add('btn', 'btn-primary');
    increaseButton.id = `btn-increase-${product.id}`
    increaseButton.textContent = '+';

    const submitButton = document.createElement('button'); // Tombol tambah
    submitButton.type = 'button';
    submitButton.classList.add('btn', 'btn-success', 'mt-2');
    submitButton.id = `btn-submit-${product.id}`
    submitButton.textContent= 'Tambah Barang'

    col.appendChild(card)
    col.appendChild(card)

    btnGroup.appendChild(decreaseButton)
    btnGroup.appendChild(quantityDisplay)
    btnGroup.appendChild(increaseButton)

    cardBody.appendChild(productName)
    cardBody.appendChild(productPrice)
    cardBody.appendChild(btnGroup)
    cardBody.appendChild(submitButton)
    card.appendChild(img)
    card.appendChild(cardBody)
    

    cardContainer.appendChild(col)
    const quantityProduct = document.getElementById(`quantity-${product.id}`)

    const decreaseButtonEvent = document.getElementById(`btn-decrease-${product.id}`)
    decreaseButtonEvent.addEventListener("click", ()=>{
        if(quant == 1){
            quant= 1;
        }else{
            quant-=1
        }
        quantityProduct.innerHTML = quant
    })
    const increaseButtonEvent = document.getElementById(`btn-increase-${product.id}`)
    increaseButtonEvent.addEventListener("click", ()=>{
        quant+=1
        quantityProduct.innerHTML = quant
    })

    const submitButtonEvent = document.getElementById(`btn-submit-${product.id}`)
    submitButton.addEventListener("click", ()=>{
        const kuant = parseInt(quantityProduct.textContent)
        const obj = {
            "id" : product.id,
            "nama": product.nama,
            "harga" : product.harga,
            "kuantitas" : kuant,
            "jumlah" : product.harga * kuant
        }

        addObjectToArray(obj)
        generateData();

        console.log(resultData)
    })

})




console.log(dataProduct)