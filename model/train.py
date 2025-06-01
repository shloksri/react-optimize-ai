# model/train.py

import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split
from joblib import dump
import json

with open('./logs/sample_logs.json') as f:
    data = json.load(f)

df = pd.DataFrame(data)

X = df[["actualDuration", "renderTime", "stateUpdates", "propsReceived", "propsUsed"]]
y = df["optimizationApplied"]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y_encoded, test_size=0.2)

model = DecisionTreeClassifier()
model.fit(X_train, y_train)

dump(model, "model/model.pkl")
dump(scaler, "model/scaler.pkl")
dump(encoder, "model/encoder.pkl")

print("Model trained and saved as model.pkl")
