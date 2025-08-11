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
 
- Explored port forwarding to access the service locally and learned how to run port forwarding in the background.

## Deliverables  
- deployment.yaml and service.yaml files.  
- Screenshots showing running pods and exposed services.  
<img width="1850" height="863" alt="image" src="https://github.com/user-attachments/assets/304e80b4-06f3-4db4-b7e2-69b7be335e34" />

<img width="1916" height="1009" alt="image" src="https://github.com/user-attachments/assets/5282a0cb-4c2f-4afa-9309-0e8087e0506c" />



