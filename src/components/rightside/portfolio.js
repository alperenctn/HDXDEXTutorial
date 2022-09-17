import React from "react";
import Left from "../leftside/left";
import Wallets from "./wallets";

function Portfolio(props){
    const [aethbalance,btcbalance,ethbalance,hdxbalance,
        ltcbalance,usdcbalance,usdtbalance,displaywallet] = props.variables;

    const x = document.getElementById("rightside-portfolio")
    return(
        <div className="rightside-portfolio" id="rightside-portfolio">
            <p style={{"float":"left", "marginLeft":"80px"}}>Portfolio</p>
            <div className="portfolio-balance"><div style={{"position":"absolute", "marginLeft":"5%","marginTop":"20px"}}>$3254</div></div>
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
                        <div className="portfolio-currency-left-balance">{btcbalance} BTC</div>
                    </div>
                    <div className="portfolio-currency-right">
                        <div className="portfolio-currency-right-ratio">0%</div>
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
                        <div className="portfolio-currency-left-balance">{aethbalance} AETH</div>
                    </div>
                    <div className="portfolio-currency-right">
                        <div className="portfolio-currency-right-ratio">0%</div>
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
                        <div className="portfolio-currency-left-balance">{ethbalance} ETH</div>
                    </div>
                    <div className="portfolio-currency-right">
                        <div className="portfolio-currency-right-ratio">0%</div>
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
                        <div className="portfolio-currency-left-balance">{hdxbalance} HDX</div>
                    </div>
                    <div className="portfolio-currency-right">
                        <div className="portfolio-currency-right-ratio">0%</div>
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
                        <div className="portfolio-currency-left-balance">{ltcbalance} LTC</div>
                    </div>
                    <div className="portfolio-currency-right">
                        <div className="portfolio-currency-right-ratio">0%</div>
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
                        <div className="portfolio-currency-left-balance">{usdcbalance} USDC</div>
                    </div>
                    <div className="portfolio-currency-right">
                        <div className="portfolio-currency-right-ratio">0%</div>
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
                        <div className="portfolio-currency-left-balance">{usdtbalance} USDT</div>
                    </div>
                    <div className="portfolio-currency-right">
                        <div className="portfolio-currency-right-ratio">0%</div>
                        <div className="portfolio-currency-right-sendreceive">
                            <div className="portfolio-currency-right-send">Send</div>
                            <div className="portfolio-currency-right-receive">Receive</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;