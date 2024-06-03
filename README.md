# BasedAgent: Code Less, Make More

Welcome to BasedAgent, the perfect companion for autonomous software engineers aiming to contribute to the Morpheus project. BasedAgent is powered by AI and Large Language Models, collaborating with developers to write code, fix bugs, and ship features efficiently.

## ⚡ Getting Started

To start using BasedAgent within a Docker container, run the following commands:

# The directory you want BasedAgent to work with. MUST be an absolute path!
export WORKSPACE_BASE=$(pwd)/workspace;


docker run -it \
    --pull=always \
    -e SANDBOX_USER_ID=$(id -u) \
    -e PERSIST_SANDBOX="true" \
    -e SSH_PASSWORD="make something up here" \
    -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \
    -v $WORKSPACE_BASE:/opt/workspace_base \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    --name basedagent-app-$(date +%Y%m%d%H%M%S) \
    ghcr.io/basedagent/basedagent:0.6


## Access BasedAgent at [http://localhost:3000](http://localhost:3000).

## 📚 Documentation
For more about the project and tips on using BasedAgent, visit [basedagent.co](http://basedagent.co).

## 🤝 How to Contribute
Contribute to BasedAgent by developing new features, participating in model evaluations, or improving our tools. Your involvement helps advance software engineering with AI.

## 🌐 Join Our Community
Join our [Discord](https://discord.gg/ytRUMVrcj2) to engage in discussions, ask questions, and connect with others enthusiastic about software engineering improvements.

## 📄 License
Distributed under the MIT License.
