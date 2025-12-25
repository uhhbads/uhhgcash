from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

app = FastAPI(title="Credit Scoring Service")

class Txn(BaseModel):
    amount: float
    type: str
    timestamp: str

class TxnList(BaseModel):
    transactions: list[Txn]

@app.post('/score')
def score(txns: TxnList):
    # Placeholder feature extraction
    amounts = [t.amount for t in txns.transactions]
    mean = float(np.mean(amounts)) if amounts else 0.0
    std = float(np.std(amounts)) if amounts else 0.0
    # Dummy score: scale of 300-850
    score = int(550 + (mean - std))
    credit_limit = max(1000, int(mean * 10))
    return {"score": max(300, min(850, score)), "credit_limit": credit_limit}

@app.get('/')
def root():
    return {"service":"credit-scoring"}
