//查詢合約票價
async function contract_priceOf(contract)
{
    try{
        var data = await contract.methods.priceOf_4().call();
        return data;
    }catch(error){
        console.log(error);
        alert("執行priceOf失敗");
    }
}

//查詢合約剩餘張數
async function contract_quantityOf(contract)
{
    try {
        var data = await contract.methods.quantityOf_5().call();
        return data;
    } catch (error) {
        console.log(error);
        alert("執行quantityOf失敗");
    }
}

//查詢代幣的名稱
async function contract_name(contract)
{
    try {
        var data = await contract.methods.name().call();      
        return data;
    } catch (error) {
        console.log(error);
        alert("執行name失敗");
    }
}

//查詢代幣的代稱
async function contract_symbol(contract)
{
    try {
        var data = await contract.methods.symbol().call();
        return data;
    } catch (error) {
        console.log(error);
        alert("執行symbol失敗");
    }
}

//查詢合約的管理者
async function contract_ownerOf(contract)
{
    try {
        var data = await contract.methods.ownerOf_14().call();
        return data;
    } catch (error) {
        console.log(error);
        alert("執行contract_ownerOf失敗");
    }
}

//取回代幣
async function contract_retrievecoin(contract)
{
    try{
        await contract.methods.retrievecoin_3().send({from: web3.eth.defaultAccount, value: value, gas:1000000});
    }catch(error){
        console.log(error);
        alert("執行retrievecoin失敗");
    }
}

//查詢代幣餘額
async function contract_balanceOf(contract)
{
    try{
        var data = await contract.methods.balanceOf_12(web3.eth.defaultAccount).call();
        return data;
    }catch(error){
        console.log(error);
        alert("執行balanceOf失敗");
    }
}

//查詢持有票券
async function contract_tickethold(contract)
{
    try{
        var data = await contract.methods.tickethold_7().call();
        return data;
    }catch(error){
        console.log(error);
        alert("執行tickethold失敗");
    }
}

//查詢掛賣中的二手票
async function contract_ticketstateOf(contract)
{
    try{
        var data = await contract.methods.ticketstateOf_9().call();
        return data;
    }catch(error){
        console.log(error);
        alert("執行ticketstateOf失敗");
    }
}
