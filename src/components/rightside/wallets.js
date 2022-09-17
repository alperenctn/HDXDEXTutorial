import React, { useState,useEffect } from "react";

function Wallets(props){

    const [aethbalance,setAethBalance] = useState(5);
    const [btcbalance,setBtcBalance] = useState(0);
    const [ethbalance,setEthBalance] = useState(0);
    const [hdxbalance,setHdxBalance] = useState(0);
    const [ltcbalance,setLtcBalance] = useState(0);
    const [usdcbalance,setUsdcBalance] = useState(0);
    const [usdtbalance,setUsdtBalance] = useState(0);
    const [img,setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg");
    const [walletName,setWalletName] = useState("BTC Wallet");
    const [coinPrice, setCoinPrice] = useState("1 BTC = 100 usd");
    const [balanceValue, setBalanceValue] = useState(btcbalance*1000)
    const [coinname,setCoinname] = useState("Bitcoin - BTC")

    const [balance,setBalance] = useState(btcbalance);
    
    const displaywallet = document.getElementById("rightside-wallet");

    const variabless = [aethbalance,btcbalance,ethbalance,hdxbalance,
        ltcbalance,usdcbalance,usdtbalance,displaywallet]
    
    
    const changeTabOnWallet = (x) => {
        switch(x){
            case "Arbitrum - AETH":
             setBalance(aethbalance);
             setImg("https://imgyukle.com/f/2022/09/12/nheXFs.png");
             setWalletName("AETH Wallet")
             setCoinPrice("1 AETH = 100 usd");
             setBalanceValue(aethbalance*100);
             setCoinname("Arbitrum - AETH")
             
            return;
            case "Bitcoin - BTC":
             setBalance(btcbalance);
             setImg("https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg");
             setWalletName("BTC Wallet")
             setCoinPrice("1 BTC = 1000 usd");
             setBalanceValue(btcbalance*1000);
             setCoinname("Bitcoin - BTC")
             
            return;
            case "Ethereum - ETH":
             setBalance(ethbalance);
             setImg("https://imgyukle.com/f/2022/09/11/nhC0It.png");
             setWalletName("ETH Wallet")
             setCoinPrice("1 ETH = 100 usd");
             setBalanceValue(ethbalance*100);
             setCoinname("Ethereum - ETH")
            return;
            case "Hydranet - HDX":
             setBalance(hdxbalance);
             setImg("https://imgyukle.com/f/2022/09/11/nhSkiN.png");
             setWalletName("HDX Wallet")
             setCoinPrice("1 HDX = 1 usd");
             setBalanceValue(hdxbalance*1);
             setCoinname("Hydranet - HDX")
            return;
            case "Litecoin - LTC":
             setBalance(ltcbalance);
             setImg("https://imgyukle.com/f/2022/09/11/nhSym6.png");
             setWalletName("LTC Wallet")
             setCoinPrice("1 LTC = 10 usd");
             setBalanceValue(ltcbalance*10);
             setCoinname("Litecoin - LTC")
            return;
            case "USD Coin - USDC":
             setBalance(usdcbalance);
             setImg("https://imgyukle.com/f/2022/09/11/nhSxiM.png");
             setWalletName("USDC Wallet")
             setCoinPrice("1 USDC = 1 usd");
             setBalanceValue(usdcbalance*1);
             setCoinname("USD Coin - USDC")
            return;
            case "USD Tether - USDT":
             setBalance(usdtbalance);
             setImg("https://cryptologos.cc/logos/tether-usdt-logo.png?v=023");
             setWalletName("USDT Wallet")
             setCoinPrice("1 USDT = 1 usd");
             setBalanceValue(usdtbalance*1);
             setCoinname("USD Tether - USDT")
            return;
            default:
            return null
        }
    }

    const modal1 = document.getElementById("myModal-receive");
    const btnonclickreceive = () => {
    modal1.style.display = "block";
    }

    const spanonclickreceive = () => {
    modal1.style.display = "none";
    }
    
    const modal2 = document.getElementById("myModal-send");
    const btnonclicksend = () => {
    modal2.style.display = "block";
    }

    const spanonclicksend = () => {
    modal2.style.display = "none";
    }

    const depositeBalance = (y) =>{
        const x = document.getElementById("inputdeposite").value;
        switch(y){
            case "Arbitrum - AETH":
            setAethBalance(Number(aethbalance)+Number(x));
            changeTabOnWallet("Arbitrum - AETH")
            spanonclickreceive();
            props.pass(variabless)
            return;
            case "Arbitrum - AETH":
            setAethBalance(Number(aethbalance)+Number(x));
            return;
            case "Arbitrum - AETH":
            setAethBalance(Number(aethbalance)+Number(x));
            return;
            case "Arbitrum - AETH":
            setAethBalance(Number(aethbalance)+Number(x));
            return;
            case "Arbitrum - AETH":
            setAethBalance(Number(aethbalance)+Number(x));
            return;
            case "Arbitrum - AETH":
            setAethBalance(Number(aethbalance)+Number(x));
            return;
            case "Arbitrum - AETH":
            setAethBalance(Number(aethbalance)+Number(x));
            return;
            default:
            return null
        }
    }

    return(
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
                    <div  className="modal-option">
                        <select className="modal-option">
                            <option>{coinname}</option>
                            <option>Lightning/Connext - {coinname}</option>
                        </select>
                    </div>
                    <div className="modal-warning">Send only BTC to this address. Sending any other 
                        digital asset will result in permanent loss.
                    </div>
                    <div className="modal-address">tb1qd73ex2x47e8zzzcmzgqgqkuy5eg49c5er5qus3</div>
                    <img className="modal-copyimg"src="https://imgyukle.com/f/2022/09/11/nhyJnq.png"></img>
                    <ul className="modal-ul">
                        <li>  Coins will be deposited after 3 network confirmations.</li>
                        <li>You can check the progress on transaction page.</li>
                    </ul>
                </div>
                <div className="modal-content-deposite">
                    <div>DEPOSITE </div>
                    <div>
                        <input id="inputdeposite" type="number" placeholder={coinname}/>
                        
                    </div>
                    <div>
                        <button onClick={()=>depositeBalance(coinname)}>Deposite</button>
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
                    <div  className="modal-option">
                        <select className="modal-option">
                            <option>{coinname}</option>
                            <option>Lightning/Connext - {coinname}</option>
                        </select>
                    </div>
                    <div className="modal-warning">Send only BTC to this address. Sending any other 
                        digital asset will result in permanent loss.
                    </div>
                </div>
                <div id="myModal-deposite" class="modal-deposite">
                
            </div>
            </div>
            
           <div className="wallets-headers">
            <div className="wallets-header-transaction">TRANSACTIONS</div>
            <div className="wallets-header-channel">CHANNELS</div>
           </div>
           <div className="wallets-leftside">
                <div style={{"textAlign":"left","padding":"10px","fontSize":"13px"}}>7 wallets total</div> 
                <div>
                    <div className="wallets-coin" onClick={()=>changeTabOnWallet("Arbitrum - AETH")}>
                        <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                        <img className="png" src="https://imgyukle.com/f/2022/09/11/ngblZM.png"/>
                        <div>Arbitrum - AETH</div>
                        <div>{aethbalance} - AETH</div>
                        <div style={{"fontSize":"10px"}}>${aethbalance*100}</div>
                    </div>
                    <div className="wallets-coin" onClick={()=>changeTabOnWallet("Bitcoin - BTC")}>
                        <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                        <div className="png"><img className="pngb" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"/></div>
                        <div>Bitcoin - BTC</div>
                        <div>{btcbalance} - BTC</div>
                        <div style={{"fontSize":"10px"}}>${btcbalance*1000}</div>
                    </div>
                    <div className="wallets-coin" onClick={()=>changeTabOnWallet("Ethereum - ETH")}>
                        <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                        <div className="png"><img className="pngb" src="https://imgyukle.com/f/2022/09/11/nhC0It.png"/></div>
                        <div>Ethereum - ETH</div>
                        <div>{ethbalance} - ETH</div>
                        <div style={{"fontSize":"10px"}}>${ethbalance*100}</div>
                    </div>
                    <div className="wallets-coin" onClick={()=>changeTabOnWallet("Hydranet - HDX")}>
                        <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                        <div className="png"><img className="pngb" src="https://imgyukle.com/f/2022/09/11/nhSkiN.png"/></div>
                        <div>Hydranet - HDX</div>
                        <div>{hdxbalance} - HDX</div>
                        <div style={{"fontSize":"10px"}}>${hdxbalance}</div>
                    </div>
                    <div className="wallets-coin" onClick={()=>changeTabOnWallet("Litecoin - LTC")}>
                        <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                        <div className="png"><img className="pngb" src="https://imgyukle.com/f/2022/09/11/nhSym6.png"/></div>
                        <div>Litecoin - LTC</div>
                        <div>{ltcbalance} - LTC</div>
                        <div style={{"fontSize":"10px"}}>${ltcbalance*10}</div>
                    </div>
                    <div className="wallets-coin" onClick={()=>changeTabOnWallet("USD Coin - USDC")}>
                        <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                        <img className="png" style={{"width":"40px", "height":"40px", "marginRight":"17px","marginLeft":"12px"}} 
                        src="https://imgyukle.com/f/2022/09/11/nhSxiM.png"/>
                        <div>USD Coin - USDC</div>
                        <div>{usdcbalance} - USDC</div>
                        <div style={{"fontSize":"10px"}}>${usdcbalance}</div>
                    </div>
                    <div className="wallets-coin" onClick={()=>changeTabOnWallet("USD Tether - USDT")}>
                        <img className="pnglight" src="https://imgyukle.com/f/2022/09/11/ng46tP.png"/>
                        <img className="png" style={{"width":"35px", "height":"40px", "marginRight":"17px","marginLeft":"16px"}}
                        src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=023"/>
                        <div>USD Tether - USDT</div>
                        <div>{usdtbalance} - USDT</div>
                        <div style={{"fontSize":"10px"}}>${usdtbalance}</div>
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
                        <div style={{"fontSize":"25px"}}>${balanceValue}</div>
                        <div>
                            <div style={{"float":"left"}}>{balance} {coinname}</div>
                            <div style={{"float":"left","fontSize":"12px"}}>{coinPrice}</div>
                        </div>
                    </div>
                    <div className="wallets-send" onClick={btnonclicksend}>Send</div>
                    <div className="wallets-reveive" onClick={btnonclickreceive}>Receive</div>
                </div>
                <div className="wallets-slider">
                    <div className="wallets-slider-onchain-offchain">
                        <div className="wallets-slider-onchain">
                            <div>On Chain</div>
                            <div>{balance}</div>
                        </div>
                        <div className="wallets-slider-offchain">
                             <div >Off Chain</div>
                            <div>0</div>
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
                <div className="channels-tx-header">
                        <div className="channel-header">Channels</div>
                        <div className="channel-header1">Backup/Restore</div>
                        <div className="channel-header1">Channel Rental</div>
                        <div className="channel-header1">New Channel+</div>
                        <div className="channel-header1">Public Key:026af0d8dbc266....
                        <img className="copyimg"src="https://imgyukle.com/f/2022/09/11/nhyJnq.png"></img>
                        </div>
                </div>
                <div className="wallets-tx-channels">
                    <div className="cansend-canreceive">
                        <div className="cansend">
                            <div>CAN SEND</div>
                            <div className="cansendreceive-balance">0</div>
                            <div className="arrowdiv" >
                            <img className="arrow" src="https://imgyukle.com/f/2022/09/12/nhZBgG.png"/>
                            </div>

                        </div>
                        <div class="meter"></div>
                        <div className="canreceive"> 
                            <div>CAN RECEIVE</div>
                            <div className="cansendreceive-balance">0</div>
                            <div className="arrowdiv2" >
                            <img className="arrow" src="https://imgyukle.com/f/2022/09/12/nhZ38q.png"/>
                            </div>
                            
                        </div>
                    </div> 
                </div>
                <div className="wallets-channels">
                    <table>
                        <tr className="wallets-channels-headers">
                            <td className="wallet-channels-header">STATUS</td>
                            <td className="wallet-channels-header">CHANNEL</td>
                            <td className="wallet-channels-header">CAN SEND</td>
                            <td className="wallet-channels-header"> CAN RECEIVE</td>
                            <td className="wallet-channels-header">RENTAL TIME</td>
                        </tr>
                        <tr>
                            <td className="wallets-channel" >Channel 1</td>
                            <td className="wallets-channel">Active</td>
                            <td className="wallets-channel">0</td>
                            <td className="wallets-channel">0</td>
                            <td className="wallets-channel">0</td>
                        </tr>
                        <tr>
                            <td className="wallets-channel">Channel 2</td>
                            <td className="wallets-channel">Active</td>
                            <td className="wallets-channel">345345</td>
                            <td className="wallets-channel">3456345</td>
                            <td className="wallets-channel">0</td>
                        </tr>
                        <tr>
                            <td className="wallets-channel">Channel 3</td>
                            <td className="wallets-channel">Active</td>
                            <td className="wallets-channel">345345</td>
                            <td className="wallets-channel">3456345</td>
                            <td className="wallets-channel">0</td>
                        </tr>
                    </table>
                </div>
           </div>
        </div>
    )
}
export default Wallets;