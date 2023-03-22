import { ConnectWallet } from "@thirdweb-dev/react";
import react from 'react';
import '../assets/custom.css';

export default function Header() {

return (
    <header>
      <div className="nav">
        <div className="sisikanan">
          <h2 className="digital">NFT GALLERY</h2>
        </div>
        <div className="sisikiri">
          <ConnectWallet
            btnTitle="Sign Wallet"
            className="buttonConnect" />
        </div>
      </div>
    </header>
    );
}
