import './App.css';
import React ,{useState, Component, useEffect} from "react";
import aethpng from "./png/aeth.png"
import chartpng from "./png/chart.bmp"
import arrowpng from "./png/arrow.png"
import chainpng from "./png/chain.bmp"
import copypng from "./png/copy.png"
import dexpng from "./png/dex.bmp"
import downpng from "./png/down.bmp"
import ethpng from "./png/eth.png"
import greenpng from "./png/green.png"
import hdxpng from "./png/hdx.png"
import HYDRANETpng from "./png/HYDRANET.bmp"
import leftpng from "./png/left.png"
import ltcpng from "./png/ltc.png"
import portfoliopng from "./png/portfolio.bmp"
import settingspng from "./png/settings.bmp"
import swappng from "./png/swap.bmp"
import uppng from "./png/up.bmp"
import usdcpng from "./png/usdc.png"
import vortexpng from "./png/vortex.bmp"
import walletpng from "./png/wallet.bmp"
import btcpng from "./png/btc.png"
import usdtpng from "./png/usdt.png"
import assets from "./png/assets.bmp"
import window from "./png/window.bmp"
import version from "./png/version.bmp"
import ux1 from "./png/ux1.bmp"
import ux2 from "./png/ux2.bmp"
import ux3 from "./png/ux3.bmp"
import localization from "./png/localization.bmp"
import btcusdt from "./png/btcusdt.bmp"
import usdtbtc from "./png/usdtbtc.bmp"
import swapimg from "./png/swapchange.bmp"
import aethhdx from "./png/aethhdx.bmp"
import hdxaeth from "./png/hdxaeth.bmp"
import btcltc from "./png/btcltc.bmp"
import ltcbtc from "./png/ltcbtc.bmp"
import btceth from "./png/btceth.bmp"
import ethbtc from "./png/ethbtc.bmp"
import star from "./png/star.png"
import depositgif from "./png/deposit.gif"
import seedgif from "./png/24seedgif.gif"
import withdrawgif from "./png/withdrawgif.gif"
import newchanelmanuel from "./png/newchanelmanuel.gif"
import newchannelslider from "./png/newchannelslider.gif"
import rentgif from "./png/rentgif.gif"
import ssui1 from "./png/ssui1.gif"
import ssui2 from "./png/ssui2.gif"
import tradeondex from "./png/tradeondex.gif"
import postsell from "./png/postsell.gif"
import postbuy from "./png/postbuy.gif"
import cancelorder from "./png/cancelorder.gif"

function App() {

  useEffect(()=>{
      changeTabOnWallet(coinname);
      setTotalAmount(buyPrice*tradeAmount)
      setBtcOnchain(btcbalance-btcbalanceL2)
      setEthOnchain(ethbalance-ethbalanceL2)
      setAethOnchain(aethbalance-aethbalanceL2)
      setLtcOnchain(ltcbalance-ltcbalanceL2)
      setHdxOnchain(hdxbalance-hdxbalanceL2)
      setUsdtOnchain(usdtbalance-usdtbalanceL2)
      setUsdcOnchain(usdcbalance-usdcbalanceL2)
      changePair()
        if(button=="buy"){
        document.getElementById("dex-button11").className ="dex-button1 active";
        document.getElementById("dex-button12").className ="dex-button1";
        }else{
            document.getElementById("dex-button11").className ="dex-button1";
            document.getElementById("dex-button12").className ="dex-button1 active";
        }
        if(element===""){
            document.getElementById("dex-rightside").style.display = "none"
        }else{
            document.getElementById("dex-rightside").style.display = "block"
        }
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

    const [ usdtonchain, setUsdtOnchain] = useState(0)
    const [ btconchain, setBtcOnchain] = useState(0)
    const [ usdconchain, setUsdcOnchain] = useState(0)
    const [ ltconchain, setLtcOnchain] = useState(0)
    const [ aethonchain, setAethOnchain] = useState(0)
    const [ hdxonchain, setHdxOnchain] = useState(0)
    const [ ethonchain, setEthOnchain] = useState(0)

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

    const [onchain,setOnchain] = useState(0)
    const [img,setImg] = useState(btcpng);
    const [walletName,setWalletName] = useState("BTC Wallet");
    const [coinPrice, setCoinPrice] = useState("1 BTC = 100 usd");
    const [balanceValue, setBalanceValue] = useState(btcbalance*100)
    const [coinname,setCoinname] = useState("BTC")
    const [inputValue,setInputValue] = useState(0)
    const [inputDuration,setInputDuration] = useState(0)
    const [newchannelinput,setNewChannelInput] = useState(0)
    const [balance,setBalance] = useState(btcbalance);
    const [balanceL2,setBalanceL2] = useState(btcbalanceL2);
    const [balanceCR,setBalanceCR] = useState(btcbalanceL2);
    var totalBalance = (btcbalance)*100+(aethbalance)*100+
        (ethbalance)*100+hdxbalance+(ltcbalance)*10+
        usdcbalance+usdtbalance;
    const [dexprice, setDexPrice] = useState("")
    const [sendamount, setSendAmount] = useState("0")
    const [rangeValue,setRangeValue] = useState(1)
    
    const changeTabOnWallet = (x) => {
        switch(x){
            case "AETH":
             setOnchain(aethonchain)
             setBalance(aethbalance);
             setImg(aethpng);
             setWalletName("AETH Wallet")
             setCoinPrice("(1 AETH = 100 usd)");
             setBalanceValue((aethbalance)*100);
             setCoinname("AETH")
             setBalanceL2(aethbalanceL2)
             changeTable(coinname);
             setBalanceCR(aethbalanceCR);
            return;
            case "BTC":
             setOnchain(btconchain)
             setBalance(btcbalance);
             setImg(btcpng);
             setWalletName("BTC Wallet")
             setCoinPrice("(1 BTC = 100 usd)");
             setBalanceValue((btcbalance)*100);
             setCoinname("BTC")
             setBalanceL2(btcbalanceL2)
             changeTable(coinname);
             setBalanceCR(btcbalanceCR);
            return;
            case "ETH":
             setOnchain(ethonchain)
             setBalance(ethbalance);
             setImg(ethpng);
             setWalletName("ETH Wallet")
             setCoinPrice("(1 ETH = 100 usd)");
             setBalanceValue((ethbalance)*100);
             setCoinname("ETH")
             setBalanceL2(ethbalanceL2)
             changeTable(coinname);
             setBalanceCR(ethbalanceCR);
            return;
            case "HDX":
             setOnchain(hdxonchain)
             setBalance(hdxbalance);
             setImg(hdxpng);
             setWalletName("HDX Wallet")
             setCoinPrice("(1 HDX = 1 usd)");
             setBalanceValue(hdxbalance);
             setCoinname("HDX")
             setBalanceL2(hdxbalanceL2)
             changeTable(coinname);
             setBalanceCR(hdxbalanceCR);
            return;
            case "LTC":
             setOnchain(ltconchain)
             setBalance(ltcbalance);
             setImg(ltcpng);
             setWalletName("LTC Wallet")
             setCoinPrice("(1 LTC = 10 usd)");
             setBalanceValue((ltcbalance)*10);
             setCoinname("LTC")
             setBalanceL2(ltcbalanceL2)
             changeTable(coinname);
             setBalanceCR(ltcbalanceCR);
            return;
            case "USDC":
             setOnchain(usdconchain)
             setBalance(usdcbalance);
             setImg(usdcpng);
             setWalletName("USDC Wallet")
             setCoinPrice("(1 USDC = 1 usd)");
             setBalanceValue((usdcbalance)*1);
             setCoinname("USDC")
             setBalanceL2(usdcbalanceL2)
             changeTable(coinname);
             setBalanceCR(usdcbalanceCR);
            return;
            case "USDT":
             setOnchain(usdtonchain)
             setBalance(usdtbalance);
             setImg(usdtpng);
             setWalletName("USDT Wallet")
             setCoinPrice("(1 USDT = 1 usd)");
             setBalanceValue(usdtbalance);
             setCoinname("USDT")
             setBalanceL2(usdtbalanceL2)
             changeTable(coinname);
             setBalanceCR(usdtbalanceCR);
            return;
            default:
            return null
        }
    }

    var modal1 = document.getElementById("myModal-receive");
    var modal2 = document.getElementById("myModal-send");   
    var modal3 = document.getElementById("myModal-newchannel");    
    var modal7 = document.getElementById("myModal-newchannel-slider");
    var modal4 = document.getElementById("myModal-newrental");
    var modalt1 = document.getElementById("myModal-tutorial1");
    var modalt2 = document.getElementById("myModal-tutorial2");
    var modalt3 = document.getElementById("myModal-tutorial3");
    var modalt4 = document.getElementById("myModal-tutorial4");
    var modalt5 = document.getElementById("myModal-tutorial5");
    var modalt6 = document.getElementById("myModal-tutorial6");
    var modalt7 = document.getElementById("myModal-tutorial7");
    var modalt8 = document.getElementById("myModal-tutorial8");
    var modalt9 = document.getElementById("myModal-tutorial9");
    var modalt10 = document.getElementById("myModal-tutorial10");
    var modalt11 = document.getElementById("myModal-tutorial11");
    var modalt12 = document.getElementById("myModal-tutorial12");

    const btnonclickreceive = () => {
        modal1.style.display = "block";
    }
    const spanonclickreceive = () => {
        modal1.style.display = "none";
    }
    const btnonclicksend = () => {
        modal2.style.display = "block";
    }
    const spanonclicksend = () => {
        modal2.style.display = "none";
    }
    const btnonclicknewchannel = () => {
        modal3.style.display = "block";
    }
    const spanonclicknewchannel = () => {
        modal3.style.display = "none";
    }
    const btnonclicknewchannelslider = () => {
        modal7.style.display = "block";
    }
    const spanonclicknewchannelslider = () => {
        modal7.style.display = "none";
    }
    const btnonclicknewrental = () => { 
        modal4.style.display = "block";
    }
    const spanonclicknewrental = () => {
        modal4.style.display = "none";
    }
    const tutorial1 = () => {
        modalt1.style.display = "block";
    }
    const spanonclicktutorial1 = () => {
        modalt1.style.display = "none";
    }          
     // document.documentElement.scrollTop = 0 
    const tutorial2 = () => {
        modalt2.style.display = "block";
    }
    const spanonclicktutorial2 = () => {
        modalt2.style.display = "none";
    }
    const tutorial3 = () => {
        modalt3.style.display = "block";
    }
    const spanonclicktutorial3 = () => {
        modalt3.style.display = "none";
    }
    const tutorial4= () => {
        modalt4.style.display = "block";
    }
    const spanonclicktutorial4 = () => {
        modalt4.style.display = "none";
    }
    const tutorial5 = () => {
        modalt5.style.display = "block";
    }
    const spanonclicktutorial5 = () => {
        modalt5.style.display = "none";
    }
    const tutorial6= () => {
        modalt6.style.display = "block";
    }
    const spanonclicktutorial6 = () => {
        modalt6.style.display = "none";
    }
    const tutorial7 = () => {
        modalt7.style.display = "block";
    }
    const spanonclicktutorial7 = () => {
        modalt7.style.display = "none";
    }
    const tutorial8= () => {
        modalt8.style.display = "block";
    }
    const spanonclicktutorial8 = () => {
        modalt8.style.display = "none";
    }
    const tutorial9 = () => {
        modalt9.style.display = "block";
    }
    const spanonclicktutorial9 = () => {
        modalt9.style.display = "none";
    }
    const tutorial10= () => {
        modalt10.style.display = "block";
    }
    const spanonclicktutorial10 = () => {
        modalt10.style.display = "none";
    }
    const tutorial11 = () => {
        modalt11.style.display = "block";
    }
    const spanonclicktutorial11 = () => {
        modalt11.style.display = "none";
    }
    const tutorial12= () => {
        modalt12.style.display = "block";
    }
    const spanonclicktutorial12 = () => {
        modalt12.style.display = "none";
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
             setAethOnchain(Number(aethonchain) + Number(x.value))
             setAethBalance(Number(aethbalance)+Number(x.value));
             spanonclickreceive();
             x.value=""
             changeTabOnWallet(coinname);
            return;
            case "BTC":
              setBtcOnchain( Number(btconchain) + Number(x.value))
              setBtcBalance(Number(btcbalance)+Number(x.value));
              changeTabOnWallet(coinname);
              spanonclickreceive();
              x.value=""
             return;
             case "ETH":
              setEthOnchain(Number(ethonchain) + Number(x.value))
              setEthBalance(Number(ethbalance)+Number(x.value));
              changeTabOnWallet(coinname);
              spanonclickreceive();
              x.value=""
             return;
             case "HDX":
              setHdxOnchain(Number(hdxonchain) + Number(x.value))
              setHdxBalance(Number(hdxbalance)+Number(x.value));
              changeTabOnWallet("HDX");
              spanonclickreceive();
              x.value=""
             return;
             case "LTC":
              setLtcOnchain(Number(ltconchain) + Number(x.value))
              setLtcBalance(Number(ltcbalance)+Number(x.value));
              changeTabOnWallet("LTC");
              spanonclickreceive();
              x.value=""
             return;
             case "USDC":
              setUsdcOnchain(Number(usdcbalance) + Number(x.value))
              setUsdcBalance(Number(usdcbalance)+Number(x.value));
              changeTabOnWallet("USDC");
              spanonclickreceive();
              x.value=""
             return;
             case "USDT":
              setUsdtOnchain(Number(usdtonchain) + Number(x.value))
              setUsdtBalance(Number(usdtbalance)+Number(x.value));
              changeTabOnWallet("USDT");
              spanonclickreceive();
              x.value=""
             return;
             default:
             return null
        }
    }
    
        const ethchannel = document.getElementById("ethchannel")
        const hdxchannel = document.getElementById("hdxchannel")
        const aethchannel = document.getElementById("aethchannel")
        const usdtchannel = document.getElementById("usdtchannel")
        const usdcchannel = document.getElementById("usdcchannel")
        const btcchannel = document.getElementById("btcchannel")
        const ltcchannel = document.getElementById("ltcchannel")


        // let tr = document.createElement("div");
        // let tdchannel = document.createElement("div");
        // let tdstatus = document.createElement("div");
        // let tdcansend = document.createElement("div");
        // let tdcanreceive = document.createElement("div");
        // let tdrentaltime = document.createElement("div");
        // let tdclose = document.createElement("div");
        // var i = 1

    // const pushL2Channel = (y,a,b) => {
    //     if(a=="swap"){
    //         setInputValue(b);
    //       }
    //     tdclose.innerHTML ='&times;';
    //     tdclose.className = "close-receive-closechannel";
    //     tdchannel.textContent="Channel " + i;
    //     i++
    //     tdstatus.textContent="Active";
    //     tdstatus.style.color = "green"
    //     if(newchannelinput==""){
    //       tdcansend.textContent=Number(0);
    //     }else{
    //         tdcansend.textContent=newchannelinput;
    //     }
    //     tdcanreceive.textContent=inputValue;
    //     if(inputDuration==0){
    //       tdrentaltime.textContent="";
    //     }else{
    //       tdrentaltime.textContent=0;
    //     }
    //     tdchannel.className = "ethchannel";
    //     tdstatus.className = "ethchannel";
    //     tdcansend.className = "ethchannel";
    //     tdcanreceive.className = "ethchannel";
    //     tdrentaltime.className = "ethchannel";
    //     tr.className="ethchannels"
    //     tr.appendChild(tdchannel);
    //     tr.appendChild(tdstatus);
    //     tr.appendChild(tdcansend);
    //     tr.appendChild(tdcanreceive);
    //     tr.appendChild(tdrentaltime);
    //     tr.appendChild(tdclose);

    // }

    const depositeL2Balance = () =>{
 
      if(newchannelinput>onchain) {
        alert("Not Enough Balance")
        setNewChannelInput("")
        return;
      }
  
      switch(coinname){
          case "AETH":
            setAethBalanceCR(Number(aethbalanceCR)+Number(inputValue))
            setAethOnchain(Number(aethbalance)-Number(newchannelinput));
            setAethBalanceL2(Number(aethbalanceL2)+Number(newchannelinput));
            changeTabOnWallet("AETH");
            spanonclicknewchannel();
            spanonclicknewrental();
            spanonclicknewchannelslider();
            aethchannel.style.display = "block"
            setNewChannelInput("")
            setInputDuration(0);
            setInputValue(0);
          return;
          case "BTC":
            setBtcBalanceCR(Number(btcbalanceCR)+Number(inputValue))
            setBtcOnchain(Number(btconchain)-Number(newchannelinput))
            setBtcBalanceL2(Number(btcbalanceL2)+Number(newchannelinput));
            spanonclicknewchannel();
            spanonclicknewrental();
            spanonclicknewchannelslider();
            setNewChannelInput("")
            changeTabOnWallet("BTC");
            btcchannel.style.display = "block"
            setInputDuration(0);
            setInputValue(0);
           return;
           case "ETH":
            setEthBalanceCR(Number(ethbalanceCR)+Number(inputValue))
            setEthOnchain(Number(ethonchain)-Number(newchannelinput))
            setEthBalanceL2(Number(ethbalanceL2)+Number(newchannelinput));
            changeTabOnWallet("ETH");
            ethchannel.style.display = "block"
            spanonclicknewchannel();
            spanonclicknewrental();
            spanonclicknewchannelslider();
            setNewChannelInput("")
            setInputDuration(0);
            setInputValue(0);
           return;
           case "HDX":
            setHdxBalanceCR(Number(hdxbalanceCR)+Number(inputValue))
            setHdxOnchain(Number(hdxonchain)-Number(newchannelinput))
            setHdxBalanceL2(Number(hdxbalanceL2)+Number(newchannelinput));
            changeTabOnWallet("HDX");
            spanonclicknewchannel();
            spanonclicknewrental();
            spanonclicknewchannelslider();
            setNewChannelInput("")
            hdxchannel.style.display = "block"
            setInputDuration(0);
            setInputValue(0);
           return;
           case "LTC":
            setLtcBalanceCR(Number(ltcbalanceCR)+Number(inputValue))
            setLtcOnchain(Number(ltconchain)-Number(newchannelinput))
            setLtcBalanceL2(Number(ltcbalanceL2)+Number(newchannelinput));
            changeTabOnWallet("LTC");
            spanonclicknewchannel();
            spanonclicknewrental();
            spanonclicknewchannelslider();
            setNewChannelInput("")
            ltcchannel.style.display = "block"
            setInputDuration(0);
            setInputValue(0);
           return;
           case "USDC":
            setUsdcBalanceCR(Number(usdcbalanceCR)+Number(inputValue))
            setUsdcOnchain(Number(usdconchain)-Number(newchannelinput))
            setUsdcBalanceL2(Number(usdcbalanceL2)+Number(newchannelinput));
            changeTabOnWallet("USDC");
            spanonclicknewchannel();
            spanonclicknewrental();
            spanonclicknewchannelslider();
            setNewChannelInput("")
            usdcchannel.style.display = "block"
            setInputDuration(0);
            setInputValue(0);
           return;
           case "USDT":
            setUsdtBalanceCR(Number(usdtbalanceCR)+Number(inputValue))
            setUsdtOnchain(Number(usdtonchain)-Number(newchannelinput))
            setUsdtBalanceL2(Number(usdtbalanceL2)+Number(newchannelinput));
            changeTabOnWallet("USDT");
            spanonclicknewchannel();
            spanonclicknewrental();
            spanonclicknewchannelslider();
            setNewChannelInput("")
            usdtchannel.style.display = "block"
            setInputDuration(0);
            setInputValue(0);
           return;
           default:
           return null
      }
  }

    // const depositeCRBalance = () =>{

  
    // switch(y){
    //     case "AETH":
    //         setAethBalanceCR(Number(aethbalanceCR)+Number(inputValue))
    //         changeTabOnWallet("AETH");
    //         spanonclicknewchannel();
    //         spanonclicknewrental();
    //         aethchannel.style.display = "block"
    //         setNewChannelInput("")
    //         setInputDuration(0);
    //         setInputValue(0);
    //     return;
    //     case "BTC":
    //         setBtcBalanceCR(Number(btcbalanceCR)+Number(inputValue))
    //         spanonclicknewchannel();
    //         spanonclicknewrental();
    //         setNewChannelInput("")
    //         changeTabOnWallet("BTC");
    //         btcchannel.style.display = "block"
    //         setInputDuration(0);
    //         setInputValue(0);
    //     return;
    //     case "ETH":
    //         setEthBalanceCR(Number(ethbalanceCR)+Number(inputValue))
    //         ethchannel.style.display = "block";
    //         changeTabOnWallet("ETH");
    //         spanonclicknewchannel();
    //         spanonclicknewrental();
    //         setNewChannelInput("")
    //         setInputDuration(0);
    //         setInputValue(0);
    //     return;
    //     case "HDX":
    //         setHdxBalanceCR(Number(hdxbalanceCR)+Number(inputValue))
    //         changeTabOnWallet("HDX");
    //         spanonclicknewchannel();
    //         spanonclicknewrental();
    //         setNewChannelInput("")
    //         hdxchannel.style.display = "block"
    //         setInputDuration(0);
    //         setInputValue(0);
    //     return;
    //     case "LTC":
    //         setLtcBalanceCR(Number(ltcbalanceCR)+Number(inputValue))
    //         changeTabOnWallet("LTC");
    //         spanonclicknewchannel();
    //         spanonclicknewrental();
    //         setNewChannelInput("")
    //         ltcchannel.style.display = "block"
    //         setInputDuration(0);
    //         setInputValue(0);
    //     return;
    //     case "USDC":
    //         setUsdcBalanceCR(Number(usdcbalanceCR)+Number(inputValue))
    //         changeTabOnWallet("USDC");
    //         spanonclicknewchannel();
    //         spanonclicknewrental();
    //         setNewChannelInput("")
    //         usdcchannel.style.display = "block"
    //         setInputDuration(0);
    //         setInputValue(0);
    //     return;
    //     case "USDT":
    //         setUsdtBalanceCR(Number(usdtbalanceCR)+Number(inputValue))
    //         changeTabOnWallet("USDT");
    //         spanonclicknewchannel();
    //         spanonclicknewrental();
    //         setNewChannelInput("")
    //         usdtchannel.style.display = "block"
    //         setInputDuration(0);
    //         setInputValue(0);
    //     return;
    //     default:
    //     return null
    // }
    // }

  const closeChannel = (a) => {

    switch(a){
        case "btcclose":
            setBtcBalanceCR(0)
            setBtcBalanceL2(0)
            btcchannel.style.display = "none"
        return;
        case "usdtclose":
            setUsdtBalanceCR(0)
            setUsdtBalanceL2(0)
            usdtchannel.style.display = "none"
        return;
        case "aethclose":
            setAethBalanceCR(0)
            setAethBalanceL2(0)
            aethchannel.style.display = "none"
        return;
        case "ethclose":
            setEthBalanceCR(0)
            setEthBalanceL2(0)
            ethchannel.style.display = "none"
        return;
        case "hdxclose":
            setHdxBalanceCR(0)
            setHdxBalanceL2(0)
            hdxchannel.style.display = "none"
        return;
        case "ltcclose":
            setLtcBalanceCR(0)
            setLtcBalanceL2(0)
            ltcchannel.style.display = "none"
        return;
        case "usdcclose":
            setUsdcBalanceCR(0)
            setUsdcBalanceL2(0)
            usdcchannel.style.display = "none"
        return;
        default:
        return null;
    }
}
    const sendCoin = () => {
        switch(coinname){
            case "BTC":
                if(btconchain>=sendamount){
                    setBtcBalance(btcbalance-sendamount)
                }else{
                    alert("Enter less amount from your BTC on-Chain amount")
                }
                spanonclicksend();
                setSendAmount("");
                
            return;
            case "USDT":
                if(usdtonchain>=sendamount){
                    setUsdtBalance(usdtbalance-sendamount)
                }else{
                    alert("Enter less amount from your USDT on-Chain amount")
                }
                spanonclicksend();
                setSendAmount("");
            return;
            case "AETH":
                if(aethonchain>=sendamount){
                    setAethBalance(aethbalance-sendamount)
                }else{
                    alert("Enter less amount from your AETH on-Chain amount")
                }
                spanonclicksend();
                setSendAmount("");
            return;
            case "ETH":
                if(ethonchain>=sendamount){
                    setEthBalance(ethbalance-sendamount)
                }else{
                    alert("Enter less amount from your ETH onChain amount")
                }
                spanonclicksend();
                setSendAmount("");
            return;
            case "HDX":
                if(hdxonchain>=sendamount){
                    setHdxBalance(hdxbalance-sendamount)
                }else{
                    alert("Enter less amount from your HDX onChain amount")
                }
                spanonclicksend();
                setSendAmount("");
            return;
            case "LTC":
                if(ltconchain>=sendamount){
                    setLtcBalance(ltcbalance-sendamount)
                }else{
                    alert("Enter less amount from your Ltc onChain amount")
                }
                spanonclicksend();
                setSendAmount("");
            return;
            case "USDC":
                if(usdconchain>=sendamount){
                    setUsdcBalance(usdcbalance-sendamount)
                }else{
                    alert("Enter less amount from your USDC onChain amount")
                }
                spanonclicksend();
                setSendAmount("");
            return;
            default:
            return null;
        }
    }
    const changeTable = (x) => {

    var walletchannels = document.getElementById("wallet-channels-tab")
    var array = []
        for(let i = 3; i<10 ; i++){
            array.push(walletchannels.childNodes[i])
        }

    var idbtc = document.getElementById("tableChannelbtc");
    var idaeth = document.getElementById("tableChannelaeth");
    var ideth = document.getElementById("tableChanneleth");
    var idhdx = document.getElementById("tableChannelhdx");
    var idltc = document.getElementById("tableChannelltc");
    var idusdc = document.getElementById("tableChannelusdc");
    var idusdt = document.getElementById("tableChannelusdt");
    
        //  idbtc,idaeth,ideth,idhdx,idltc,idusdc,idusdt 
        array.forEach((a)=>{
            a.style.display ="none" 
          })

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
                setSelectedPair1L2Value(btcbalanceL2*100);
                setSelectedPair1CRValue(btcbalanceCR*100);
                setSelectedPair2L2Value(usdtbalanceL2);
                setSelectedPair2CRValue(usdtbalanceCR);
                setSelectedPair1img(btcpng)
                setSelectedPair2img(usdtpng)
                setFirstCoin("BTC")
                setSecondCoin("USDT")
                setDexPrice(100)
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
                setSelectedPair1img(aethpng)
                setSelectedPair2img(hdxpng)
                setFirstCoin("AETH")
                setSecondCoin("HDX")
                setDexPrice(100)
                return;
            case "BTC/LTC":
                setSelectedPair1L2(btcbalanceL2+" BTC");
                setSelectedPair2L2(ltcbalanceL2+" LTC");
                setSelectedPair1CR(btcbalanceCR);
                setSelectedPair2CR(ltcbalanceCR);
                setSelectedPair1L2Value(btcbalanceL2*100);
                setSelectedPair1CRValue(btcbalanceCR*100);
                setSelectedPair2L2Value(ltcbalanceL2*10);
                setSelectedPair2CRValue(ltcbalanceCR*10);
                setSelectedPair1img(btcpng)
                setSelectedPair2img(ltcpng)
                setFirstCoin("BTC")
                setSecondCoin("LTC")
                setDexPrice(100)
                return;
            case "BTC/ETH":
                setSelectedPair1L2(btcbalanceL2+" BTC");
                setSelectedPair2L2(ethbalanceL2+" ETH");
                setSelectedPair1CR(btcbalanceCR);
                setSelectedPair2CR(ethbalanceCR);
                setSelectedPair1L2Value(btcbalanceL2*100);
                setSelectedPair1CRValue(btcbalanceCR*100);
                setSelectedPair2L2Value(ethbalanceL2*100);
                setSelectedPair2CRValue(ethbalanceCR*100);
                setSelectedPair1img(btcpng)
                setSelectedPair2img(ethpng)
                setFirstCoin("BTC")
                setSecondCoin("ETH")
                setDexPrice(10)
                return;
            default:
                return null;
        }
    }

    const [buyPrice,setBuyPrice] = useState("");
    const [tradeAmount,setTradeAmount] = useState("")
    const [totalAmount,setTotalAmount] = useState("")
    var buyPriceInput = document.getElementById("dex-input1")
    var tradeAmountInput = document.getElementById("dex-input2")
    var totalAmountInput = document.getElementById("dex-input3")

    const enterBuyOrder = (a,b) => {
        setButton("sell")
        setBuyPrice(a)
        setTradeAmount(b)
        setTotalAmount(buyPrice*tradeAmount)
        buyPriceInput.value = buyPrice;
        tradeAmountInput.value = tradeAmount;
        totalAmountInput.value = totalAmount
    }
    const enterSellOrder = (a,b) => {
        setButton("buy")
        setBuyPrice(a)
        setTradeAmount(b)
        setTotalAmount(buyPrice*tradeAmount)
        buyPriceInput.value = buyPrice;
        tradeAmountInput.value = tradeAmount;
        totalAmountInput.value = totalAmount
    }


    const buyFnc = () => {
        // if(x=="swap"){
        //     setTradeAmount(a)
        //     setTotalAmount(b)
        //     setBuyPrice(c)
        // }
        if(buyPrice>99 && buyPrice<=101){
            document.getElementById("star21").style.display = "block"
            document.getElementById("orderbook21").innerHTML = tradeAmount
            pushOpenOrder("sell",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice>101 && buyPrice<103){
            document.getElementById("star22").style.display = "block"
            document.getElementById("orderbook22").innerHTML = tradeAmount
            pushOpenOrder("sell",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice>=103 && buyPrice<104){
            document.getElementById("star23").style.display = "block"
            document.getElementById("orderbook22").innerHTML = tradeAmount
            pushOpenOrder("sell",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice>=104 && buyPrice<105){
            document.getElementById("star24").style.display = "block"
            document.getElementById("orderbook22").innerHTML = tradeAmount
            pushOpenOrder("sell",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice>=105){
            document.getElementById("usersellorder").style.display = "block"
            document.getElementById("usersellprice").innerHTML = buyPrice
            document.getElementById("star25").style.display = "block"
            document.getElementById("orderbook25").innerHTML = tradeAmount
            pushOpenOrder("sell",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice<=99){
            setBuyPrice(99)
        }
        pushMyHistory("sell",buyPrice,totalAmount,tradeAmount)
        switch(element){
            case "BTC/USDT":
                if(btcbalanceL2<tradeAmount){ 
                    alert("You don't have enough 'can send' balance for BTC. Please open new btc channel")
                    return;
                }else if(usdtbalanceCR<totalAmount){
                    alert("You don't have enough 'can receive' balance for USDt. Please rent new usdt channel")
                    return;
                }
                setBtcBalance(btcbalance-tradeAmount)
                setUsdtBalance(Number(usdtbalance)+Number(totalAmount))
                setBtcBalanceL2(btcbalanceL2-tradeAmount)
                setBtcBalanceCR(Number(btcbalanceCR)+Number(tradeAmount))
                setUsdtBalanceL2(Number(usdtbalanceL2)+Number(totalAmount))
                setUsdtBalanceCR(usdtbalanceCR-totalAmount)
                addOrderHistory(Number(tradeAmount),Number(buyPrice),"sell")
                
                return;
            case "AETH/HDX":
                if(aethbalanceL2<tradeAmount){ 
                    alert("You don't have enough 'can send' balance for AETH. Please open new AETH channel")
                    return;
                }else if(hdxbalanceCR<totalAmount){
                    alert("You don't have enough 'can receive' balance for HDX. Please rent new HDX channel")
                    return;
                }
                setAethBalance(aethbalance-tradeAmount)
                setHdxBalance(Number(hdxbalance)+Number(totalAmount))
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
                setBtcBalance(btcbalance-tradeAmount)
                setLtcBalance(Number(ltcbalance)+Number(totalAmount))
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
                setBtcBalance(btcbalance-tradeAmount)
                setEthBalance(Number(ethbalance)+Number(totalAmount))
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
        if(buyPrice>=99 && buyPrice<101){
            document.getElementById("star11").style.display = "block"
            document.getElementById("orderbook11").innerHTML = tradeAmount
            pushOpenOrder("buy",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice>97 && buyPrice<99){
            document.getElementById("star12").style.display = "block"
            document.getElementById("orderbook12").innerHTML = tradeAmount
            pushOpenOrder("buy",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice>=97 && buyPrice<98){
            document.getElementById("star13").style.display = "block"
            document.getElementById("orderbook13").innerHTML = tradeAmount
            pushOpenOrder("buy",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice>=96 && buyPrice<97){
            document.getElementById("star14").style.display = "block"
            document.getElementById("orderbook14").innerHTML = tradeAmount
            pushOpenOrder("buy",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice<=95){
            document.getElementById("userbuyorder").style.display = "block"
            document.getElementById("userbuyprice").innerHTML = buyPrice
            document.getElementById("star15").style.display = "block"
            document.getElementById("orderbook15").innerHTML = tradeAmount
            pushOpenOrder("buy",buyPrice,totalAmount,tradeAmount)
            return;
        }else if(buyPrice<=99){
            setBuyPrice(99)
        }
        pushMyHistory("buy",buyPrice,totalAmount,tradeAmount)
        switch(element){
            case "BTC/USDT":
                if(btcbalanceCR<tradeAmount){ 
                    alert("You don't have enough 'can receive' balance for BTC. Please rent new btc channel")
                    return;
                }else if(usdtbalanceL2<totalAmount){
                    alert("You don't have enough 'can send' balance for USDt. Please rent new usdt channel")
                    return;
                }
                setBtcBalance(Number(btcbalance)+Number(tradeAmount))
                setUsdtBalance(usdtbalance-totalAmount)
                setBtcBalanceL2(Number(btcbalanceL2)+Number(tradeAmount))
                setBtcBalanceCR(btcbalanceCR-tradeAmount)
                setUsdtBalanceL2(usdtbalanceL2-totalAmount)
                setUsdtBalanceCR(Number(usdtbalanceCR)+Number(totalAmount))
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
                setAethBalance(Number(aethbalance)+Number(tradeAmount))
                setHdxBalance(hdxbalance-totalAmount)
                setAethBalanceL2(Number(aethbalanceL2)+Number(tradeAmount))
                setAethBalanceCR(aethbalanceCR-tradeAmount)
                setHdxBalanceL2(hdxbalanceL2-totalAmount)
                setHdxBalanceCR(Number(hdxbalanceCR)+Number(totalAmount))
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
                setBtcBalance(Number(btcbalance)+Number(tradeAmount))
                setLtcBalance(ltcbalance-totalAmount)
                setBtcBalanceL2(Number(btcbalanceL2)+Number(tradeAmount))
                setBtcBalanceCR(btcbalanceCR-tradeAmount)
                setLtcBalanceL2(ltcbalanceL2-totalAmount)
                setLtcBalanceCR(Number(ltcbalanceCR)+Number(totalAmount))
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
                setBtcBalance(Number(btcbalance)+Number(tradeAmount))
                setEthBalance(ethbalance-totalAmount)
                setBtcBalanceL2(Number(btcbalanceL2)+Number(tradeAmount))
                setBtcBalanceCR(btcbalanceCR-tradeAmount)
                setEthBalanceL2(ethbalanceL2-totalAmount)
                setEthBalanceCR(Number(ethbalanceCR)+Number(totalAmount))
                addOrderHistory(tradeAmount,buyPrice,"buy")
                return;
            default:
                return null;
        }
    }
    const pushOpenOrder = (sidee,pricee,amountt,totall) =>{
        
        let openorderdiv = document.getElementById("dex-orderbook-openorders");
        let orderdiv = document.createElement("div");
        let type = document.createElement("div");
        let side = document.createElement("div");
        let price = document.createElement("div");
        let amount = document.createElement("div");
        let filled = document.createElement("div");
        let total = document.createElement("div");
        let actions = document.createElement("div");
        orderdiv.className = "dex-orderbook-openorders-orders"
        type.innerHTML = "Limit";
        side.innerHTML = sidee;
        if(sidee=="sell"){
            side.style.color = "red"
        }else{
            side.style.color = "green"
        }
        price.innerHTML = pricee;
        amount.innerHTML = amountt;
        filled.innerHTML = "0.00% (0.0)";
        total.innerHTML = totall;
        actions.innerHTML = "CANCEL";
        actions.onclick = (e) => {deleteOpenOrder(e)}
        actions.style.color = "red"
        actions.style.cursor = "pointer"
        orderdiv.appendChild(type);
        orderdiv.appendChild(side);
        orderdiv.appendChild(price);
        orderdiv.appendChild(amount);
        orderdiv.appendChild(filled);
        orderdiv.appendChild(total);
        orderdiv.appendChild(actions);
        openorderdiv.appendChild(orderdiv)
        orderdiv.childNodes.forEach((e)=>{
            e.className = "dex-orderbook-openorders-order"
        })
    }
    const deleteOpenOrder = (e) => {
        e.currentTarget.parentElement.style.display = "none";
    } 
    var tarih=new Date();
    var yil=tarih.getFullYear();
    var ay=tarih.getMonth();
    var gun=tarih.getDay();
    var saat=tarih.getHours();
    var dakika=tarih.getMinutes();
    var saniye=tarih.getSeconds();	
    var tarih = (yil+"/"+ay+"/"+gun+" "+saat+":"+dakika+":"+saniye);
    var y = 20 

    

    const addOrderHistory = (a,b,c) => {
        
        const dexrightside = document.getElementById("dex-rightside")
        
        let div1 = document.createElement("div")
        let divinfo1 = document.createElement("div")
        let divinfo2 = document.createElement("div")
        let divinfo3 = document.createElement("div")
        let divinfo4 = document.createElement("div")
        div1.className = "dex-orderbook-order"
        divinfo1.textContent =a ;
        divinfo1.className = "dex-orderbook-order-infox"
        divinfo2.textContent = tarih;
        divinfo2.className = "dex-orderbook-order-info-timex"
        divinfo3.textContent = b ;
        divinfo3.className = "dex-orderbook-order-info-sellpricex"
        divinfo4.textContent = b;
        divinfo4.className = "dex-orderbook-order-info-buypricex"
        div1.appendChild(divinfo1)
        div1.appendChild(divinfo2)
        if(c=="buy"){
            div1.appendChild(divinfo4)
        }else{
            div1.appendChild(divinfo3)
        }
        dexrightside.insertBefore(div1,dexrightside.firstChild)
    }
        
     const pushMyHistory = (sidee,pricee,amountt,totall) => {
        const myorders = document.getElementById("dex-orderbook-myorderhistory")
        let div2 = document.createElement("div")
        let divinfo1 = document.createElement("div")
        let divinfo2 = document.createElement("div")
        let divinfo3 = document.createElement("div")
        let divinfo4 = document.createElement("div")
        let divinfo5 = document.createElement("div")
        divinfo1.innerHTML = tarih;
        divinfo2.innerHTML = sidee;
        if(sidee=="buy"){
            divinfo2.style.color= "green"
        }else{
            divinfo2.style.color= "red"
        }
        divinfo3.innerHTML = pricee;
        divinfo4.innerHTML = amountt;
        divinfo5.innerHTML = totall;
        div2.className = "dex-orderbook-myorders-orders";
        div2.appendChild(divinfo1)
        div2.appendChild(divinfo2)
        div2.appendChild(divinfo3)
        div2.appendChild(divinfo4)
        div2.appendChild(divinfo5)
        div2.childNodes.forEach((e)=>{
            e.className = "dex-orderbook-myorders-order"
        })
        myorders.insertBefore(div2,myorders.childNodes[1])
    }
        
    

    const openTutorial = (evt, name) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tutorial-content");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tutorial-title");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        evt.currentTarget.className += " active";
      }
      
      const changecss = (evt, name) => {
        var i, tabcontent, tablinks;
        tablinks = document.getElementsByClassName("wallets-header-transaction");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        evt.currentTarget.className += " active";
      }
      const changetabcss = (evt, name) => {
        var i, tabcontent, tablinks;
        tablinks = document.getElementsByClassName("left-tab-title");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        evt.currentTarget.className += " active";
      }
      const changecointabcss = (evt, name) => {
        var i, tabcontent, tablinks;
        tablinks = document.getElementsByClassName("wallets-coin");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        evt.currentTarget.className += " active";
      }
      const changeordertabcss = (evt, name) => {
        var i, tabcontent, tablinks;
        tablinks = document.getElementsByClassName("dex-orderbook-tab");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        evt.currentTarget.className += " active";
      }
      const changebtncss = (evt, name) => {
        var i, tabcontent, tablinks;
        tablinks = document.getElementsByClassName("dex-button1");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        evt.currentTarget.className += " active";
      }
      const changebtn1css = (evt, name) => {
        var i, tabcontent, tablinks;
        tablinks = document.getElementsByClassName("dex-button2");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(name).style.display = "block";
        evt.currentTarget.className += " active";
      }



      const changeSettings = (x) => {
        // const settingleftside = document.getElementById("settings-leftside")
        // let children = settingleftside.childNodes
        
        // children.forEach((e)=>{
        //     e.style.display = "none";
        // })
        // x.currentTarget.style.display = "block";
        var header2 = document.getElementById("settings-leftside-header2");
        var header3 = document.getElementById("settings-leftside-header3");
        var header4 = document.getElementById("settings-leftside-header4");
        var header5 = document.getElementById("settings-leftside-header5");
        var header6 = document.getElementById("settings-leftside-header6");
        var header7 = document.getElementById("settings-leftside-header7");
        header2.style.display = "none";
        header3.style.display = "none";
        header4.style.display = "none";
        header5.style.display = "none";
        header6.style.display = "none";
        header7.style.display = "none";
        switch(x){
            case "2":
                header2.style.display = "block"
            return;
            case "3":
                header3.style.display = "block"
            return;
            case "4":
                header4.style.display = "block"
            return;
            case "5":
                header5.style.display = "block"
            return;
            case "6":
                header6.style.display = "block"
            return;
            case "7":
                header7.style.display = "block"
            return;
            default:
            return null
        }
    }
    const [seed,setSeed] = useState("closed")
    const showHideSeed = () => {
        const id = document.getElementById("settings-rightside-Backup-content")
        if(seed==="closed"){
            id.style.display = "block"
            setSeed("opened")
        }else{
            id.style.display = "none"
            setSeed("closed")
        }
    }
    const [changeside,setChangeSide] = useState("left")
    const [swapcoinimg, setSwapCoinImg] = useState(btcusdt)
    const [swapfirst,setSwapFirst] = useState("")
    const [swapsecond,setSwapSecond] = useState("")
    const idswapoptionfirst = document.getElementById("swap-first")
    const idswapoptionsecond = document.getElementById("swap-second")
    const [swapPrice,setSwapPrice] = useState(100)

    const swapOption = () => {
        if(changeside=="left"){
            if(idswapoptionfirst.value =="1btc1"){
            idswapoptionsecond.value = "2usdt"
            setSwapCoinImg(btcusdt)
            setSwapPrice(100)
            }else if(idswapoptionfirst.value =="1aeth2"){
            idswapoptionsecond.value = "2hdx"
            setSwapCoinImg(aethhdx)
        }}else{
            if(idswapoptionfirst.value =="1btc1"){
            idswapoptionsecond.value = "2usdt"
            setSwapCoinImg(usdtbtc)
            setSwapPrice(100)
            }else if(idswapoptionfirst.value =="1aeth2"){
            idswapoptionsecond.value = "2hdx"
            setSwapCoinImg(hdxaeth)
        }
        }

        }
        const swapOption2 = () => {
            if(changeside=="left"){
        if(idswapoptionsecond.value == "2usdt"){
            idswapoptionfirst.value ="1btc1"
            setSwapCoinImg(btcusdt)
            setSwapPrice(100)
        }else if(idswapoptionsecond.value == "2hdx"){
            idswapoptionfirst.value ="1aeth2"
            setSwapCoinImg(aethhdx)
        }else if(idswapoptionsecond.value == "2ltc"){
            idswapoptionfirst.value ="1btc1"
            setSwapCoinImg(btcltc)
        }else if(idswapoptionsecond.value == "2eth"){
            idswapoptionfirst.value ="1btc1"
            setSwapCoinImg(btceth)
        }}else{
         if(idswapoptionsecond.value == "2usdt"){
            idswapoptionfirst.value ="1btc1"
            setSwapCoinImg(usdtbtc)
            setSwapPrice(100)
        }else if(idswapoptionsecond.value == "2hdx"){
            idswapoptionfirst.value ="1aeth2"
            setSwapCoinImg(hdxaeth)
        }else if(idswapoptionsecond.value == "2ltc"){
            idswapoptionfirst.value ="1btc1"
            setSwapCoinImg(ltcbtc)
        }else if(idswapoptionsecond.value == "2eth"){
            idswapoptionfirst.value ="1btc1"
            setSwapCoinImg(ethbtc)
        }
    }
    }

    const changeSide = () => {
        const pricediv = document.getElementById("swap-price")
        const firstdiv = document.getElementById("swap-top-left1")
        const seconddiv = document.getElementById("swap-top-right1")
        const option1child = document.getElementById("swap-first-div")
        const option2child = document.getElementById("swap-second-div")
        
        if(changeside == "left"){
            firstdiv.appendChild(option2child)
            seconddiv.appendChild(option1child)
            setChangeSide("right")
            if(swapcoinimg == btcusdt){
                setSwapCoinImg(usdtbtc)
                setSwapPrice(100)
                pricediv.innerHTML="1 Usdt = 0.01 Btc"
            }else if(swapcoinimg == aethhdx){
                setSwapCoinImg(hdxaeth)
                pricediv.innerHTML="1 hdx = 99 aeth";
            }
            else if(swapcoinimg == btcltc){
                setSwapCoinImg(ltcbtc)
                pricediv.innerHTML="1 ltc = 99 btc"
            }
            else if(swapcoinimg == btceth){
                setSwapCoinImg(ethbtc)
                pricediv.innerHTML="1 eth = 99 btc"
            }
        }else{
            firstdiv.appendChild(option1child)
            seconddiv.appendChild(option2child)
            setChangeSide("left")
            if(swapcoinimg == usdtbtc){
                setSwapCoinImg(btcusdt)
                setSwapPrice(100)
                pricediv.innerHTML="1 Btc = 100 Usdt"
            }else if(swapcoinimg == hdxaeth){
                setSwapCoinImg(aethhdx)
                pricediv.innerHTML="1 aeth = 99 hdx"
            }
            else if(swapcoinimg == ltcbtc){
                setSwapCoinImg(btcltc)
                pricediv.innerHTML="1 btc = 99 ltc"
            }
            else if(swapcoinimg == ethbtc){
                setSwapCoinImg(btceth)
                pricediv.innerHTML="1 btc = 99 eth"
            }
        }
    }
    const [firstswapinput, setFirstSwapInput] = useState("");
    const [secondswapinput, setSecondSwapInput] = useState("");
    

    const swapOrder = () => {
        switch(swapcoinimg){
            case btcusdt:
                setElement("BTC/USDT")
                if(firstswapinput>btcbalance){
                    alert("Not enough balance, deposit BTC to the wallet")
                    return;
                }   
                if(btcbalanceL2>firstswapinput && usdtbalanceCR>secondswapinput){
                    setBtcBalanceL2(btcbalanceL2-firstswapinput)
                    setBtcBalanceCR(btcbalanceCR+Number(firstswapinput))
                    setUsdtBalanceCR(usdtbalanceCR-Number(secondswapinput))
                    setUsdtBalanceL2(Number(usdtbalanceL2)+Number(secondswapinput))
                }else if(btcbalanceL2>=firstswapinput){
                    setBtcBalanceL2(btcbalanceL2-firstswapinput)
                    setBtcBalanceCR(btcbalanceCR+Number(firstswapinput))
                }else if(usdtbalanceCR>=secondswapinput){
                    setUsdtBalanceCR(usdtbalanceCR-Number(secondswapinput))
                    setUsdtBalanceL2(Number(usdtbalanceL2)+Number(secondswapinput))
                }
                setBtcBalanceCR(btcbalanceCR+Number(firstswapinput))
                setUsdtBalanceL2(Number(usdtbalanceL2)+Number(secondswapinput))
                setBtcBalance(btcbalance-firstswapinput) 
                setUsdtBalance(Number(usdtbalance)+Number(secondswapinput)) 
                addOrderHistory(firstswapinput,100,"sell")
                btcchannel.style.display = "block"
                usdtchannel.style.display = "block"
                setFirstSwapInput("")
                setSecondSwapInput("")
                return;
            case usdtbtc:
                setElement("BTC/USDT")
                if(secondswapinput>usdtbalance){
                    alert("Not enough balance, deposit BTC to the wallet")
                    return;
                }   
                if(btcbalanceL2>secondswapinput && usdtbalanceCR>firstswapinput){
                    setUsdtBalanceL2(usdtbalanceL2-secondswapinput)
                    setUsdtBalanceCR(usdtbalanceCR+Number(secondswapinput))
                    setBtcBalanceCR(btcbalanceCR-Number(firstswapinput))
                    setBtcBalanceL2(Number(btcbalanceL2)+Number(firstswapinput))
                }else if(usdtbalanceL2>=secondswapinput){
                    setUsdtBalanceL2(usdtbalanceL2-secondswapinput)
                    setUsdtBalanceCR(usdtbalanceCR+Number(secondswapinput))
                }else if(btcbalanceCR>=firstswapinput){
                    setBtcBalanceCR(btcbalanceCR-Number(firstswapinput))
                    setBtcBalanceL2(Number(btcbalanceL2)+Number(firstswapinput))
                }
                setUsdtBalanceCR(usdtbalanceCR+Number(secondswapinput))
                setBtcBalanceL2(Number(btcbalanceL2)+Number(firstswapinput))
                setUsdtBalance(usdtbalance-secondswapinput) 
                setBtcBalance(Number(btcbalance)+Number(firstswapinput)) 
                addOrderHistory(secondswapinput,0.01,"sell")
                usdtchannel.style.display = "block"
                btcchannel.style.display = "block"
                setFirstSwapInput("")
                setSecondSwapInput("")
                return;

            default:
                return null;
            
        }}
    
  return (

    <div className="App">
        <div className="titles">
            <div className="title">HYDRANET DEX SIMULATION/TUTORIAL</div>
        </div>
        <div>
            <div className="tutorial-titles">
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content1')}
                onClick={(e)=>tutorial1(e)}>Tutorial 1</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content2')}
                onClick={(e)=>tutorial2(e)}>Tutorial 2</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content3')}
                onClick={(e)=>tutorial3(e)}>Tutorial 3</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content4')}
                onClick={(e)=>tutorial4(e)}>Tutorial 4</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content5')}
                onClick={(e)=>tutorial5(e)}>Tutorial 5</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content6')}
                onClick={(e)=>tutorial6(e)}>Tutorial 6</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content7')}
                onClick={(e)=>tutorial7(e)}>Tutorial 7</div>
            </div>
            <div className="tutorial-contents">
                <div className="tutorial-title" id="tutorial1" onMouseOver={(event)=>openTutorial(event, 'tutorial-content16')}>Tutorial 16</div>
                <div className="tutorial-content" id="tutorial-content1">How to get wallet backup</div>
                <div className="tutorial-content" id="tutorial-content2">How to deposit funds to wallet</div>
                <div className="tutorial-content" id="tutorial-content3">How to withdraw funds from wallet </div>
                <div className="tutorial-content" id="tutorial-content4">How to open channel with slider</div>
                <div className="tutorial-content" id="tutorial-content5">How to open channel manually</div>
                <div className="tutorial-content" id="tutorial-content6">How to rent channel</div>
                <div className="tutorial-content" id="tutorial-content7">How to trade with swap tab without opening any channel</div>
                <div className="tutorial-content" id="tutorial-content8">How to trade with swap tab with opened channels</div>
                <div className="tutorial-content" id="tutorial-content9">How to trade on dex tab</div>
                <div className="tutorial-content" id="tutorial-content10">How to post limit sell order on dex tab</div>
                <div className="tutorial-content" id="tutorial-content11">How to post limit buy order on dex tab</div>
                <div className="tutorial-content" id="tutorial-content12">How to cancel my order on dex tab</div>
                <div className="tutorial-content" id="tutorial-content13">How to trade on dex tab</div>
                <div className="tutorial-content" id="tutorial-content14">How to trade on dex tab</div>
                <div className="tutorial-content" id="tutorial-content15">How to trade on dex tab</div>
                <div className="tutorial-content" id="tutorial-content16">How to trade on dex tab</div>
                <div className="tutorial-title" id="tutorial2" onMouseOver={(event)=>openTutorial(event, 'tutorial-content8')}
                onClick={(e)=>tutorial8(e)}>Tutorial 8</div>
            </div>
            <div className="tutorial-titles">
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content15')}
                onClick={(e)=>tutorial1(e)}>Tutorial 15</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content14')}>Tutorial 14</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content13')}>Tutorial 13</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content12')}
                onClick={(e)=>tutorial12(e)}>Tutorial 12</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content11')}
                onClick={(e)=>tutorial11(e)}>Tutorial 11</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content10')}
                onClick={(e)=>tutorial10(e)}>Tutorial 10</div>
                <div className="tutorial-title" onMouseOver={(event)=>openTutorial(event, 'tutorial-content9')}
                onClick={(e)=>tutorial9(e)}>Tutorial 9</div>
            </div>
        </div>
        <div className="App1">
        

        <div className="dex">
            <div  className="modals">
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
                        <img className="modal-copyimg"src={copypng}></img>
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
                                <div className="modal-modal-asset-name1">Send {coinname}</div>
                                <div className="modal-modal-asset-name2">ON-CHAIN : {balance} {coinname} = {balanceValue} USD</div>
                            </div>
                        </div>
                        <input id="newchannelinput1"className='modal-input-send' type="number" min="1"
                        placeholder='Address'/>
                        <div className='modal-input-send-coinname'>{coinname}</div>
                        <input id="newchannelinput1"className='modal-input-send1' type="number" min="1"
                        placeholder='Amount' value={sendamount} onChange={(e)=>{setSendAmount(e.target.value)}}/>
                        <input id="newchannelinput1"className='modal-input-send2' type="number" min="1"
                        placeholder='Amount'/>
                        <div className='modal-input-send-usd'>USD</div>
                        <button className='modal-input-send-button'>MAX</button>
                        <button className='modal-input-send-button-send' onClick={sendCoin}>SEND</button>
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
                        <input id="newchannelinput"className='modal-input-newchannel' type="number" value={newchannelinput}
                        placeholder='Enter channel capacity (min = 1 , max = 200.000.000)' onChange={(e)=>{setNewChannelInput(e.target.value)}}/>
                        </div>
                        <div className='modal-newchannel-bottom'>Network Fee Rate: " 1 satoshi/vbyte</div>
                        <div className='modal-newchannel-buttons'>
                            <button className='modal-newchannel-button'>LOW</button>
                            <button className='modal-newchannel-button'>MEDIUM</button>
                            <button className='modal-newchannel-button'>HIGH</button>
                        </div>
                        <div className='modal-newchannel-openbuttons'>
                        <button className='modal-newchannel-openbutton' onClick={()=>depositeL2Balance()}>OPEN</button>
                        </div>
                    </div>
                </div>
                <div id="myModal-newchannel-slider" class="modal-newchannel-slider">
                    <div className="modal-content-newchannel-slider">
                        <div className='modal-content-newchannel-slider-text'>
                            You are about to move {newchannelinput} {coinname} ({100*newchannelinput}USD) on-chain to
                                off-chain and you will need to wait for 3 confirmations (~20 ~30 minutes)
                                <br/>Please confirm to continue.
                        </div>
                        <span className="close-newchannel" onClick={spanonclicknewchannelslider}>&times;</span>
                        <div className='modal-newchannel-bottom'>Network Fee Rate: " 1 satoshi/vbyte</div>
                        <div className='modal-newchannel-buttons'>
                            <button className='modal-newchannel-button'>LOW</button>
                            <button className='modal-newchannel-button'>MEDIUM</button>
                            <button className='modal-newchannel-button'>HIGH</button>
                        </div>
                        <div className='modal-newchannel-openbuttons'>
                        <button className='modal-newchannel-openbutton' onClick={()=>depositeL2Balance()}>OPEN</button>
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
                        <div  className='modal-newrental-inputs-header'>Capacity : {inputValue} {coinname}</div><div></div>
                        <input className="modal-newrental-input"type="range" id='1' max="100000"value={inputValue}  
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
                        <div><button className="modal-newrental-button" type='button' onClick={()=>depositeL2Balance()}>CONFIRM</button></div>

                    </div>
                </div>
                <div id="myModal-tutorial1" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial1}>&times;</span>
                        <img className="tutorial1-img1"src={seedgif}/>
                    </div>
                </div>
                <div id="myModal-tutorial2" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial2}>&times;</span>
                        <img className="tutorial1-img1"src={depositgif}/>
                    </div>
                </div>
                <div id="myModal-tutorial3" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial3}>&times;</span>
                        <img className="tutorial1-img1"src={withdrawgif}/>
                    </div>
                </div>
                <div id="myModal-tutorial4" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial4}>&times;</span>
                        <img className="tutorial1-img1"src={newchannelslider}/>
                    </div>
                </div>
                <div id="myModal-tutorial5" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial5}>&times;</span>
                        <img className="tutorial1-img1"src={newchanelmanuel}/>
                    </div>
                </div>
                <div id="myModal-tutorial6" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial6}>&times;</span>
                        <img className="tutorial1-img1"src={rentgif}/>
                    </div>
                </div>
                <div id="myModal-tutorial7" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial7}>&times;</span>
                        <img className="tutorial1-img1"src={ssui1}/>
                    </div>
                </div>
                <div id="myModal-tutorial8" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial8}>&times;</span>
                        <img className="tutorial1-img1"src={ssui2}/>
                    </div>
                </div>
                <div id="myModal-tutorial9" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial9}>&times;</span>
                        <img className="tutorial1-img1"src={tradeondex}/>
                    </div>
                </div>
                <div id="myModal-tutorial10" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial10}>&times;</span>
                        <img className="tutorial1-img1"src={postsell}/>
                    </div>
                </div>
                <div id="myModal-tutorial11" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial11}>&times;</span>
                        <img className="tutorial1-img11"src={postbuy}/>
                    </div>
                </div>
                <div id="myModal-tutorial12" class="modal-tutorial1">
                    <div className="modal-content-tutorial1">
                        <span className="close-tutorial1" onClick={spanonclicktutorial12}>&times;</span>
                        <img className="tutorial1-img11"src={cancelorder}/>
                    </div>
                </div>
            </div>
            <div className="leftside">
                <div style={{"fontSize":"13px"}}>
                    <img className="hdxlogo "src={HYDRANETpng}/>
                    
                </div>
                <hr className="hr"/>
                <div style={{"fontSize":"10px"}}>My Balance</div>
                <div style={{"fontSize":"13px"}}>${totalBalance.toFixed(2)}</div>
                <div className="left-tab-names">
                    <div className='left-tab-title' id="portfolio" onClick={ (event)=> changetabcss(event, 'portfolio')}>
                        <img src={portfoliopng} className="left-img"/>
                        <div className="left-tab-name" onClick={()=> changeTab("portfolio")}>Portfolio</div>
                    </div>
                    <div className='left-tab-title active' id="wallet" onClick={ (event)=> changetabcss(event, 'wallet')}>
                        <img src={walletpng} className="left-img" />
                        <div className="left-tab-name" onClick={()=> changeTab("wallets")}>Wallets</div>
                    </div>
                    <div className='left-tab-title' id="dex" onClick={ (event)=> changetabcss(event, 'dex')}>
                        <img src={dexpng} className="left-img"/>
                        <div className="left-tab-name" onClick={()=> changeTab("dex")}>Dex</div>
                    </div>
                    <div className='left-tab-title' id="vortex" onClick={ (event)=> changetabcss(event, 'vortex')}>
                        <img src={vortexpng} className="left-img"/>
                        <div className="left-tab-name" onClick={()=> changeTab("vortex")}>Vortex</div>
                    </div>
                    <div className='left-tab-title' id="swap" onClick={ (event)=> changetabcss(event, 'swap')}>
                        <img src={swappng} className="left-img"/>
                        <div className="left-tab-name" onClick={()=> changeTab("swap")}>Swap</div>
                    </div >
                    <div className='left-tab-title' id="settings" onClick={ (event)=> changetabcss(event, 'settings')}>
                        <img src={settingspng} className="left-img"/>
                        <div className="left-tab-name-setting" onClick={()=> changeTab("settings")}>Settings</div>
                    </div>
                    
                </div>
                
                
            </div>
            <div className="rightside-portfolio" id="rightside-portfolio">
                <p style={{"float":"left", "marginLeft":"80px"}}>Portfolio</p>
                <div className="portfolio-balance"><div style={{"position":"absolute", "marginLeft":"5%","marginTop":"20px"}}>${totalBalance.toFixed(2)}</div></div>
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
                            src={btcpng}/>
                            </div> 
                            <div className="portfolio-currency-left-name">Bitcoin BTC</div>
                            <div className="portfolio-currency-left-balance">{btcbalance.toFixed(2)} BTC (${((btcbalance)*100).toFixed(2)})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((btcbalance)*100/totalBalance*100).toFixed(2)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send" onClick={()=>{setCoinname("BTC");btnonclicksend()}}>Send</div>
                                <div className="portfolio-currency-right-receive"onClick={()=>{setCoinname("BTC");btnonclickreceive()}}>Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img  
                            style={{"width":"35px","height":"35x","marginLeft":"17px","marginTop":"-4px"}}
                            src={aethpng}/></div>
                            <div className="portfolio-currency-left-name" style={{"marginLeft":"12px"}}>Arbitrum AETH</div>
                            <div className="portfolio-currency-left-balance">{aethbalance.toFixed(2)} AETH (${((aethbalance)*100).toFixed(2)})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((aethbalance)*100/totalBalance*100).toFixed(2)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send" onClick={()=>{setCoinname("AETH");btnonclicksend()}}>Send</div>
                                <div className="portfolio-currency-right-receive" onClick={()=>{setCoinname("AETH");btnonclickreceive()}}>Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            src={ethpng}/>
                            </div>
                            <div className="portfolio-currency-left-name">Ethereum ETH</div>
                            <div className="portfolio-currency-left-balance">{ethbalance.toFixed(2)} ETH (${((ethbalance)*100).toFixed(2)})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((ethbalance)*100/totalBalance*100).toFixed(2)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send"  onClick={()=>{setCoinname("ETH");btnonclicksend()}}>Send</div>
                                <div className="portfolio-currency-right-receive" onClick={()=>{setCoinname("ETH");btnonclickreceive()}}>Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            src={hdxpng}/>   
                            </div>
                            <div className="portfolio-currency-left-name"> Hydranet HDX</div>   
                            <div className="portfolio-currency-left-balance">{hdxbalance.toFixed(2)} HDX (${hdxbalance.toFixed(2)})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((hdxbalance)/totalBalance*100).toFixed(2)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send" onClick={()=>{setCoinname("HDX");btnonclicksend()}}>Send</div>
                                <div className="portfolio-currency-right-receive" onClick={()=>{setCoinname("HDX");btnonclickreceive()}}>Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            src={ltcpng}/>
                            </div>
                            <div className="portfolio-currency-left-name"> Litecoin LTC</div>  
                            <div className="portfolio-currency-left-balance">{ltcbalance.toFixed(2)} LTC (${((ltcbalance)*10).toFixed(2)})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((ltcbalance)*10/totalBalance*100).toFixed(2)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send" onClick={()=>{setCoinname("LTC");btnonclicksend()}}>Send</div>
                                <div className="portfolio-currency-right-receive" onClick={()=>{setCoinname("LTC");btnonclickreceive()}}>Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            style={{"width":"35px", "height":"35px", "marginRight":"0px","marginLeft":"17px"}} 
                            src={usdcpng}/>
                            </div>
                            <div className="portfolio-currency-left-name">USD Coin USDC</div>  
                            <div className="portfolio-currency-left-balance">{usdcbalance.toFixed(2)} USDC (${usdcbalance.toFixed(2)})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{((usdcbalance)/totalBalance*100).toFixed(2)}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send" onClick={()=>{setCoinname("USDC");btnonclicksend()}}>Send</div>
                                <div className="portfolio-currency-right-receive" onClick={()=>{setCoinname("USDC");btnonclickreceive()}}>Receive</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-currencies">
                        <div className="portfolio-currency-left">
                            <div className="portfolio-currency-left-name">
                            <img className="pngportfolio" 
                            style={{"width":"30px", "height":"30px", "marginRight":"2px","marginLeft":"19px"}}
                            src={usdtpng}/>
                            </div>
                            <div className="portfolio-currency-left-name">USD Tether USDT</div>  
                            <div className="portfolio-currency-left-balance">{usdtbalance.toFixed(2)} USDT (${usdtbalance.toFixed(2)})</div>
                        </div>
                        <div className="portfolio-currency-right">
                            <div className="portfolio-currency-right-ratio">{Number(((usdtbalance)/totalBalance*100).toFixed(2))}%</div>
                            <div className="portfolio-currency-right-sendreceive">
                                <div className="portfolio-currency-right-send" onClick={()=>{setCoinname("USDT");btnonclicksend()}}>Send</div>
                                <div className="portfolio-currency-right-receive" onClick={()=>{setCoinname("USDT");btnonclickreceive()}}>Receive</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightside-wallet" id="rightside-wallet">
               
                
            <div className="wallets-headers">
                <div id="wallets-header-transaction" className="wallets-header-transaction active"
                    onClick={(event)=>{changetotxs();changecss(event, 'wallets-header-transaction')}}>
                    <div className="transaction">TRANSACTIONS</div>
                </div>
                
                <div id="wallets-header-channel" className="wallets-header-transaction"
                    onClick={(event)=>{changetochannels();changecss(event, 'wallets-header-channel')}}>
                    <div className="transaction">CHANNELS</div>
                </div>
            </div>
            <div className="wallets-leftside">
                    <div style={{"textAlign":"left","padding":"10px","fontSize":"13px"}}>7 wallets total</div> 
                    <div>
                        <div className="wallets-coin" id="aeth"onClick={(e)=>{changeTabOnWallet("AETH");changecointabcss(e, 'aeth')}}>
                            <img className="pnglight" src={greenpng}/>
                            <img className="pngaeth" src={aethpng}/>
                            <div>Arbitrum - AETH</div>
                            <div>{aethbalance.toFixed(2)} - AETH</div>
                            <div style={{"fontSize":"10px"}}>${((aethbalance)*100).toFixed(2)}</div>
                        </div>
                        <div className="wallets-coin active" id="btc"onClick={(e)=>{changeTabOnWallet("BTC");changecointabcss(e, 'btc')}}>
                            <img className="pnglight" src={greenpng}/>
                            <div className="png"><img className="pngb" src={btcpng}/></div>
                            <div>Bitcoin - BTC</div>
                            <div>{(btcbalance).toFixed(2)} - BTC</div>
                            <div style={{"fontSize":"10px"}}>${((btcbalance)*100).toFixed(2)}</div>
                        </div>
                        <div className="wallets-coin" id="eth"onClick={(e)=>{changeTabOnWallet("ETH");changecointabcss(e, 'eth')}}>
                            <img className="pnglight" src={greenpng}/>
                            <div className="png"><img className="pngb" src={ethpng}/></div>
                            <div>Ethereum - ETH</div>
                            <div>{ethbalance.toFixed(2)} - ETH</div>
                            <div style={{"fontSize":"10px"}}>${((ethbalance)*100).toFixed(2)}</div>
                        </div>
                        <div className="wallets-coin" id="hdx"onClick={(e)=>{changeTabOnWallet("HDX");changecointabcss(e, 'hdx')}}>
                            <img className="pnglight" src={greenpng}/>
                            <div className="png"><img className="pngb" src={hdxpng}/></div>
                            <div>Hydranet - HDX</div>
                            <div>{hdxbalance.toFixed(2)} - HDX</div>
                            <div style={{"fontSize":"10px"}}>${hdxbalance.toFixed(2)}</div>
                        </div>
                        <div className="wallets-coin" id="ltc"onClick={(e)=>{changeTabOnWallet("LTC");changecointabcss(e, 'ltc')}}>
                            <img className="pnglight" src={greenpng}/>
                            <div className="png"><img className="pngb" src={ltcpng}/></div>
                            <div>Litecoin - LTC</div>
                            <div>{ltcbalance.toFixed(2)} - LTC</div>
                            <div style={{"fontSize":"10px"}}>${((ltcbalance)*10).toFixed(2)}</div>
                        </div>
                        <div className="wallets-coin" id="usdc"onClick={(e)=>{changeTabOnWallet("USDC");changecointabcss(e, 'usdc')}}>
                            <img className="pnglight" src={greenpng}/>
                            <img className="png" style={{"width":"40px", "height":"40px", "marginRight":"17px","marginLeft":"12px"}} 
                            src={usdcpng}/>
                            <div>USD Coin - USDC</div>
                            <div>{usdcbalance.toFixed(2)} - USDC</div>
                            <div style={{"fontSize":"10px"}}>${usdcbalance.toFixed(2)}</div>
                        </div>
                        <div className="wallets-coin" id="usdt"onClick={(e)=>{changeTabOnWallet("USDT");changecointabcss(e, 'usdt')}}>
                            <img className="pnglight" src={greenpng}/>
                            <img className="png" style={{"width":"35px", "height":"40px", "marginRight":"17px","marginLeft":"16px"}}
                            src={usdtpng}/>
                            <div>USD Tether - USDT</div>
                            <div>{usdtbalance.toFixed(2)} - USDT</div>
                            <div style={{"fontSize":"10px"}}>${usdtbalance.toFixed(2)}</div>
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
                            <div className='wallet-balance-value'>${balanceValue.toFixed(2)}</div>
                            <div>
                                <div >{balance.toFixed(2)} {coinname}</div>
                               
                            </div> <div style={{"fontSize":"12px"}}>{coinPrice}</div>
                        </div>
                        <div className="wallets-send" onClick={btnonclicksend}>Send
                            <div className="wallets-send-img-div" >
                                <img src={uppng} className="wallets-send-img"/>
                            </div>
                        </div>
                        <div className="wallets-reveive" onClick={btnonclickreceive}>Receive
                            <div className="wallets-send-img-div">
                                <img src={downpng} className="wallets-send-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="wallets-slider">
                        <div className="wallets-slider-onchain-offchain">
                            <div className="wallets-slider-onchain">
                                <div>On Chain</div>
                                <div>{onchain.toFixed(2)} {coinname}</div>
                            </div>
                            <div className="wallets-slider-offchain">
                                <div >Off Chain</div>
                                <div>{balanceL2.toFixed(2)} {coinname}</div>
                            </div>
                        </div>
                        <div className="slider">
                            <input type="range" className="slider" min="1" max={onchain} value={newchannelinput} 
                            onChange={e=>setNewChannelInput(e.target.value)}/>
                        </div>
                        <div className="input-bottom">
                            <div className="dex-refunds">DEX Refunds:<bold>0.00 USD</bold></div>
                            <div className="apply-button"><button className="apply-button1" onClick={btnonclicknewchannelslider}>Apply</button></div>
                            <div className="slider-ratio">{Math.floor(newchannelinput*100/onchain)}%</div>
                        </div>
                    </div>
                    <div className="wallet-channels-tab" id="wallet-channels-tab">
                        <div className="channels-tx-header">
                                <div className="channel-header">Channels</div>
                                <div className="channel-header1">Backup/Restore</div>
                                <div className="channel-header1" onClick={btnonclicknewrental}>Channel Rental</div>
                                <div className="channel-header1" onClick={btnonclicknewchannel}>New Channel+</div>
                                <div className="channel-header1">Public Key:026af0d8dbc266....
                                <img className="copyimg"src={copypng}></img>
                                </div>
                        </div>
                        <div className="wallets-tx-channels">
                            <div className="cansend-canreceive">
                                <div className="cansend">
                                    <div>CAN SEND</div>
                                    <div className="cansendreceive-balance">{balanceL2} {coinname}</div>
                                    <div className="arrowdiv" >
                                    <img className="arrow1" src={leftpng}/>
                                </div>

                                </div>
                                <div class="meter"></div>
                                
                                <div className="canreceive"> 
                                    <div>CAN RECEIVE</div>
                                    <div className="cansendreceive-balance">{balanceCR} {coinname}</div>
                                    <div className="arrowdiv2" >
                                    <img className="arrow2" src={leftpng}/>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="wallets-channels-headers">
                            <div className="wallet-channels-header">CHANNEL</div>
                            <div className="wallet-channels-header">STATUS</div>
                            <div className="wallet-channels-header">CAN SEND</div>
                            <div className="wallet-channels-header">CAN RECEIVE</div>
                            <div className="wallet-channels-header">RENTAL TIME</div>
                            <div className="wallet-channels-headerlast"></div>
                        </div>
                        <div id='tableChannelbtc' className="wallets-channels">
                            <div id='btcchannel' className='ethchannels'>
                                <div className='ethchannel'>Channel 1</div>
                                <div className='ethchannel' style={{"color":"green"}}>Active</div>
                                <div className='ethchannel' >{balanceL2}</div>
                                <div className='ethchannel' >{balanceCR}</div>
                                <div className='ethchannel' ></div>
                                <div className='ethchannellast' >
                                    <div className='close-receive-closechannel' 
                                        onClick={()=>closeChannel("btcclose")}> &times;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='tableChannelaeth' className="wallets-channels">
                            <div id='aethchannel' className='ethchannels'>
                                <div className='ethchannel'>Channel 1</div>
                                <div className='ethchannel' style={{"color":"green"}}>Active</div>
                                <div className='ethchannel' >{balanceL2}</div>
                                <div className='ethchannel' >{balanceCR}</div>
                                <div className='ethchannel' ></div>
                                <div className='ethchannellast' >
                                    <div className='close-receive-closechannel' 
                                        onClick={()=>closeChannel("aethclose")}> &times;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='tableChanneleth' className="wallets-channels">
                            <div id='ethchannel' className='ethchannels'>
                                <div className='ethchannel'>Channel 1</div>
                                <div className='ethchannel' style={{"color":"green"}}>Active</div>
                                <div className='ethchannel' >{balanceL2}</div>
                                <div className='ethchannel' >{balanceCR}</div>
                                <div className='ethchannel' ></div>
                                <div className='ethchannellast' >
                                    <div className='close-receive-closechannel' 
                                        onClick={()=>closeChannel("ethclose")}> &times;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='tableChannelhdx' className="wallets-channels">
                            <div id='hdxchannel' className='ethchannels'>
                                <div className='ethchannel'>Channel 1</div>
                                <div className='ethchannel' style={{"color":"green"}}>Active</div>
                                <div className='ethchannel' >{balanceL2}</div>
                                <div className='ethchannel' >{balanceCR}</div>
                                <div className='ethchannel' ></div>
                                <div className='ethchannellast' >
                                    <div className='close-receive-closechannel' 
                                        onClick={()=>closeChannel("hdxclose")}> &times;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='tableChannelltc' className="wallets-channels">
                            <div id='ltcchannel' className='ethchannels'>
                                <div className='ethchannel'>Channel 1</div>
                                <div className='ethchannel' style={{"color":"green"}}>Active</div>
                                <div className='ethchannel' >{balanceL2}</div>
                                <div className='ethchannel' >{balanceCR}</div>
                                <div className='ethchannel' ></div>
                                <div className='ethchannellast' >
                                    <div className='close-receive-closechannel' 
                                        onClick={()=>closeChannel("ltcclose")}> &times;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='tableChannelusdc' className="wallets-channels">
                            <div id='usdcchannel' className='ethchannels'>
                                <div className='ethchannel'>Channel 1</div>
                                <div className='ethchannel' style={{"color":"green"}}>Active</div>
                                <div className='ethchannel' >{balanceL2}</div>
                                <div className='ethchannel' >{balanceCR}</div>
                                <div className='ethchannel' ></div>
                                <div className='ethchannellast' >
                                    <div className='close-receive-closechannel' 
                                        onClick={()=>closeChannel("usdcclose")}> &times;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='tableChannelusdt' className="wallets-channels">
                            <div id='usdtchannel' className='ethchannels'>
                                <div className='ethchannel'>Channel 1</div>
                                <div className='ethchannel' style={{"color":"green"}}>Active</div>
                                <div className='ethchannel' >{balanceL2}</div>
                                <div className='ethchannel' >{balanceCR}</div>
                                <div className='ethchannel' ></div>
                                <div className='ethchannellast' >
                                    <div className='close-receive-closechannel' 
                                        onClick={()=>closeChannel("usdtclose")}> &times;
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <div style={{"textAlign":"left","opacity":"50%","fontSize":"22px"}}>No Transactions</div>
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
                    <div className="dex-market">MARKET</div>
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
                            <br/> = ${selectedPair1L2Value.toFixed(2)} <br/> Can Receive: 
                            <br/>${selectedPair1CRValue.toFixed(2)}
                            
                        </div>
                    </div>
                    <div className="dex-secondcoin">
                        <div className="dex-firstcoin-img-div">
                        {selectedPair2img=="" ? null : <img className="dex-firstcoin-img"src={selectedPair2img}></img> }
                        </div >
                        <div className="dex-secondcoin-balance">
                        <div className='dex-firstcoin-balance-value'>{selectedPair2L2}</div>   
                        <br/> = ${selectedPair2L2Value.toFixed(2)} <br/> Can Receive: <br/>${selectedPair2CRValue.toFixed(2)} 
                        </div>
                    </div>
                    <div className="dex-buttons">
                        <div className="dex-buysell-button1">
                            <button className="dex-button1 active" id="dex-button11"
                            onClick={(event)=>{setButton("buy");changebtncss(event, 'dex-button11')}}>Buy</button>
                            <button className="dex-button1" id="dex-button12"
                            onClick={(event)=>{setButton("sell");changebtncss(event, 'dex-button12')}}>Sell</button>
                        </div>
                        <div className="dex-buysell-button2">
                            <button className="dex-button2 active" id="dex-button21"
                            onClick={(event)=>{changebtn1css(event, 'dex-button21')}}>Limit</button>
                            <button className="dex-button2" id="dex-button22"
                            onClick={(event)=>{changebtn1css(event, 'dex-button22')}}>Market</button>
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
                        <div className="dex-input-number">${buyPrice}</div>
                    </div>
                    <div className="dex-inputs">
                        <div>
                            <div className="dex-input-inside"> {firstCoin}</div>
                            {button=="buy"? <div className="dex-input-top">Amount to receive</div> : 
                            <div className="dex-input-top">Amount to spend</div>}
                            <input  className="dex-input2" id="dex-input2" type="number" value={tradeAmount} 
                            onChange={(e)=>setTradeAmount(e.target.value)}></input></div>
                        <div className="dex-input-number">${tradeAmount*buyPrice}</div>
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
                        <div className="dex-input-number">${tradeAmount*buyPrice}</div>
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
                        <img className="chart" src={chartpng}/>
                        
                    </div>
                    <div className='dex-orderbook'>
                        <div className='dex-orderbook-tabs'>
                            <div className='dex-orderbook-tab active' id="dex-orderbook-tab1" 
                            onClick={(event)=>{openorderbook();changeordertabcss(event, 'dex-orderbook-tab1')}}>
                                <div style={{"marginTop":"15px"}} >
                                    <div className="dex-orderbook-tab-inside">ORDER BOOK</div>
                                </div>
                            </div>
                            <div className='dex-orderbook-tab' id="dex-orderbook-tab2" 
                            onClick={(event)=>{openopenorders();changeordertabcss(event, 'dex-orderbook-tab2')}}>
                                <div style={{"marginTop":"15px"}} >
                                    <div className="dex-orderbook-tab-inside">OPEN ORDERS</div>
                                </div>
                            </div>
                            <div className='dex-orderbook-tab' id="dex-orderbook-tab3"
                            onClick={(event)=>{openmytradehistory();changeordertabcss(event, 'dex-orderbook-tab3')}}>
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
                                        <div className="dex-orderbook-order" onClick={()=>enterBuyOrder(99,1)}>
                                           
                                            <div className="dex-orderbook-order-info"> 
                                            <img src={star} id="star11"/>99</div>
                                            <div className="dex-orderbook-order-info">99</div>
                                            <div className="dex-orderbook-order-info" id='orderbook11'>1</div>
                                            <div className="dex-orderbook-order-info-buyprice">99</div>
                                            
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterBuyOrder(98,2)}> 
                                            <div className="dex-orderbook-order-info">
                                            <img src={star} id="star12"/>2950</div>
                                            <div className="dex-orderbook-order-info">1960 </div>
                                            <div className="dex-orderbook-order-info"  id='orderbook12'>2</div>
                                            <div className="dex-orderbook-order-info-buyprice">98 </div>
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterBuyOrder(97,3)}>
                                            <div className="dex-orderbook-order-info">
                                            <img src={star} id="star13"/>5860</div>
                                            <div className="dex-orderbook-order-info">2910</div>
                                            <div className="dex-orderbook-order-info"  id='orderbook13'>3</div>
                                            <div className="dex-orderbook-order-info-buyprice">97</div>
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterBuyOrder(96,4)}>
                                            <div className="dex-orderbook-order-info">
                                            <img src={star} id="star14"/>7780</div>
                                            <div className="dex-orderbook-order-info">1920</div>
                                            <div className="dex-orderbook-order-info" id='orderbook14'>4</div>
                                            <div className="dex-orderbook-order-info-buyprice">96</div>
                                        </div>
                                        <div className="dex-orderbook-order" id="userbuyorder"onClick={()=>enterBuyOrder(95,5)}>
                                            <div className="dex-orderbook-order-info">
                                            <img src={star} id="star15"/>14780</div>
                                            <div className="dex-orderbook-order-info">7920</div>
                                            <div className="dex-orderbook-order-info" id='orderbook15'>5</div>
                                            <div className="dex-orderbook-order-info-buyprice" id='userbuyprice'>95</div>
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
                                        <div className="dex-orderbook-order" onClick={()=>enterSellOrder(101,1)}>
                                            <div className="dex-orderbook-order-info-sellprice">101</div>
                                            <div className="dex-orderbook-order-info" id='orderbook21'>1</div>
                                            <div className="dex-orderbook-order-info">101</div>
                                            <div className="dex-orderbook-order-info">101
                                            <img src={star} id="star21"/></div>
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterSellOrder(102,2)}>
                                            <div className="dex-orderbook-order-info-sellprice">102</div>
                                            <div className="dex-orderbook-order-info" id='orderbook22'>2</div>
                                            <div className="dex-orderbook-order-info">2400</div>
                                            <div className="dex-orderbook-order-info">3500
                                            <img src={star} id="star22"/></div>
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterSellOrder(103,3)}>
                                            <div className="dex-orderbook-order-info-sellprice">103</div>
                                            <div className="dex-orderbook-order-info" id='orderbook23'>3</div>
                                            <div className="dex-orderbook-order-info">3900</div>
                                            <div className="dex-orderbook-order-info">7400
                                            <img src={star} id="star23"/></div>
                                        </div>
                                        <div className="dex-orderbook-order" onClick={()=>enterSellOrder(104,4)}>
                                            <div className="dex-orderbook-order-info-sellprice">104</div>
                                            <div className="dex-orderbook-order-info" id='orderbook24'>4</div>
                                            <div className="dex-orderbook-order-info">5600</div>
                                            <div className="dex-orderbook-order-info">13000
                                            <img src={star} id="star24"/></div>
                                        </div>
                                        <div className="dex-orderbook-order" id="usersellorder" onClick={()=>enterSellOrder(105,5)}>
                                            <div className="dex-orderbook-order-info-sellprice" id="usersellprice">105</div>
                                            <div className="dex-orderbook-order-info" id='orderbook25'>5</div>
                                            <div className="dex-orderbook-order-info">9600</div>
                                            <div className="dex-orderbook-order-info">73000
                                            <img src={star} id="star25"/></div>
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
                                    <div style={{"marginTop":"10px"}}>7780 <span style={{"color":"green"}}>{secondCoin}</span></div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}>10 <span style={{"color":"green"}}>{firstCoin}</span></div>
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
                                    <div style={{"marginTop":"10px"}}>10 <span style={{"color":"red"}}>{firstCoin}</span></div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}>15950 <span style={{"color":"red"}}>{secondCoin}</span></div>
                                </div>
                                <div className="dex-orderbook-order-info">
                                    <div style={{"marginTop":"10px"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="dex-orderbook-openorders" id="dex-orderbook-openorders">
                            <div className='dex-orderbook-openorders-headers'>
                                <div className='dex-orderbook-openorders-header'>TYPE</div>
                                <div className='dex-orderbook-openorders-header'>SIDE</div>
                                <div className='dex-orderbook-openorders-header'>PRICE({firstCoin})</div>
                                <div className='dex-orderbook-openorders-header'>AMOUNT({secondCoin})</div>
                                <div className='dex-orderbook-openorders-header'>FILLED({secondCoin})</div>
                                <div className='dex-orderbook-openorders-header'>TOTAL({firstCoin})</div>
                                <div className='dex-orderbook-openorders-header'>ACTIONS</div>
                            </div>
                            
                        </div>
                        <div className="dex-orderbook-myorderhistory" id="dex-orderbook-myorderhistory">
                            <div className='dex-orderbook-myorders-headers'>
                                <div className='dex-orderbook-myorders-header'>DATE</div>
                                <div className='dex-orderbook-myorders-header'>SIDE</div>
                                <div className='dex-orderbook-myorders-header'>PRICE({firstCoin})</div>
                                <div className='dex-orderbook-myorders-header'>FILLED({secondCoin})</div>
                                <div className='dex-orderbook-myorders-header'>TOTAL({firstCoin})</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dex-rightside" >
                    <div className="dex-rightside-title">TRADE HISTORY</div>
                    <div className="dex-rightside-headers">
                        <div className="dex-rightside-header">AMOUNT({firstCoin})</div>
                        <div className="dex-rightside-header">TIME</div>
                        <div className="dex-rightside-header">PRICE({secondCoin})</div>
                    </div>
                    <div className="dex-rightside-history" id="dex-rightside">
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">1</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">44</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">16</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">56</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">1</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-buypricex">101</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">13</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">1</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-buypricex">101</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">35</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">2</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">15</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-buypricex">101</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">62</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-buypricex">101</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">4</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-buypricex">101</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">15</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">51</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-buypricex">101</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">1</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">65</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">14</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">3</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-buypricex">101</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">1</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                        <div class="dex-orderbook-order">
                            <div class="dex-orderbook-order-infox">5</div>
                            <div class="dex-orderbook-order-info-timex">{tarih}</div>
                            <div class="dex-orderbook-order-info-sellpricex">99</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightside-vortex"  id="rightside-vortex">
                
            </div>
            <div className="rightside-swap" id="rightside-swap">
                <div className="swap-header">Swap</div>
                <div className="swap-top">
                    <div className="swap-top-line">
                        
                        <div className="swap-top-left1" id='swap-top-left1'>
                            <div id="swap-first-div">
                                <select className='swap-top-left-select' id="swap-first" onChange={()=>swapOption()} >
                                    <option value="1btc1" className='swap-option'>BTC Bitcoin</option>
                                    <option value="1aeth2"className='swap-option'>AETH Arbitrum</option>
                                </select>
                                <input className='swap-top-left-input1' placeholder='Amount' value={firstswapinput}
                                onChange={(e)=>{setFirstSwapInput(e.target.value); setSecondSwapInput(e.target.value*swapPrice)}}></input>
                                <input className='swap-top-left-input2' placeholder='$' 
                                value={changeside=="left" ?  firstswapinput*swapPrice: firstswapinput*swapPrice }></input>
                            </div>
                        </div>
                        <div  className="swap-top-center-img" onClick={()=>changeSide()}>
                            <img  className="swap-top-center-img"src={swapimg} /><div id='swap-price'>1 btc = 100 usdt</div>
                        </div>
                        <div className="swap-top-right1" id='swap-top-right1'>
                            <div id="swap-second-div">
                                <select className='swap-top-right-select' id="swap-second" onChange={()=>swapOption2()} >
                                    <option value="2usdt"className='swap-option'>USDT Tether</option>
                                    <option value="2hdx" className='swap-option'>HDX Hydranet</option>
                                    <option value="2ltc" className='swap-option'>LTC Litecoin</option>
                                    <option value="2eth" className='swap-option'>ETH Ethereum</option>
                                </select>
                                <input className='swap-top-right-input1' placeholder='Amount' value={secondswapinput}
                                onChange={(e)=>{setSecondSwapInput(e.target.value); setFirstSwapInput(e.target.value/swapPrice)}}></input>
                                <input className='swap-top-right-input2' placeholder='$'
                                value={changeside=="left" ? firstswapinput*swapPrice : firstswapinput*swapPrice}></input>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
                <div className="swap-bottom">
                    <img className="swap-bottom-img"src={swapcoinimg}/>
                </div>
                <button className='swap-button' onClick={()=>swapOrder()}>Confirm</button>
            </div>
            <div className="rightside-settings" id="rightside-settings">
                <div className='settings-leftside-header1'>Settings</div>
                <div className='settings-leftside'>
                    <div className='settings-leftside-header2' 
                    onClick={()=>changeSettings("2")}>Window Settings</div>
                    <div className='settings-leftside-header3'   
                    onClick={()=>changeSettings("3")}>Assets</div>
                    <div className='settings-leftside-header4'   
                    onClick={()=>changeSettings("4")}>Orderbook UX</div>
                    <div className='settings-leftside-header5'  
                    onClick={()=>changeSettings("5")}>Localization</div>
                    <div className='settings-leftside-header6'  
                    onClick={()=>changeSettings("6")}>Backup</div>
                    <div className='settings-leftside-header7'   
                    onClick={()=>changeSettings("7")}>Software Version</div>
                </div>
                <div className='settings-rightside-Window-Settings' id='settings-leftside-header2'>
                    {/* <div className='settings-rightside-Window-Settings-header'>Minimize Button</div>
                    <div className='settings-rightside-Window-Settings-content'>Minimizing will make the Dex hide in the system tray, reducing <br/> resource usage</div>
                    <div className='settings-rightside-Window-Settings-header'>Enable Vortex (experimantal) - requires restart</div>
                    <div className='settings-rightside-Window-Settings-content'>Vortex is currently under development and an experimental feature.<br/> That still has bugs</div>
                    <div className='settings-rightside-Window-Settings-header'>Enable SSUI ( experimental) - requires restart</div>
                    <div className='settings-rightside-Window-Settings-content'>SSUI is currently under development and an experimental feature.<br/> That still has bugs</div> */}
                    <img src={window} className='settings-rightside-Assets-imgwindow'></img></div>
                
                <div className='settings-rightside-Assets' id='settings-leftside-header3'>
                    <img src={assets} className='settings-rightside-Assets-img'></img>
                </div>
                <div className='settings-rightside-Orderbook-UX' id='settings-leftside-header4'>
                    <img src={ux1} className='settings-rightside-Assets-imgux1'></img>
                    <img src={ux2} className='settings-rightside-Assets-imgux'></img>
                    <img src={ux3} className='settings-rightside-Assets-imgux'></img>
                </div>
                <div className='settings-rightside-Localization'id='settings-leftside-header5'>
                <img src={localization} className='settings-rightside-Assets-img'></img>
                </div>
                <div className='settings-rightside-Backup' id='settings-leftside-header6' >
                    <div className='settings-rightside-Backup-header'>Create Password</div>
                    <button className='settings-rightside-Backup-btn'>CREATE</button>
                    <hr></hr>
                    <div className='settings-rightside-Backup-header'>Your 24 word seed phrase</div>
                    <div className='settings-rightside-Backup-content' id='settings-rightside-Backup-content'>
                        <div className='settings-rightside-Backup-content1'>!!! For your safety, do not share this seed phrase with anyone and don not keep a copy of this on a device that has an online connection</div>
                        <div className='settings-rightside-Backup-content2'>cave fashion virtual vivid fatal remember wink punch concert canvas crane iron witness impulse endorse bar morning tide ivory annual flame fish electric oppose</div>
                        <img className="settings-rightside-Backup-copypng" src={copypng}/>
                    </div>
                    {seed == "opened" ? <button className='settings-rightside-Backup-btn' onClick={()=>showHideSeed()}>HIDE SEED PHRASE</button>
                    : <button className='settings-rightside-Backup-btn' onClick={()=>showHideSeed()}>SHOW SEED PHRASE</button>}
                    
                    

                </div>
                <div className='settings-rightside-Software-Version' id='settings-leftside-header7' >
                    <img src={version} className='settings-rightside-Assets-img'></img>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  );
}

export default App;
