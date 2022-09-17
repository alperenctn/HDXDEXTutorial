import './App.css';
import React ,{useState, Component, useEffect} from "react";


function App() {
  
  useEffect(()=>{
      changeTabOnWallet(coinname);
    })

  //LEFTSİDE   
  const changeTab = (x) => {
    var idportfolio = document.getElementById("rightside-portfolio");
    var idwallet = document.getElementById("rightside-wallet");
    var iddex = document.getElementById("rightside-dex");
    var idvortex = document.getElementById("rightside-vortex");
    var idswap = document.getElementById("rightside-swap");
    var idsettings = document.getElementById("rightside-settings");
         idportfolio.style.display = "none"
         idwallet.style.display = "none"
         iddex.style.display = "none"
         idvortex.style.display = "none"
         idswap.style.display = "none"
         idsettings.style.display = "none"
    switch(x){
        case "portfolio":
         idportfolio.style.display = "block"
        return;
        case "wallets":
         idwallet.style.display = "block"
        return;
        case "dex":
          iddex.style.display = "block"
        return;
        case "vortex":
          idvortex.style.display = "block"
        return;
        case "swap":
          idswap.style.display = "block"
        return;
        case "settings":
          idsettings.style.display = "block"
        return;
        default:
        return null
    }
}
   //WALLET
    const [aethbalance,setAethBalance] = useState(0);
    const [btcbalance,setBtcBalance] = useState(0);
    const [ethbalance,setEthBalance] = useState(0);
    const [hdxbalance,setHdxBalance] = useState(0);
    const [ltcbalance,setLtcBalance] = useState(0);
    const [usdcbalance,setUsdcBalance] = useState(0);
    const [usdtbalance,setUsdtBalance] = useState(0);

    const [aethbalanceL2,setAethBalanceL2] = useState(0);
    const [btcbalanceL2,setBtcBalanceL2] = useState(0);
    const [ethbalanceL2,setEthBalanceL2] = useState(0);
    const [hdxbalanceL2,setHdxBalanceL2] = useState(0);
    const [ltcbalanceL2,setLtcBalanceL2] = useState(0);
    const [usdcbalanceL2,setUsdcBalanceL2] = useState(0);
    const [usdtbalanceL2,setUsdtBalanceL2] = useState(0);

    const [aethbalanceCR,setAethBalanceCR] = useState(0);
    const [btcbalanceCR,setBtcBalanceCR] = useState(0);
    const [ethbalanceCR,setEthBalanceCR] = useState(0);
    const [hdxbalanceCR,setHdxBalanceCR] = useState(0);
    const [ltcbalanceCR,setLtcBalanceCR] = useState(0);
    const [usdcbalanceCR,setUsdcBalanceCR] = useState(0);
    const [usdtbalanceCR,setUsdtBalanceCR] = useState(0);

    const [img,setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg");
    const [walletName,setWalletName] = useState("BTC Wallet");
    const [coinPrice, setCoinPrice] = useState("1 BTC = 100 usd");
    const [balanceValue, setBalanceValue] = useState(btcbalance*1000)
    const [coinname,setCoinname] = useState("BTC")
    const [inputValue,setInputValue] = useState(0)
    const [inputDuration,setInputDuration] = useState(0)
    const [balance,setBalance] = useState(btcbalance);
    const [balanceL2,setBalanceL2] = useState(btcbalanceL2);
    const [balanceCR,setBalanceCR] = useState(btcbalanceL2);
    var totalBalance = (btcbalance+btcbalanceL2)*1000+(aethbalance+aethbalanceL2)*100+
        (ethbalance+ethbalanceL2)*100+hdxbalance+hdxbalanceL2+(ltcbalance+ltcbalanceL2)*10+
        usdcbalance+usdcbalanceL2+usdtbalance+usdtbalanceL2;
    
    const BTC = "BTC"
    const LTC = "LTC"
    const AETH = "AETH"
    const ETH = "ETH"
    const HDX = "HDX"
    const USDC = "USDC"
    const USDT = "USDT"
    
    const changeTabOnWallet = (x) => {
        switch(x){
            case "AETH":
             setBalance(aethbalance);
             setImg("https://imgyukle.com/f/2022/09/12/nheXFs.png");
             setWalletName("AETH Wallet")
             setCoinPrice("(1 AETH = 100 usd)");
             setBalanceValue((aethbalance+aethbalanceL2)*100);
             setCoinname("AETH")
             setBalanceL2(aethbalanceL2)
             changeTable(coinname);
             setBalanceCR(aethbalanceCR);
            return;
            case "BTC":
             setBalance(btcbalance);
             setImg("https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg");
             setWalletName("BTC Wallet")
             setCoinPrice("(1 BTC = 1000 usd)");
             setBalanceValue((btcbalance+btcbalanceL2)*1000);
             setCoinname("BTC")
             setBalanceL2(btcbalanceL2)
             changeTable(coinname);
             setBalanceCR(btcbalanceCR);
            return;
            case "ETH":
             setBalance(ethbalance);
             setImg("https://imgyukle.com/f/2022/09/11/nhC0It.png");
             setWalletName("ETH Wallet")
             setCoinPrice("(1 ETH = 100 usd)");
             setBalanceValue((ethbalance+ethbalanceL2)*100);
             setCoinname("ETH")
             setBalanceL2(ethbalanceL2)
             changeTable(coinname);
             setBalanceCR(ethbalanceCR);
            return;
            case "HDX":
             setBalance(hdxbalance);
             setImg("https://imgyukle.com/f/2022/09/11/nhSkiN.png");
             setWalletName("HDX Wallet")
             setCoinPrice("(1 HDX = 1 usd)");
             setBalanceValue(hdxbalance+hdxbalanceL2);
             setCoinname("HDX")
             setBalanceL2(hdxbalanceL2)
             changeTable(coinname);
             setBalanceCR(hdxbalanceCR);
            return;
            case "LTC":
             setBalance(ltcbalance);
             setImg("https://imgyukle.com/f/2022/09/11/nhSym6.png");
             setWalletName("LTC Wallet")
             setCoinPrice("(1 LTC = 10 usd)");
             setBalanceValue((ltcbalance+ltcbalanceL2)*10);
             setCoinname("LTC")
             setBalanceL2(ltcbalanceL2)
             changeTable(coinname);
             setBalanceCR(ltcbalanceCR);
            return;
            case "USDC":
             setBalance(usdcbalance);
             setImg("https://imgyukle.com/f/2022/09/11/nhSxiM.png");
             setWalletName("USDC Wallet")
             setCoinPrice("(1 USDC = 1 usd)");
             setBalanceValue((usdcbalance+usdcbalanceL2)*1);
             setCoinname("USDC")
             setBalanceL2(usdcbalanceL2)
             changeTable(coinname);
             setBalanceCR(usdcbalanceCR);
            return;
            case "USDT":
             setBalance(usdtbalance);
             setImg("https://cryptologos.cc/logos/tether-usdt-logo.png?v=023");
             setWalletName("USDT Wallet")
             setCoinPrice("(1 USDT = 1 usd)");
             setBalanceValue(usdtbalance+usdtbalanceL2);
             setCoinname("USDT")
             setBalanceL2(usdtbalanceL2)
             changeTable(coinname);
             setBalanceCR(usdtbalanceCR);
            return;
            default:
            return null
        }
    }

    
    const btnonclickreceive = () => {
    var modal1 = document.getElementById("myModal-receive");
    modal1.style.display = "block";
    }
    const spanonclickreceive = () => {
      var modal1 = document.getElementById("myModal-receive");
    modal1.style.display = "none";
    }
    const btnonclicksend = () => {
    var modal2 = document.getElementById("myModal-send");
    modal2.style.display = "block";
    }
    const spanonclicksend = () => {
    var modal2 = document.getElementById("myModal-send");
    modal2.style.display = "none";
    }
    const btnonclicknewchannel = () => {
    var modal3 = document.getElementById("myModal-newchannel");
    modal3.style.display = "block";
    }
    const spanonclicknewchannel = () => {
    var modal3 = document.getElementById("myModal-newchannel");
    modal3.style.display = "none";
    }
    const btnonclicknewrental = () => {
    var modal4 = document.getElementById("myModal-newrental");
    modal4.style.display = "block";
    }
    const spanonclicknewrental = () => {
    var modal4 = document.getElementById("myModal-newrental");
    modal4.style.display = "none";
    }
    const btnonclicktutorial1 = () => {
    var modal5 = document.getElementById("myModal-tutorial1");
    modal5.style.display = "block";
    }
    const spanonclicktutorial1 = () => {
    var modal5 = document.getElementById("myModal-tutorial1");
    modal5.style.display = "none";
    }
    var openorderbookid = document.getElementById("dex-orderbook-orderbook");
    var openopenordersid = document.getElementById("dex-orderbook-openorders");
    var openmytradehistoryid = document.getElementById("dex-orderbook-myorderhistory");
    var openorderbookbottomid = document.getElementById("dex-orderbook-order-bottoms");
    
    
    const openorderbook = () => {
    openorderbookid.style.display = "block";
    openopenordersid.style.display = "none";
    openmytradehistoryid.style.display = "none";
    openorderbookbottomid.style.display = "block"
    }
    const openopenorders = () => {
    openorderbookid.style.display = "none";
    openopenordersid.style.display = "block";
    openmytradehistoryid.style.display = "none";
    openorderbookbottomid.style.display = "none"
    }
    const openmytradehistory = () => {
    openorderbookid.style.display = "none";
    openopenordersid.style.display = "none";
    openmytradehistoryid.style.display = "block";
    openorderbookbottomid.style.display = "none"
    }
    
    const depositeBalance = (y) =>{
        const x = document.getElementById("inputdeposite");
        switch(y){
            case "AETH":
             setAethBalance(Number(aethbalance)+Number(x.value));
             spanonclickreceive();
             x.value=""
             changeTabOnWallet(coinname);
            return;
            case "BTC":
              setBtcBalance(Number(btcbalance)+Number(x.value));
              changeTabOnWallet(coinname);
              spanonclickreceive();
              x.value=""
             return;
             case "ETH":
              setEthBalance(Number(ethbalance)+Number(x.value));
              changeTabOnWallet(coinname);
              spanonclickreceive();
              x.value=""
             return;
             case "HDX":
              setHdxBalance(Number(hdxbalance)+Number(x.value));
              changeTabOnWallet("HDX");
              spanonclickreceive();
              x.value=""
             return;
             case "LTC":
              setLtcBalance(Number(ltcbalance)+Number(x.value));
              changeTabOnWallet("LTC");
              spanonclickreceive();
              x.value=""
             return;
             case "USDC":
              setUsdcBalance(Number(usdcbalance)+Number(x.value));
              changeTabOnWallet("USDC");
              spanonclickreceive();
              x.value=""
             return;
             case "USDT":
              setUsdtBalance(Number(usdtbalance)+Number(x.value));
              changeTabOnWallet("USDT");
              spanonclickreceive();
              x.value=""
             return;
             default:
             return null
        }
    }
    const depositeL2Balance = (y) =>{
      const x = document.getElementById("newchannelinput");
      if(x.value>balance) {
        alert("Not Enough Balance") 
        return;
      }

      const tableChannelbtc = document.getElementById("tableChannelbtc");
      const tableChannelaeth = document.getElementById("tableChannelaeth");
      const tableChanneleth = document.getElementById("tableChanneleth");
      const tableChannelhdx = document.getElementById("tableChannelhdx");
      const tableChannelltc = document.getElementById("tableChannelltc");
      const tableChannelusdc = document.getElementById("tableChannelusdc");
      const tableChannelusdt = document.getElementById("tableChannelusdt");
      let tr = document.createElement("tr");
      let tdchannel = document.createElement("td");
      let tdstatus = document.createElement("td");
      let tdcansend = document.createElement("td");
      let tdcanreceive = document.createElement("td");
      let tdrentaltime = document.createElement("td");
      tdchannel.textContent="Channel";
      tdstatus.textContent="Active";
      if(x.value==0){
        tdcansend.textContent=0;
      }else{
        tdcansend.textContent=x.value;
      }
      
      tdcanreceive.textContent=inputValue;
      if(inputDuration==0){
        tdrentaltime.textContent="";
      }else{
        tdrentaltime.textContent=inputDuration;
      }
      
      tr.appendChild(tdchannel);
      tr.appendChild(tdstatus);
      tr.appendChild(tdcansend);
      tr.appendChild(tdcanreceive);
      tr.appendChild(tdrentaltime);
      
      switch(y){
          case "AETH":
           setAethBalanceCR(Number(aethbalanceCR)+Number(inputValue))
           setAethBalance(Number(aethbalance)-Number(x.value));
           setAethBalanceL2(Number(aethbalanceL2)+Number(x.value));
           changeTabOnWallet("AETH");
           spanonclicknewchannel();
           spanonclicknewrental();
           tableChannelaeth.appendChild(tr)
           x.value=""
           setInputDuration(0);
           setInputValue(0);
          return;
          case "BTC":
            setBtcBalanceCR(Number(btcbalanceCR)+Number(inputValue))
            setBtcBalance(Number(btcbalance)-Number(x.value));
            setBtcBalanceL2(Number(btcbalanceL2)+Number(x.value));
            spanonclicknewchannel();
            spanonclicknewrental();
            x.value=""
            changeTabOnWallet("BTC");
            tableChannelbtc.appendChild(tr)
            setInputDuration(0);
            setInputValue(0);
           return;
           case "ETH":
            setEthBalanceCR(Number(ethbalanceCR)+Number(inputValue))
            setEthBalance(Number(ethbalance)-Number(x.value));
            setEthBalanceL2(Number(ethbalanceL2)+Number(x.value));
            changeTabOnWallet("ETH");
            spanonclicknewchannel();
            spanonclicknewrental();
            x.value=""
            tableChanneleth.appendChild(tr)
            setInputDuration(0);
            setInputValue(0);
           return;
           case "HDX":
            setHdxBalanceCR(Number(hdxbalanceCR)+Number(inputValue))
            setHdxBalance(Number(hdxbalance)-Number(x.value));
            setHdxBalanceL2(Number(hdxbalanceL2)+Number(x.value));
            changeTabOnWallet("HDX");
            spanonclicknewchannel();
            spanonclicknewrental();
            x.value=""
            tableChannelhdx.appendChild(tr)
            setInputDuration(0);
            setInputValue(0);
           return;
           case "LTC":
            setLtcBalanceCR(Number(ltcbalanceCR)+Number(inputValue))
            setLtcBalance(Number(ltcbalance)-Number(x.value));
            setLtcBalanceL2(Number(ltcbalanceL2)+Number(x.value));
            changeTabOnWallet("LTC");
            spanonclicknewchannel();
            spanonclicknewrental();
            x.value=""
            tableChannelltc.appendChild(tr)
            setInputDuration(0);
            setInputValue(0);
           return;
           case "USDC":
            setUsdcBalanceCR(Number(usdcbalanceCR)+Number(inputValue))
            setUsdcBalance(Number(usdcbalance)-Number(x.value));
            setUsdcBalanceL2(Number(usdcbalanceL2)+Number(x.value));
            changeTabOnWallet("USDC");
            spanonclicknewchannel();
            spanonclicknewrental();
            x.value=""
            tableChannelusdc.appendChild(tr)
            setInputDuration(0);
            setInputValue(0);
           return;
           case "USDT":
            setUsdtBalanceCR(Number(usdtbalanceCR)+Number(inputValue))
            setUsdtBalance(Number(usdtbalance)-Number(x.value));
            setUsdtBalanceL2(Number(usdtbalanceL2)+Number(x.value));
            changeTabOnWallet("USDT");
            spanonclicknewchannel();
            spanonclicknewrental();
            x.value=""
            tableChannelusdt.appendChild(tr)
            setInputDuration(0);
            setInputValue(0);
           return;
           default:
           return null
      }
  }
  const changeTable = (x) => {
    var idbtc = document.getElementById("tableChannelbtc");
    var idaeth = document.getElementById("tableChannelaeth");
    var ideth = document.getElementById("tableChanneleth");
    var idhdx = document.getElementById("tableChannelhdx");
    var idltc = document.getElementById("tableChannelltc");
    var idusdc = document.getElementById("tableChannelusdc");
    var idusdt = document.getElementById("tableChannelusdt");
          idbtc.style.display = "none"
          idaeth.style.display = "none"
          ideth.style.display = "none"
          idhdx.style.display = "none"
          idltc.style.display = "none"
          idusdc.style.display = "none"
          idusdt.style.display = "none"
    switch(x){
        case "AETH":
          idaeth.style.display = "block"
        return;
        case "BTC":
          idbtc.style.display = "block"
        return;
        case "ETH":
          ideth.style.display = "block"
        return;
        case "HDX":
          idhdx.style.display = "block"
        return;
        case "LTC":
          idltc.style.display = "block"
        return;
        case "USDC":
          idusdc.style.display = "block"
        return;
        case "USDT":
          idusdt.style.display = "block"
        return;
        default:
        return null
    }
}
    const changetochannels = () => {
        const chnl = document.getElementById("wallet-channels-tab")
        const tx = document.getElementById("wallets-tx-tab")
        chnl.style.display = "block"
        tx.style.display = "none"
    }
    const changetotxs = () => {
        const chnl = document.getElementById("wallet-channels-tab")
        const tx = document.getElementById("wallets-tx-tab")
        chnl.style.display = "none"
        tx.style.display = "block"
    }
    //dex tab

    const [element,setElement] = useState("")
    useEffect(()=>{
        changePair()
    })

    const [selectedPair1L2,setSelectedPair1L2] = useState(0)
    const [selectedPair1CR,setSelectedPair1CR] = useState(0)
    const [selectedPair1img,setSelectedPair1img] = useState("")
    const [selectedPair2img,setSelectedPair2img] = useState("")
    const [selectedPair2L2,setSelectedPair2L2] = useState(0)
    const [selectedPair2CR,setSelectedPair2CR] = useState(0)
    const [selectedPair1L2Value,setSelectedPair1L2Value] = useState(0)
    const [selectedPair1CRValue,setSelectedPair1CRValue] = useState(0)
    const [selectedPair2L2Value,setSelectedPair2L2Value] = useState(0)
    const [selectedPair2CRValue,setSelectedPair2CRValue] = useState(0)
    const [button,setButton] = useState("buy")
    const [firstCoin,setFirstCoin] = useState("")
    const [secondCoin,setSecondCoin] = useState("")

    
    const changePair = () => {
        switch(element){
            case "BTC/USDT":
                setSelectedPair1L2(btcbalanceL2+" BTC");
                setSelectedPair2L2(usdtbalanceL2+" USDT");
                setSelectedPair1CR(btcbalanceCR);
                setSelectedPair2CR(usdtbalanceCR);
                setSelectedPair1L2Value(btcbalanceL2*1000);
                setSelectedPair1CRValue(btcbalanceCR*1000);
                setSelectedPair2L2Value(usdtbalanceL2);
                setSelectedPair2CRValue(usdtbalanceCR);
                setSelectedPair1img("https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg")
                setSelectedPair2img("https://cryptologos.cc/logos/tether-usdt-logo.png?v=023")
                setFirstCoin("BTC")
                setSecondCoin("USDT")
                return;
            case "AETH/HDX":
                setSelectedPair1L2(aethbalanceL2+" AETH");
                setSelectedPair2L2(hdxbalanceL2+" HDX");
                setSelectedPair1CR(aethbalanceCR);
                setSelectedPair2CR(hdxbalanceCR);
                setSelectedPair1L2Value(aethbalanceL2*100);
                setSelectedPair1CRValue(aethbalanceCR*100);
                setSelectedPair2L2Value(hdxbalanceL2);
                setSelectedPair2CRValue(hdxbalanceCR);
                setSelectedPair1img("https://imgyukle.com/f/2022/09/12/nheXFs.png")
                setSelectedPair2img("https://imgyukle.com/f/2022/09/11/nhSkiN.png")
                setFirstCoin("AETH")
                setSecondCoin("HDX")
                return;
            case "BTC/LTC":
                setSelectedPair1L2(btcbalanceL2+" BTC");
                setSelectedPair2L2(ltcbalanceL2+" LTC");
                setSelectedPair1CR(btcbalanceCR);
                setSelectedPair2CR(ltcbalanceCR);
                setSelectedPair1L2Value(btcbalanceL2*1000);
                setSelectedPair1CRValue(btcbalanceCR*1000);
                setSelectedPair2L2Value(ltcbalanceL2*10);
                setSelectedPair2CRValue(ltcbalanceCR*10);
                setSelectedPair1img("https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg")
                setSelectedPair2img("https://imgyukle.com/f/2022/09/11/nhSym6.png")
                setFirstCoin("BTC")
                setSecondCoin("LTC")
                return;
            case "BTC/ETH":
                setSelectedPair1L2(btcbalanceL2+" BTC");
                setSelectedPair2L2(ethbalanceL2+" ETH");
                setSelectedPair1CR(btcbalanceCR);
                setSelectedPair2CR(ethbalanceCR);
                setSelectedPair1L2Value(btcbalanceL2*1000);
                setSelectedPair1CRValue(btcbalanceCR*1000);
                setSelectedPair2L2Value(ethbalanceL2*100);
                setSelectedPair2CRValue(ethbalanceCR*100);
                setSelectedPair1img("https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg")
                setSelectedPair2img("https://imgyukle.com/f/2022/09/11/nhC0It.png")
                setFirstCoin("BTC")
                setSecondCoin("ETH")
                return;
            default:
                return null;
        }
    }

    const [buyPrice,setBuyPrice] = useState("");
    const [tradeAmount,settradeAmount] = useState("")
    const [totalAmount,setTotalAmount] = useState("")
    

    var buyPriceInput = document.getElementById("dex-input1")
    var tradeAmountInput = document.getElementById("dex-input2")
    var totalAmountInput = document.getElementById("dex-input3")
    useEffect(()=>{
        setTotalAmount(buyPrice*tradeAmount)
    })
    const enterBuyOrder = () => {
        setButton("sell")
        setBuyPrice(990)
        settradeAmount(1)
        setTotalAmount(buyPrice*tradeAmount)
        buyPriceInput.value = buyPrice;
        tradeAmountInput.value = tradeAmount;
        totalAmountInput.value = totalAmount
    }
    const enterSellOrder = () => {
        setButton("buy")
        setBuyPrice(1100)
        settradeAmount(1)
        setTotalAmount(buyPrice*tradeAmount)
        buyPriceInput.value = buyPrice;
        tradeAmountInput.value = tradeAmount;
        totalAmountInput.value = totalAmount
    }
    const buyFnc = () => {
        switch(element){
            case "BTC/USDT":
                if(btcbalanceL2<tradeAmount){ 
                    alert("You don't have enough 'can send' balance for BTC. Please open new btc channel")
                    return;
                }else if(usdtbalanceCR<totalAmount){
                    alert("You don't have enough 'can receive' balance for USDt. Please rent new usdt channel")
                    return;
                }
                setBtcBalanceL2(btcbalanceL2-tradeAmount)
                setBtcBalanceCR(Number(btcbalanceCR)+Number(tradeAmount))
                setUsdtBalanceL2(usdtbalanceL2+totalAmount)
                setUsdtBalanceCR(usdtbalanceCR-totalAmount)
                addOrderHistory(tradeAmount,buyPrice,"sell")
                return;
            case "AETH/HDX":
                if(aethbalanceL2<tradeAmount){ 
                    alert("You don't have enough 'can send' balance for AETH. Please open new AETH channel")
                    return;
                }else if(hdxbalanceCR<totalAmount){
                    alert("You don't have enough 'can receive' balance for HDX. Please rent new HDX channel")
                    return;
                }
                setAethBalanceL2(aethbalanceL2-tradeAmount)
                setAethBalanceCR(Number(aethbalanceCR)+Number(tradeAmount))
                setHdxBalanceL2(hdxbalanceL2+totalAmount)
                setHdxBalanceCR(hdxbalanceCR-totalAmount)
                addOrderHistory(tradeAmount,buyPrice,"sell")
                return;
            case "BTC/LTC":
                if(btcbalanceL2<tradeAmount){ 
                    alert("You don't have enough 'can send' balance for BTC. Please open new BTC channel")
                    return;
                }else if(ltcbalanceCR<totalAmount){
                    alert("You don't have enough 'can receive' balance for LTC. Please rent new LTC channel")
                    return;
                }
                setBtcBalanceL2(btcbalanceL2-tradeAmount)
                setBtcBalanceCR(Number(btcbalanceCR)+Number(tradeAmount))
                setLtcBalanceL2(ltcbalanceL2+totalAmount)
                setLtcBalanceCR(ltcbalanceCR-totalAmount)
                addOrderHistory(tradeAmount,buyPrice,"sell")
                return;
            case "BTC/ETH":
                if(btcbalanceL2<tradeAmount){ 
                    alert("You don't have enough 'can send' balance for btc. Please open new btc channel")
                    return;
                }else if(ethbalanceCR<totalAmount){
                    alert("You don't have enough 'can receive' balance for ETH. Please rent new ETH channel")
                    return;
                }
                setBtcBalanceL2(btcbalanceL2-tradeAmount)
                setBtcBalanceCR(Number(btcbalanceCR)+Number(tradeAmount))
                setEthBalanceL2(ethbalanceL2+totalAmount)
                setEthBalanceCR(ethbalanceCR-totalAmount)
                addOrderHistory(tradeAmount,buyPrice,"sell")
                return;
            default:
                return null;
        }
    }
    const sellFnc = () => {
        switch(element){
            case "BTC/USDT":
                if(btcbalanceCR<tradeAmount){ 
                    alert("You don't have enough 'can receive' balance for BTC. Please rent new btc channel")
                    return;
                }else if(usdtbalanceL2<totalAmount){
                    alert("You don't have enough 'can send' balance for USDt. Please rent new usdt channel")
                    return;
                }
                setBtcBalanceL2(btcbalanceL2+tradeAmount)
                setBtcBalanceCR(btcbalanceCR-tradeAmount)
                setUsdtBalanceL2(usdtbalanceL2-totalAmount)
                setUsdtBalanceCR(usdtbalanceCR+totalAmount)
                addOrderHistory(tradeAmount,buyPrice,"buy")
                return;
            case "AETH/HDX":
                if(aethbalanceCR<tradeAmount){ 
                    alert("You don't have enough 'can receive' balance for AETH. Please rent new AETH channel")
                    return;
                }else if(hdxbalanceL2<totalAmount){
                    alert("You don't have enough 'can send' balance for hdx. Please rent new hdx channel")
                    return;
                }
                setAethBalanceL2(aethbalanceL2+tradeAmount)
                setAethBalanceCR(aethbalanceCR-tradeAmount)
                setHdxBalanceL2(hdxbalanceL2-totalAmount)
                setHdxBalanceCR(hdxbalanceCR+totalAmount)
                addOrderHistory(tradeAmount,buyPrice,"buy")                
                return;
            case "BTC/LTC":
                if(btcbalanceCR<tradeAmount){ 
                    alert("You don't have enough 'can receive' balance for BTC. Please rent new BTC channel")
                    return;
                }else if(ltcbalanceL2<totalAmount){
                    alert("You don't have enough 'can send' balance for LTC. Please rent new LTC channel")
                    return;
                }
                setBtcBalanceL2(btcbalanceL2+tradeAmount)
                setBtcBalanceCR(btcbalanceCR-tradeAmount)
                setLtcBalanceL2(ltcbalanceL2-totalAmount)
                setLtcBalanceCR(ltcbalanceCR+totalAmount)
                addOrderHistory(tradeAmount,buyPrice,"buy")
                return;
            case "BTC/ETH":
                if(btcbalanceCR<tradeAmount){ 
                    alert("You don't have enough 'can receive' balance for BTC. Please rent new BTC channel")
                    return;
                }else if(ethbalanceL2<totalAmount){
                    alert("You don't have enough 'can send' balance for ETH. Please rent new ETH channel")
                    return;
                }
                setBtcBalanceL2(btcbalanceL2+tradeAmount)
                setBtcBalanceCR(btcbalanceCR-tradeAmount)
                setEthBalanceL2(ethbalanceL2-totalAmount)
                setEthBalanceCR(ethbalanceCR+totalAmount)
                addOrderHistory(tradeAmount,buyPrice,"buy")
                return;
            default:
                return null;
        }
    }
    
    const addOrderHistory = (a,b,c) => {
        const dexrightside = document.getElementById("dex-rightside")
        let div = document.createElement("div")
        let divinfo1 = document.createElement("div")
        let divinfo2 = document.createElement("div")
        let divinfo3 = document.createElement("div")
        let divinfo4 = document.createElement("div")
        var tarih=new Date();
        var yil=tarih.getFullYear();
        var ay=tarih.getMonth();
        var gun=tarih.getDay();
        var saat=tarih.getHours();
        var dakika=tarih.getMinutes();
        var saniye=tarih.getSeconds();	
	    var tarih = (yil+"/"+ay+"/"+gun+" "+saat+":"+dakika+":"+saniye);
        div.className = "dex-orderbook-order"
        divinfo1.textContent =a;
        divinfo1.className = "dex-orderbook-order-infox"
        divinfo2.textContent = tarih;
        divinfo2.className = "dex-orderbook-order-info-timex"
        divinfo3.textContent = b;
        divinfo3.className = "dex-orderbook-order-info-sellpricex"
        divinfo4.textContent = b;
        divinfo4.className = "dex-orderbook-order-info-buypricex"
        div.appendChild(divinfo1)
        div.appendChild(divinfo2)
        if(c=="buy"){
            div.appendChild(divinfo4)
        }else{
            div.appendChild(divinfo3)
        }
        
        dexrightside.appendChild(div)
    }

    const openTutorial = (evt, name) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("turorial-content");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("turorial-title");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        evt.currentTarget.className += " active";
      }

        
  
 
      const tutorial1 = (e) => {
        changeTab("wallets")
        changeTabOnWallet("BTC")
        btnonclicktutorial1();
        document.documentElement.scrollTop = 0
      }
  return (

    <div className="App">
        <div className="titles">
            <div className="title">HYDRANET DEX SIMULATION/TUTORIAL</div>
        </div>
        <div className="App1">
        <div className="dex">
            <div className="leftside">
                <div style={{"fontSize":"13px"}}>
                    <img className="hdxlogo "src="https://imgyukle.com/f/2022/09/15/nBunRI.png"/>
                    
                </div>
                <hr className="hr"/>
                <div style={{"fontSize":"10px"}}>My Balance</div>
                <div style={{"fontSize":"13px"}}>${totalBalance}</div>
                <div className="left-tab-names">
                    <img src="https://imgyukle.com/f/2022/09/15/nBystI.png" className="left-img"/>
                    <div className="left-tab-name" onClick={()=> changeTab("portfolio")}>Portfolio</div>
                    <img src="https://imgyukle.com/f/2022/09/15/nBCdQR.png" className="left-img"/>
                    <div className="left-tab-name" onClick={()=> changeTab("wallets")}>Wallets</div>
                    <img src="https://imgyukle.com/f/2022/09/15/nBSw2n.png" className="left-img"/>
                    <div className="left-tab-name" onClick={()=> changeTab("dex")}>Dex</div>
                    <img src="https://imgyukle.com/f/2022/09/15/nBS078.png" className="left-img"/>
                    <div className="left-tab-name" onClick={()=> changeTab("vortex")}>Vortex</div>
                    <img src="https://imgyukle.com/f/2022/09/15/nBSnw0.png" className="left-img"/>
                    <div className="left-tab-name" onClick={()=> changeTab("swap")}>Swap</div>
                </div>
                
                <div className="left-tab-name-setting" onClick={()=> changeTab("settings")}>
                    <img src="https://imgyukle.com/f/2022/09/15/nBSVKY.png" className="left-img"/>Settings</div>
            </div>
            <div className="rightside-portfolio" id="rightside-portfolio">
                <p style={{"float":"left", "marginLeft":"80px"}}>Portfolio</p>
                <div className="portfolio-balance"><div style={{"position":"absolute", "marginLeft":"5%","marginTop":"20px"}}>${totalBalance}</div></div>
                <div style={{"marginTop":"0px"}}>
                    <div style={{"marginTop":"40px"}}>
                        <div style={{"position":"absolute", "marginLeft":"5%"}}> Wallets </div>
                        <div >Search Wallets</div>
                    </div>
                    
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">Currency</div>
                            <div className="portfolio-currency-left-balance">Balance</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">Portfolio</div>
                            <div className="portfolio-currency-right-sendreceive">
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"/>
                            </div> 
                            <div className="portfolio-currency-left-name">Bitcoin BTC</div>
                            <div className="portfolio-currency-left-balance">{btcbalance+btcbalanceL2} BTC (${(btcbalance+btcbalanceL2)*1000})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((btcbalance+btcbalanceL2)*1000/totalBalance*100).toFixed(2)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send">Send</div>
                                <div className="portfolio-currency-right-receive">Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img  
                            style={{"width":"57px","height":"47x","marginLeft":"7px","marginTop":"-7px"}}
                            src="https://imgyukle.com/f/2022/09/11/ngblZM.png"/></div>
                            <div className="portfolio-currency-left-name" style={{"marginLeft":"-2px"}}>Arbitrum AETH</div>
                            <div className="portfolio-currency-left-balance">{aethbalance+aethbalanceL2} AETH (${(aethbalance+aethbalanceL2)*100})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((aethbalance+aethbalanceL2)*100/totalBalance*100).toString().slice(0,5)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send">Send</div>
                                <div className="portfolio-currency-right-receive">Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            src="https://imgyukle.com/f/2022/09/11/nhC0It.png"/>
                            </div>
                            <div className="portfolio-currency-left-name">Ethereum ETH</div>
                            <div className="portfolio-currency-left-balance">{ethbalance+ethbalanceL2} ETH (${(ethbalance+ethbalanceL2)*100})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((ethbalance+ethbalanceL2)*100/totalBalance*100).toString().slice(0,5)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send">Send</div>
                                <div className="portfolio-currency-right-receive">Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            src="https://imgyukle.com/f/2022/09/11/nhSkiN.png"/>   
                            </div>
                            <div className="portfolio-currency-left-name"> Hydranet HDX</div>   
                            <div className="portfolio-currency-left-balance">{hdxbalance+hdxbalanceL2} HDX (${hdxbalance+hdxbalanceL2})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((hdxbalance+hdxbalanceL2)/totalBalance*100).toString().slice(0,5)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send">Send</div>
                                <div className="portfolio-currency-right-receive">Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            src="https://imgyukle.com/f/2022/09/11/nhSym6.png"/>
                            </div>
                            <div className="portfolio-currency-left-name"> Litecoin LTC</div>  
                            <div className="portfolio-currency-left-balance">{ltcbalance+ltcbalanceL2} LTC (${(ltcbalance+ltcbalanceL2)*10})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((ltcbalance+ltcbalanceL2)*10/totalBalance*100).toString().slice(0,5)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send">Send</div>
                                <div className="portfolio-currency-right-receive">Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            style={{"width":"35px", "height":"35px", "marginRight":"0px","marginLeft":"17px"}} 
                            src="https://imgyukle.com/f/2022/09/11/nhSxiM.png"/>
                            </div>
                            <div className="portfolio-currency-left-name">USD Coin USDC</div>  
                            <div className="portfolio-currency-left-balance">{usdcbalance+usdcbalanceL2} USDC (${usdcbalance+usdcbalanceL2})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((usdcbalance+usdcbalanceL2)/totalBalance*100).toString().slice(0,5)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send">Send</div>
                                <div className="portfolio-currency-right-receive">Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            style={{"width":"30px", "height":"30px", "marginRight":"2px","marginLeft":"19px"}}
                            src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=023"/>
                            </div>
                            <div className="portfolio-currency-left-name">USD Tether USDT</div>  
                            <div className="portfolio-currency-left-balance">{usdtbalance+usdtbalanceL2} USDT (${usdtbalance+usdtbalanceL2})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((usdtbalance+usdtbalanceL2)/totalBalance*100).toString().slice(0,5)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send">Send</div>
                                <div className="portfolio-currency-right-receive">Receive</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightside-wallet" id="rightside-wallet">
                <div id="myModal-receive" class="modal-receive">
                    <div className="modal-content-receive">
                        <span className="close-receive" onClick={spanonclickreceive}>&times;</span>
                        <div className="modal-div1">
                            <div className="modal-imgdiv">
                                <img className="modal-img"src={img}/>
                            </div>  
                            <div className="modal-modal-asset-name">
                                <div className="modal-modal-asset-name1">Receive {coinname}</div>
                                <div className="modal-modal-asset-name2">ON-CHAIN : {balance} {coinname} = {balanceValue} USD</div>
                            </div>
                        </div>
                        <div >
                            <select className="modal-option">
                                <option>{coinname}</option>
                                <option>Lightning/Connext - {coinname}</option>
                            </select>
                        </div>
                        <div className="modal-warning">Send only BTC to this address. Sending any other 
                            digital asset will result in permanent loss.
                        </div>
                        <div className="modal-address">tb1qd73ex2x47e........5eg49c5er5qus3</div>
                        <img className="modal-copyimg"src="https://imgyukle.com/f/2022/09/11/nhyJnq.png"></img>
                        <ul className="modal-ul">
                            <li>  Coins will be deposited after 3 network confirmations.</li>
                            <li>You can check the progress on transaction page.</li>
                        </ul>
                    </div>
                    <div className="modal-content-deposite">
                        <div className="modal-content-deposite-header">DEPOSIT {coinname} to begin the Tutorial</div>
                        <div>
                            <input className="modal-content-deposite-input" id="inputdeposite" type="number" placeholder={coinname} />
                        </div>
                        <div>
                            <button className="modal-content-deposite-button" onClick={()=>depositeBalance(coinname)}>Deposit</button>
                        </div>
                    </div>
                </div>
                <div id="myModal-send" class="modal-send">
                    <div className="modal-content-send">
                        <span className="close-send" onClick={spanonclicksend}>&times;</span>
                        <div className="modal-div1">
                            <div className="modal-imgdiv">
                                <img className="modal-img"src={img}/>
                            </div>  
                            <div className="modal-modal-asset-name">
                                <div className="modal-modal-asset-name1">Receive {coinname}</div>
                                <div className="modal-modal-asset-name2">ON-CHAIN : {balance} {coinname} = {balanceValue} USD</div>
                            </div>
                        </div>
                        <input id="newchannelinput1"className='modal-input-send' type="number" min="1"
                        placeholder='Address'/>
                        <div className='modal-input-send-coinname'>{coinname}</div>
                        <input id="newchannelinput1"className='modal-input-send1' type="number" min="1"
                        placeholder='Amount'/>
                        <input id="newchannelinput1"className='modal-input-send2' type="number" min="1"
                        placeholder='Amount'/>
                        <div className='modal-input-send-usd'>USD</div>
                        <button className='modal-input-send-button'>MAX</button>
                        <button className='modal-input-send-button-send'>SEND</button>
                    </div>
                </div>
                <div id="myModal-newchannel" class="modal-newchannel">
                    <div className="modal-content-newchannel">
                        <span className="close-newchannel" onClick={spanonclicknewchannel}>&times;</span>
                        <div className="modal-div1">
                            <div className="modal-imgdiv">
                                <img className="modal-img"src={img}/>
                            </div>  
                            <div className="modal-modal-asset-name">
                                <div className="modal-modal-asset-name1">Open {coinname} Channel</div>
                                <div className="modal-modal-asset-name2">ON-CHAIN : {balance} {coinname} = {balanceValue} USD</div>
                            </div>
                        </div>
                        <div>
                            <select className="modal-option">
                                <option>{coinname}</option>                         
                            </select>
                        </div>
                        <select className="modal-input-newchannel-option">
                                <option>HUB Node 1  (a345sd687sf6g876a........dfgdfg786)</option>                         
                        </select>
                        <div >
                        <input id="newchannelinput"className='modal-input-newchannel' type="number" 
                        placeholder='Enter channel capacity (min = 1 , max = 200.000.000)'/>
                        </div>
                        <div className='modal-newchannel-bottom'>Network Fee Rate: " 1 satoshi/vbyte</div>
                        <div className='modal-newchannel-buttons'>
                            <button className='modal-newchannel-button'>LOW</button>
                            <button className='modal-newchannel-button'>MEDIUM</button>
                            <button className='modal-newchannel-button'>HIGH</button>
                        </div>
                        <div className='modal-newchannel-openbuttons'>
                        <button className='modal-newchannel-openbutton' onClick={()=>depositeL2Balance(coinname)}>OPEN</button>
                        </div>
                    </div>
                </div>
                <div id="myModal-newrental" class="modal-newrental">
                    <div className="modal-content-newrental">
                        <span className="close-newrental" onClick={spanonclicknewrental}>&times;</span>
                        <div className="modal-div-newrental">
                            <div className="modal-imgdiv">
                                <img className="modal-img"src={img}/>
                            </div>  
                            <div className="modal-modal-asset-name-newrental">
                                <div className="modal-modal-asset-name1">Rent {coinname} Channel</div>
                                <div className="modal-modal-asset-name2">ON-CHAIN : {balance} {coinname} = {balanceValue} USD</div>
                            </div>
                        </div>
                        <div>
                            <select className="modal-option-newrental">
                                <option>{coinname}</option>
                            </select>
                        </div>
                        
                        <div className='modal-newrental-inputs'>
                        <div  className='modal-newrental-inputs-header'>Capacity : {inputValue} Usd</div><div></div>
                        <input className="modal-newrental-input"type="range" id='1' max="10000"value={inputValue}  
                        onChange={(e)=>{setInputValue(e.target.value)}}/>
                        
                        </div>
                        <div className='modal-newrental-inputs'>
                        <div className='modal-newrental-inputs-header'>Duration{inputDuration } Day(s)</div>
                        <input className="modal-newrental-input" type="range" id='1'  max="7" value={inputDuration}  
                        onChange={(e)=>{setInputDuration(e.target.value)}}/>
                        </div>
                        <div className='modal-new-rental-bottom'><br/>Rental capacity<br/>Period<br/>
                            On chain fees(open+close)<br/>Rental fee<br/>Total
                        </div>
                        <div className='modal-new-rental-bottom1'><br/> : {inputValue}<br/> : {inputDuration} <br/>
                            : 0.0000001 BTC (2.5 Usd)<br/> : 0.0000001 BTC (0.25 Usd)<br/> : 0.00000011 BTC (2.75 Usd)
                        </div>
                        <div><button className="modal-newrental-button" type='button' onClick={()=>depositeL2Balance(coinname)}>CONFIRM</button></div>

                    </div>
                </div>
                <div id="myModal-tutorial1" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial1}>&times;</span>
                        <img className="tutorial1-img1"src="https://imgyukle.com/f/2022/09/17/npXfhf.png"/>
                        <div className="myModal-tutorial1-empty1"></div>
                        <div className="myModal-tutorial1-step1">STEP 1</div>
                        <img className="tutorial1-img2"src="https://imgyukle.com/f/2022/09/17/npXfhf.png"/>
                        <div className="myModal-tutorial1-empty2"></div>
                        <div className="myModal-tutorial1-step2">STEP 2</div>
                        <img className="tutorial1-img3"src="https://imgyukle.com/f/2022/09/17/npXfhf.png"/>
                        <div className="myModal-tutorial1-empty3"></div>
                        <div className="myModal-tutorial1-step3">STEP 3</div>
                    </div>
                </div>
                
            <div className="wallets-headers">
                <div className="wallets-header-transaction" onClick={changetotxs}><div className="transaction">TRANSACTIONS</div></div>
                
                <div className="wallets-header-channel" onClick={changetochannels}><div className="transaction">CHANNELS</div></div>
            </div>
            <div className="wallets-leftside">
                    <div style={{"textAlign":"left","padding":"10px","fontSize":"13px"}}>7 wallets total</div> 
                    <div>
                        <div className="wallets-coin" onClick={()=>changeTabOnWallet("AETH")}>
                            <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                            <img className="png" src="https://imgyukle.com/f/2022/09/11/ngblZM.png"/>
                            <div>Arbitrum - AETH</div>
                            <div>{aethbalance+aethbalanceL2} - AETH</div>
                            <div style={{"fontSize":"10px"}}>${(aethbalance+aethbalanceL2)*100}</div>
                        </div>
                        <div className="wallets-coin" onClick={()=>changeTabOnWallet("BTC")}>
                            <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                            <div className="png"><img className="pngb" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"/></div>
                            <div>Bitcoin - BTC</div>
                            <div>{btcbalance+btcbalanceL2} - BTC</div>
                            <div style={{"fontSize":"10px"}}>${(btcbalance+btcbalanceL2)*1000}</div>
                        </div>
                        <div className="wallets-coin" onClick={()=>changeTabOnWallet("ETH")}>
                            <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                            <div className="png"><img className="pngb" src="https://imgyukle.com/f/2022/09/11/nhC0It.png"/></div>
                            <div>Ethereum - ETH</div>
                            <div>{ethbalance+ethbalanceL2} - ETH</div>
                            <div style={{"fontSize":"10px"}}>${(ethbalance+ethbalanceL2)*100}</div>
                        </div>
                        <div className="wallets-coin" onClick={()=>changeTabOnWallet("HDX")}>
                            <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                            <div className="png"><img className="pngb" src="https://imgyukle.com/f/2022/09/11/nhSkiN.png"/></div>
                            <div>Hydranet - HDX</div>
                            <div>{hdxbalance+hdxbalanceL2} - HDX</div>
                            <div style={{"fontSize":"10px"}}>${hdxbalance+hdxbalanceL2}</div>
                        </div>
                        <div className="wallets-coin" onClick={()=>changeTabOnWallet("LTC")}>
                            <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                            <div className="png"><img className="pngb" src="https://imgyukle.com/f/2022/09/11/nhSym6.png"/></div>
                            <div>Litecoin - LTC</div>
                            <div>{ltcbalance+ltcbalanceL2} - LTC</div>
                            <div style={{"fontSize":"10px"}}>${(ltcbalance+ltcbalanceL2)*10}</div>
                        </div>
                        <div className="wallets-coin" onClick={()=>changeTabOnWallet("USDC")}>
                            <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                            <img className="png" style={{"width":"40px", "height":"40px", "marginRight":"17px","marginLeft":"12px"}} 
                            src="https://imgyukle.com/f/2022/09/11/nhSxiM.png"/>
                            <div>USD Coin - USDC</div>
                            <div>{usdcbalance+usdcbalanceL2} - USDC</div>
                            <div style={{"fontSize":"10px"}}>${usdcbalance+usdcbalanceL2}</div>
                        </div>
                        <div className="wallets-coin" onClick={()=>changeTabOnWallet("USDT")}>
                            <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                            <img className="png" style={{"width":"35px", "height":"40px", "marginRight":"17px","marginLeft":"16px"}}
                            src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=023"/>
                            <div>USD Tether - USDT</div>
                            <div>{usdtbalance+usdtbalanceL2} - USDT</div>
                            <div style={{"fontSize":"10px"}}>${usdtbalance+usdtbalanceL2}</div>
                        </div>
                    </div>
            </div>
            <div style={{"textAlign":"left","padding":"10px","fontSize":"15px","color":"white"}}>{walletName}</div>
            <div className="wallets-rightside">
                    <div className="wallets-balance">
                        <div className="wallets-balance-img">
                        <img className="png1" 
                            src={img}/>
                        </div>
                        <div className="wallets-balance-right">
                            <div>BALANCE</div>
                            <div className='wallet-balance-value'>${balanceValue}</div>
                            <div>
                                <div >{balance + balanceL2} {coinname}</div>
                               
                            </div> <div style={{"fontSize":"12px"}}>{coinPrice}</div>
                        </div>
                        <div className="wallets-send" onClick={btnonclicksend}>Send
                            <div className="wallets-send-img-div" >
                                <img src="https://imgyukle.com/f/2022/09/15/nBI3V6.png" className="wallets-send-img"/>
                            </div>
                        </div>
                        <div className="wallets-reveive" onClick={btnonclickreceive}>Receive
                            <div className="wallets-send-img-div">
                                <img src="https://imgyukle.com/f/2022/09/15/nBI1vq.png" className="wallets-send-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="wallets-slider">
                        <div className="wallets-slider-onchain-offchain">
                            <div className="wallets-slider-onchain">
                                <div>On Chain</div>
                                <div>{balance} {coinname}</div>
                            </div>
                            <div className="wallets-slider-offchain">
                                <div >Off Chain</div>
                                <div>{balanceL2} {coinname}</div>
                            </div>
                        </div>
                        <div className="slider">
                            <input type="range" className="slider"/>
                        </div>
                        <div className="input-bottom">
                            <div className="dex-refunds">DEX Refunds:<bold>0.00 USD</bold></div>
                            <div className="apply-button"><button className="apply-button1">Apply</button></div>
                            <div className="slider-ratio">45%</div>
                        </div>
                    </div>
                    <div className="wallet-channels-tab" id="wallet-channels-tab">
                        <div className="channels-tx-header">
                                <div className="channel-header">Channels</div>
                                <div className="channel-header1">Backup/Restore</div>
                                <div className="channel-header1" onClick={btnonclicknewrental}>Channel Rental</div>
                                <div className="channel-header1" onClick={btnonclicknewchannel}>New Channel+</div>
                                <div className="channel-header1">Public Key:026af0d8dbc266....
                                <img className="copyimg"src="https://imgyukle.com/f/2022/09/11/nhyJnq.png"></img>
                                </div>
                        </div>
                        <div className="wallets-tx-channels">
                            <div className="cansend-canreceive">
                                <div className="cansend">
                                    <div>CAN SEND</div>
                                    <div className="cansendreceive-balance">{balanceL2}</div>
                                    <div className="arrowdiv" >
                                    <img className="arrow" src="https://imgyukle.com/f/2022/09/12/nhZBgG.png"/>
                                </div>

                                </div>
                                <div class="meter"></div>
                                
                                <div className="canreceive"> 
                                    <div>CAN RECEIVE</div>
                                    <div className="cansendreceive-balance">{balanceCR}</div>
                                    <div className="arrowdiv2" >
                                    <img className="arrow" src="https://imgyukle.com/f/2022/09/12/nhZ38q.png"/>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        
                            <table id='tableChannelbtc' className="wallets-channels">
                                <tr className="wallets-channels-headers">
                                    <th className="wallet-channels-header">CHANNEL</th>
                                    <th className="wallet-channels-header">STATUS</th>
                                    <th className="wallet-channels-header">CAN SEND</th>
                                    <th className="wallet-channels-header">CAN RECEIVE</th>
                                    <th className="wallet-channels-header">RENTAL TIME</th>
                                </tr>
                            </table>
                        
                            <table id='tableChannelaeth' className="wallets-channels">
                                <tr className="wallets-channels-headers">
                                    <th className="wallet-channels-header">CHANNEL</th>
                                    <th className="wallet-channels-header">STATUS</th>
                                    <th className="wallet-channels-header">CAN SEND</th>
                                    <th className="wallet-channels-header">CAN RECEIVE</th>
                                    <th className="wallet-channels-header">RENTAL TIME</th>
                                </tr>
                            </table>
                        
                            <table id='tableChanneleth' className="wallets-channels">
                                <tr className="wallets-channels-headers">
                                    <th className="wallet-channels-header">CHANNEL</th>
                                    <th className="wallet-channels-header">STATUS</th>
                                    <th className="wallet-channels-header">CAN SEND</th>
                                    <th className="wallet-channels-header">CAN RECEIVE</th>
                                    <th className="wallet-channels-header">RENTAL TIME</th>
                                </tr>
                            </table>
                        
                            <table id='tableChannelhdx' className="wallets-channels">
                                <tr className="wallets-channels-headers">
                                    <th className="wallet-channels-header">CHANNEL</th>
                                    <th className="wallet-channels-header">STATUS</th>
                                    <th className="wallet-channels-header">CAN SEND</th>
                                    <th className="wallet-channels-header">CAN RECEIVE</th>
                                    <th className="wallet-channels-header">RENTAL TIME</th>
                                </tr>
                            </table>
                        
                            <table id='tableChannelltc' className="wallets-channels">
                                <tr className="wallets-channels-headers">
                                    <th className="wallet-channels-header">CHANNEL</th>
                                    <th className="wallet-channels-header">STATUS</th>
                                    <th className="wallet-channels-header">CAN SEND</th>
                                    <th className="wallet-channels-header">CAN RECEIVE</th>
                                    <th className="wallet-channels-header">RENTAL TIME</th>
                                </tr>
                            </table>
                        
                            <table id='tableChannelusdc' className="wallets-channels">
                                <tr className="wallets-channels-headers">
                                    <th className="wallet-channels-header">CHANNEL</th>
                                    <th className="wallet-channels-header">STATUS</th>
                                    <th className="wallet-channels-header">CAN SEND</th>
                                    <th className="wallet-channels-header">CAN RECEIVE</th>
                                    <th className="wallet-channels-header">RENTAL TIME</th>
                                </tr>
                            </table>
                        
                            <table id='tableChannelusdt' className="wallets-channels">
                                <tr className="wallets-channels-headers">
                                    <th className="wallet-channels-header">CHANNEL</th>
                                    <th className="wallet-channels-header">STATUS</th>
                                    <th className="wallet-channels-header">CAN SEND</th>
                                    <th className="wallet-channels-header">CAN RECEIVE</th>
                                    <th className="wallet-channels-header">RENTAL TIME</th>
                                </tr>
                            </table>
                        
                    </div>
                    <div id="wallets-tx-tab" className="wallets-tx-tab">
                        <div className="wallets-tx-tab-header">
                            <div className="wallets-tx-tab-transactions">Transactions</div>
                            <div >
                                <input className="wallets-tx-tab-transactions1" type="text" placeholder="Search Transactions"/>
                            </div>
                        </div>
                        <div className="wallets-txs">
                            <table id='tabletx' className="tabletx">
                                <tr className="wallets-channels-headers-tx">
                                    <th className="wallet-channels-header-tx">ACTIVITY</th>
                                    <th className="wallet-channels-header-tx">DATE</th>
                                    <th className="wallet-channels-header-tx">STATUS</th>
                                    <th className="wallet-channels-header-tx">BALANCE CHANGE</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightside-dex" id="rightside-dex">
                <div className="dex-leftside">
                    <div className="dex-dexheader-dex-online"> 
                        <div className="dex-dexheader">DEX</div>
                        <div  className="dex-dexheader-online">ONLINE</div>
                    </div>
                    <div className="dex-market">MARKET{element}</div>
                    <div className="dex-option">
                        <select className="dex-select" id="dex-select"  onChange={(e)=>setElement(e.target.value)}>
                            <option value="" selected disabled hidden>Select Pair</option>
                            <option value="BTC/USDT" >BTC/USDT</option>
                            <option value="ETH/USDC" disabled>ETH/USDC Coming soon..</option>
                            <option value="AETH/HDX" >AETH/HDX</option>
                            <option value="BTC/LTC" >BTC/LTC</option>
                            <option value="BTC/ETH" >BTC/ETH </option>
                        </select>
                    </div>
                    <div className="dex-firstcoin">
                        <div className="dex-firstcoin-img-div">
                            {selectedPair1img=="" ? null : <img className="dex-firstcoin-img"src={selectedPair1img}></img> }
                        </div>
                        <div className="dex-firstcoin-balance">
                            <div className='dex-firstcoin-balance-value'>{selectedPair1L2}</div> 
                            <br/> = ${selectedPair1L2Value} <br/> Can Receive: 
                            <br/>${selectedPair1CRValue}
                            
                        </div>
                    </div>
                    <div className="dex-secondcoin">
                        <div className="dex-firstcoin-img-div">
                        {selectedPair2img=="" ? null : <img className="dex-firstcoin-img"src={selectedPair2img}></img> }
                        </div >
                        <div className="dex-secondcoin-balance">
                        <div className='dex-firstcoin-balance-value'>{selectedPair2L2}</div>   
                        <br/> = ${selectedPair2L2Value} <br/> Can Receive: <br/>${selectedPair2CRValue} 
                        </div>
                    </div>
                    <div className="dex-buttons">
                        <div className="dex-buysell-button1">
                            <button className="dex-button1" onClick={()=>setButton("buy")}>Buy</button>
                            <button className="dex-button1"  onClick={()=>setButton("sell")}>Sell</button>
                        </div>
                        <div className="dex-buysell-button2">
                            <button className="dex-button2" onClick>Limit</button>
                            <button className="dex-button2" >Market</button>
                        </div>
                    </div>
                    <div className="dex-inputs">
                        <div>
                            <div className="dex-input-inside">{secondCoin}</div>
                            {button=="buy"? <div className="dex-input-top">Buy price</div> : 
                            <div className="dex-input-top">Sell price</div>}
                            
                            <input  className="dex-input1" id="dex-input1" type="number" value={buyPrice} 
                            onChange={(e)=>setBuyPrice(e.target.value)}></input>
                            
                        </div>
                        <div className="dex-input-number">$0.00</div>
                    </div>
                    <div className="dex-inputs">
                        <div>
                            <div className="dex-input-inside"> {firstCoin}</div>
                            {button=="buy"? <div className="dex-input-top">Amount to receive</div> : 
                            <div className="dex-input-top">Amount to spend</div>}
                            <input  className="dex-input2" id="dex-input2" type="number" value={tradeAmount} 
                            onChange={(e)=>settradeAmount(e.target.value)}></input></div>
                        <div className="dex-input-number">$0.00</div>
                    </div>
                    <div className="dex-ratio-numbers">
                        <div className="dex-ratio-number">25%</div>
                        <div className="dex-ratio-number">50%</div>
                        <div className="dex-ratio-number">75%</div>
                        <div className="dex-ratio-number">100%</div>
                    </div>
                    <div className="dex-input-inside2">{secondCoin}</div>
                    <div className="dex-inputs">
                        <div><input  className="dex-input2" id="dex-input3"type="number" placeholder="Total"  value={totalAmount} 
                            onChange={(e)=>setTotalAmount(e.target.value)}></input></div>
                        <div className="dex-input-number">$0.00</div>
                    </div>
                    <div style={{"fontSize":"10px"}}>Place order fee:0.000000001BTC</div>
                        {button == "buy" ? <div><button className="dex-buy-button" onClick={()=>sellFnc()}>BUY</button></div> : 
                    <div>
                        <button className="dex-sell-button" onClick={()=>buyFnc()} >SELL</button>
                    </div>}
                </div>
                <div className="dex-center">
                    <div className="dex-center-chart">
                        <div className="dex-center-btcusdt">BTC/USDT</div>
                        <img className="chart" src="https://imgyukle.com/f/2022/09/15/nBSsLG.png"/>
                        
                    </div>
                    <div className='dex-orderbook'>
                        <div className='dex-orderbook-tabs'>
                            <div className='dex-orderbook-tab1' onClick={()=>openorderbook()}>
                                <div style={{"marginTop":"15px"}} >
                                    <div className="dex-orderbook-tab-inside">ORDER BOOK</div>
                                </div>
                            </div>
                            <div className='dex-orderbook-tab2' onClick={()=>openopenorders()}>
                                <div style={{"marginTop":"15px"}} >
                                    <div className="dex-orderbook-tab-inside">OPEN ORDERS</div>
                                </div>
                            </div>
                            <div className='dex-orderbook-tab3'onClick={()=>openmytradehistory()}>
                                <div style={{"marginTop":"15px"}} >
                                    <div className="dex-orderbook-tab-inside">MY TRADE HISTORY</div> 
                                </div>
                            </div>
                        </div>
                        <div className="dex-orderbook-orderbook" id="dex-orderbook-orderbook">
                            <div className="dex-orderbook-leftside">
                                <div className="dex-orderbook-leftside-headers">
                                    <div className="dex-orderbook-header">
                                        <div className="dex-orderbook-head">SUM ({secondCoin})</div>
                                    </div>
                                    <div className="dex-orderbook-header">
                                        <div className="dex-orderbook-head">TOTAL ({secondCoin})</div></div>
                                    <div className="dex-orderbook-header">
                                        <div className="dex-orderbook-head">AMOUNT ({firstCoin})</div>
                                    </div>
                                    <div className="dex-orderbook-header">
                                        <div className="dex-orderbook-head">BID PRICE({secondCoin})</div>
                                    </div>
                                </div>
                                {
                                    element=="" ? null :
                                <div>    
                                <div id="orders1">
                                    <div className="dex-orderbook-order" onClick={()=>enterBuyOrder()}>
                                        <div className="dex-orderbook-order-info">100</div>
                                        <div className="dex-orderbook-order-info">2100</div>
                                        <div className="dex-orderbook-order-info">1</div>
                                        <div className="dex-orderbook-order-info-buyprice">990</div>
                                    </div>
                                    <div className="dex-orderbook-order" onClick={()=>enterBuyOrder()}> 
                                        <div className="dex-orderbook-order-info">200</div>
                                        <div className="dex-orderbook-order-info">200 </div>
                                        <div className="dex-orderbook-order-info">100</div>
                                        <div className="dex-orderbook-order-info-buyprice">980 </div>
                                    </div>
                                    <div className="dex-orderbook-order" onClick={()=>enterBuyOrder()}>
                                        <div className="dex-orderbook-order-info">200</div>
                                        <div className="dex-orderbook-order-info">200</div>
                                        <div className="dex-orderbook-order-info">100</div>
                                        <div className="dex-orderbook-order-info-buyprice">970</div>
                                    </div>
                                    <div className="dex-orderbook-order" onClick={()=>enterBuyOrder()}>
                                        <div className="dex-orderbook-order-info">200</div>
                                        <div className="dex-orderbook-order-info">200</div>
                                        <div className="dex-orderbook-order-info">100</div>
                                        <div className="dex-orderbook-order-info-buyprice">960</div>
                                    </div>
                                    </div>
                                    
                                </div>
                                
                                }
                                
                            </div>
                            <div className="dex-orderbook-rightside">
                                <div className="dex-orderbook-rightside-headers">
                                    <div className="dex-orderbook-header">
                                        <div className="dex-orderbook-head">ASK PRICE ({secondCoin})</div>
                                    </div>
                                    <div className="dex-orderbook-header">
                                        <div className="dex-orderbook-head">AMOUNT ({firstCoin})</div>
                                    </div>
                                    <div className="dex-orderbook-header">
                                        <div className="dex-orderbook-head">TOTAL  ({secondCoin})</div>
                                    </div>
                                    <div className="dex-orderbook-header">
                                        <div className="dex-orderbook-head">SUM  ({secondCoin})</div>
                                    </div>
                                </div>
                                {
                                    element=="" ? null : 
                                    <div id="orders2">
                                        <div className="dex-orderbook-order" onClick={()=>enterSellOrder()}>
                                            <div className="dex-orderbook-order-info-sellprice">1100</div>
                                            <div className="dex-orderbook-order-info">1</div>
                                            <div className="dex-orderbook-order-info">2200</div>
                                            <div className="dex-orderbook-order-info">100</div>
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterSellOrder()}>
                                            <div className="dex-orderbook-order-info-sellprice">1200</div>
                                            <div className="dex-orderbook-order-info">2</div>
                                            <div className="dex-orderbook-order-info">230</div>
                                            <div className="dex-orderbook-order-info">2</div>
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterSellOrder()}>
                                            <div className="dex-orderbook-order-info-sellprice">1200</div>
                                            <div className="dex-orderbook-order-info">3</div>
                                            <div className="dex-orderbook-order-info">2300</div>
                                            <div className="dex-orderbook-order-info">200</div>
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterSellOrder()}>
                                            <div className="dex-orderbook-order-info-sellprice">1300</div>
                                            <div className="dex-orderbook-order-info">4</div>
                                            <div className="dex-orderbook-order-info">2300</div>
                                            <div className="dex-orderbook-order-info">200</div>
                                        </div>
                                    
                                        
                                        
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="dex-orderbook-order-bottoms" id="dex-orderbook-order-bottoms">
                            <div className="dex-orderbook-order-bottom">
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px","color":"green"}}>Sum:</div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}>10</div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}>23000</div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}></div>
                                </div>
                            </div>
                            <div className="dex-orderbook-order-bottom">
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px","color":"red"}}>Sum:</div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}>10</div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}>23000</div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="dex-orderbook-openorders" id="dex-orderbook-openorders">
                        dex-orderbook-openorders
                            
                        </div>
                        <div className="dex-orderbook-myorderhistory" id="dex-orderbook-myorderhistory">
                        dex-orderbook-myorderhistory
                            
                        </div>
                    </div>
                </div>
                <div className="dex-rightside" id="dex-rightside">
                    <div className="dex-rightside-title">TRADE HISTORY</div>
                    <div className="dex-rightside-headers">
                        <div className="dex-rightside-header">AMOUNT({firstCoin})</div>
                        <div className="dex-rightside-header">TIME</div>
                        <div className="dex-rightside-header">PRICE({secondCoin})</div>
                    </div>
                </div>
            </div>
            <div className="rightside-vortex"  id="rightside-vortex">
                Vortex
            </div>
            <div className="rightside-swap" id="rightside-swap">
                SWAP
            </div>
            <div className="rightside-settings" id="rightside-settings">
                Settings
            </div>
        </div>
        </div>
        <div>
            <div className="turorial-titles">
                <div className="turorial-title" onMouseOver={(event)=>openTutorial(event, 'turorial-content1')}
                onClick={(e)=>tutorial1(e)}>Tutorial 1</div>
                <div className="turorial-title" onMouseOver={(event)=>openTutorial(event, 'turorial-content2')}>Tutorial 2</div>
                <div className="turorial-title" onMouseOver={(event)=>openTutorial(event, 'turorial-content3')}>Tutorial 3</div>
                <div className="turorial-title" onMouseOver={(event)=>openTutorial(event, 'turorial-content4')}>Tutorial 4</div>
                <div className="turorial-title" onMouseOver={(event)=>openTutorial(event, 'turorial-content5')}>Tutorial 5</div>
                <div className="turorial-title" onMouseOver={(event)=>openTutorial(event, 'turorial-content6')}>Tutorial 6</div>
                <div className="turorial-title" onMouseOver={(event)=>openTutorial(event, 'turorial-content7')}>Tutorial 7</div>
            </div>
            <div className="turorial-contents">
                <div className="turorial-content" id="turorial-content1">How to deposit funds to wallet</div>
                <div className="turorial-content" id="turorial-content2">How to withdraw funds from wallet</div>
                <div className="turorial-content" id="turorial-content3">How to open channel </div>
                <div className="turorial-content" id="turorial-content4">How to rent channel </div>
                <div className="turorial-content" id="turorial-content5">How to trade on dex tab</div>
                <div className="turorial-content" id="turorial-content6"></div>
                <div className="turorial-content" id="turorial-content7"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
