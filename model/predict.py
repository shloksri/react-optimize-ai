# model/predict.py

import sys
import json
import pandas as pd
from joblib import load

model = load("model/model.pkl")
scaler = load("model/scaler.pkl")
encoder = load("model/encoder.pkl")

logs = json.load(sys.stdin)
df = pd.DataFrame(logs)

X = df[["actualDuration", "renderTime", "stateUpdates", "propsReceived", "propsUsed"]]
X_scaled = scaler.transform(X)

preds = model.predict(X_scaled)
decoded = encoder.inverse_transform(preds)

for i, row in enumerate(df["component"]):
    print(f"🔍 {row}: 💡 Suggested Optimization → {decoded[i]}")
