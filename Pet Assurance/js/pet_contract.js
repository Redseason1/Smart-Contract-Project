//讀取合約飼主帳戶查閱寵物數量
async function contract_getPetCount(contract)
{
    try {
        var data = await contract.methods.getPetCount().call();
        return data;
    } catch (error) {
        console.log(error);
        alert("執行getPetCount失敗");
    }
}

//根據保單編號查詢所有相關內容:理賠原因、理賠帳戶、審核結果、理賠金額
async function contract_getDetailData(contract)
{
    try {
        var data = await contract.methods.getDetailData().call();
        return data;
    } catch (error) {
        console.log(error);
        alert("執行getDetailData失敗");
    }
}
//根據寵物ID查閱寵物資料
async function contract_getPetDataByID(contract)
{
    try {
        var data = await contract.methods.getPetDataByID().call();
        return data;
    } catch (error) {
        console.log(error);
        alert("執行getPetDataByID失敗");
    }
}







//設定合約管理者
async function contract_setContractOwner(contract, account)
{
    try {
        await contract.methods.setContractOwner(account).send({from: web3.eth.defaultAccount});
    } catch (error) {
        console.log(error);
        alert("執行setContractOwner失敗");
    }
}