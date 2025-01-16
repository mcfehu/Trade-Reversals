import React from 'react';

export default function Disclaimer() {
  return (
    <footer className="bg-blue-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-blue-200 space-y-4">
          <p>
            DISCLAIMER: Trading in financial instruments carries a high level of risk to your capital with the possibility of losing more than your initial investment. Trading is not suitable for everyone and requires knowledge and experience. The information provided on this website is for educational purposes only and should not be considered as financial advice.
          </p>
          <p>
            Past performance is not indicative of future results. You should only trade with funds you can afford to lose. The signals we provide are based on technical analysis and our trading experience but do not guarantee any specific outcomes. Always conduct your own research and due diligence before making any trading decisions.
          </p>
          <p>
            Trade Reversals does not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks associated with trading and seek advice from an independent financial advisor if you have any doubts.
          </p>
          <div className="pt-4 text-blue-300">
            © {new Date().getFullYear()} Trade Reversals. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}