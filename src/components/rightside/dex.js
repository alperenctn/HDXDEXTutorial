import React from "react";

function Dex(props){
    return(
        <div className="rightside-dex">
            <div className="dex-leftside">
                <div className="dex-dexheader-dex-online"> 
                    <div className="dex-dexheader">DEX</div>
                    <div  className="dex-dexheader-online">ONLINE</div>
                </div>
                <div className="dex-market">MARKET</div>
                <div className="dex-option">
                    <select className="dex-select">
                        <option>BTC/USDC</option>
                        <option>ETH/USDC</option>
                        <option>AETH/HDX</option>
                    </select>
                </div>
                <div className="dex-firstcoin">

                </div>
                <div className="dex-secondcoin">

                </div>
                <div className="dex-buttons">
                    <div className="dex-buysell-button">
                        <button className="dex-button">Buy</button>
                        <button className="dex-button">Sell</button>
                    </div>
                    <div className="dex-buysell-button">
                        <button className="dex-button">Limit</button>
                        <button className="dex-button">Market</button>
                    </div>
                </div>
                <div className="dex-inputs">
                    <div><input  className="dex-input1" type="number" placeholder="Buy price"></input></div>
                    <div className="dex-input-number">$0.00</div>
                </div>
                <div className="dex-inputs">
                    <div><input  className="dex-input2" type="number" placeholder="Amount to receive"></input></div>
                    <div className="dex-input-number">$0.00</div>
                </div>
                <div className="dex-ratio-numbers">
                    <div className="dex-ratio-number">25%</div>
                    <div className="dex-ratio-number">50%</div>
                    <div className="dex-ratio-number">75%</div>
                    <div className="dex-ratio-number">100%</div>
                </div>
                <div className="dex-inputs">
                    <div><input  className="dex-input2" type="number" placeholder="Total"></input></div>
                    <div className="dex-input-number">$0.00</div>
                </div>
                <div style={{"fontSize":"10px"}}>Place order fee:0.000000001BTC</div>
                <div>
                    <button>Buy</button>
                </div>
            </div>
            
            
            <div className="dex-center"></div>
            <div className="dex-rightside"></div>
        </div>
    )
}
export default Dex;