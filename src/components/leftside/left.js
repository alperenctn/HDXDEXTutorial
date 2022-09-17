import React ,{useState, Component} from "react";




function Left(props){
    
    return(
        <div className="leftside">
            <div style={{"fontSize":"13px"}}>
                <img className="hdxlogo "src="https://imgyukle.com/f/2022/09/11/nhP7dN.png"/>
                <div className="hydranet-header">HYDRANET</div>
            </div>
            <hr className="hr"/>
            <div style={{"fontSize":"10px"}}>My Balance</div>
            <div style={{"fontSize":"13px"}}>$0</div>
            <div className="left-tab-names">
                <div className="left-tab-name" onClick={()=> props.changeTab("portfolio")}>Portfolio</div>
                <div className="left-tab-name" onClick={()=> props.changeTab("wallets")}>Wallets</div>
                <div className="left-tab-name" onClick={()=> props.changeTab("dex")}>Dex</div>
                <div className="left-tab-name" onClick={()=> props.changeTab("vortex")}>Vortex</div>
                <div className="left-tab-name" onClick={()=> props.changeTab("swap")}>Swap</div>
            </div>
            <div className="left-tab-name-setting" onClick={()=> props.changeTab("settings")}>Settings</div>
        </div>
    )
}

export default Left;
