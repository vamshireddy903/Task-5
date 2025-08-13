# TASK 5: Build a Kubernetes Cluster Locally with Minikube

## Objective  
Deploy and manage applications in Kubernetes locally using Minikube.

## Tools Used  
- Minikube  
- kubectl  
- Docker  

## What I Did  

- Installed and started a local Kubernetes cluster using Minikube.  
- Created a deployment.yaml manifest to deploy a simple Node.js application.  
- Created a service.yaml manifest of type NodePort to expose the application outside the cluster.  

 # Verified pod and service status using

       kubectl get pods
       kubectl get svc  

 Used `kubectl describe` and pod logs to monitor application and cluster health.  
 
## Deliverables  
- deployment.yaml and service.yaml files.  
- Screenshots showing running pods and exposed services.  
<img width="1424" height="667" alt="image" src="https://github.com/user-attachments/assets/d85e66ad-5b40-4e50-bd26-2e7771721c48" />

<img width="1920" height="963" alt="image" src="https://github.com/user-attachments/assets/4817d0d9-05b8-46c4-8cba-b29eb34ecea1" />



