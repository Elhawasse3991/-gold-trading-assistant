# Gold Trading Assistant V2

## What changed
- Multi-timeframe dashboard: 5m, 15m, 1h, 4h, 1D
- Overall BUY / SELL / WAIT score
- RSI, EMA20/50/200, MACD, ATR
- Risk-based position-size estimate
- Stop, TP1 and TP2 estimates
- Optional Alpha Vantage live gold spot price
- Demo fallback so it runs without an API key
- No automatic order placement

## Install
python -m pip install -r requirements.txt

## Optional live gold spot
Set your Alpha Vantage API key as an environment variable:
Windows PowerShell:
$env:ALPHAVANTAGE_API_KEY="YOUR_KEY"

macOS/Linux:
export ALPHAVANTAGE_API_KEY="YOUR_KEY"

Then:
python app.py

Open http://127.0.0.1:5000

IMPORTANT:
The Alpha Vantage spot endpoint can provide the current gold spot price, but this version still uses demo candles for the technical indicators. The next production step is connecting a proper intraday XAU/USD candle feed and then adding economic-news filtering, backtesting, alerts, and optional broker execution with explicit confirmation.