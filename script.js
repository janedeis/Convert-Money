
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrency = document.querySelector(".inputCurrency").value;
    

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValue = document.querySelector(".currency-valor");
    
    const dollarTuday = 5.3; /*valor do dolar para text* para a aplicação*/
    const euroTuday = 8.9; /** valor do euro para text para a aplicação */
    const libraTuday = 6.06;
    const bitcoinTuday = 19.28;

    if(currencySelect.value == "dolar"){
        /*valor exibido da conversao da moeda para o dolar */
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency", 
            currency:"USD"
        }).format(inputCurrency / dollarTuday);
    }

    if(currencySelect.value == "euro"){
        /*valor exibido da conversao da moeda para o euro */
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency", 
            currency:"EUR"
        }).format(inputCurrency / euroTuday);
    }

    if(currencySelect.value == "libra"){
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB",{
            style:"currency", 
            currency:"GBP"
        }).format(inputCurrency / libraTuday);
    }

    if(currencySelect.value == "bitcoin"){
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency / bitcoinTuday );
    }
    
    /* valor do input quer sera mostrado do type for to the currency*/
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency", currency:"BRL"
    }).format(inputCurrency);  
        
    
}

function changeCurrency(){

    const currencyName = document.getElementById("currency-name");

    const currencyImg = document.querySelector(".currency-img");

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML="Dólar Americano";
        currencyImg.src="./assets/Dolar.png";;
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro";
        currencyImg.src="./assets/Euro.png";
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra";
        currencyImg.src ="./assets/libra.png";
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src ="./assets/bitcoin.png";
    }    

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);