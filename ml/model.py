import joblib

REPO_URL = "https://github.com/nikidav9/ai-saas"

class Model:
    def __init__(self, path="model.pkl"):
        self.path = path
        self.model = joblib.load(path)
        self.version = "v2.0"

    def predict(self, X):
        return self.model.predict(X)
