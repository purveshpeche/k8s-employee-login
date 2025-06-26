# 🧑‍💼 Employee Login App on Kubernetes

This project demonstrates a simple **Employee Login system** using:

- **Frontend**: HTML + Express (static server)
- **Backend**: Node.js + Express + MongoDB
- **Database**: MongoDB
- **Kubernetes**: Deployment, Service, Rollout, Rollback
- **Docker Hub**: Custom images with versioning

---

## 🌐 Application Features

- Register employee with username & password.
- Login using registered credentials.
- Show "Login Successful" on success.
- Data is stored in MongoDB.
- Full Kubernetes stack with versioned deployments and rollbacks.

---

## 📦 Project Structure

k8s-employee-login/
├── backend/ # Node.js backend with login logic
│ ├── server.js
│ └── package.json
├── frontend/ # Express server serving HTML form
│ ├── index.html
│ └── server.js
├── k8s/ # Kubernetes YAML manifests
│ ├── backend-deployment.yaml
│ ├── frontend-deployment.yaml
│ └── mongo-deployment.yaml


---

## 🐳 Docker Images

Build and push versioned Docker images:

```bash
# Backend v1
cd backend
docker build -t purveshpeche/backend-app:v1 .
docker push purveshpeche/backend-app:v1

# Backend v2
docker build -t purveshpeche/backend-app:v2 .
docker push purveshpeche/backend-app:v2

# Frontend
cd ../frontend
docker build -t purveshpeche/frontend-app:v1 .
docker push purveshpeche/frontend-app:v1

Deploy All Components


kubectl apply -f k8s/mongo-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml

Access the Application
Get Minikube IP:

minikube ip

Open in Browser:

http://<MINIKUBE_IP>:32000

You should see:

A page with two sections: Register and Login
