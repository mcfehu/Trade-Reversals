import React from 'react';

export default function CandlestickPattern() {
  // Generate random candlestick data with larger dimensions
  const generateCandles = () => {
    return Array.from({ length: 30 }, () => ({
      height: Math.random() * 200 + 100, // Increased height
      width: Math.random() * 8 + 16, // Increased width
      positive: Math.random() > 0.4,
      wickHeight: Math.random() * 60 + 30 // Increased wick height
    }));
  };

  return (
    <div className="absolute inset-0 opacity-5"> {/* Reduced opacity for better contrast */}
      <div className="flex items-center space-x-4 h-full justify-center scale-150 transform"> {/* Added scale transform */}
        {generateCandles().map((candle, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className="w-1 bg-current" 
              style={{ height: `${candle.wickHeight}px` }}
            />
            <div
              className={`${candle.positive ? 'bg-green-400' : 'bg-red-400'}`}
              style={{
                height: `${candle.height}px`,
                width: `${candle.width}px`
              }}
            />
            <div 
              className="w-1 bg-current" 
              style={{ height: `${candle.wickHeight}px` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}