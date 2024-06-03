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

# Based Agent Protection Fund 

## Introduction
4% of all BAAG emissions for the purpose of a “Protection Fund” and delegates to the Code Providers to act as oracles in the case of its resources being needed.
Type of actions:
- Payment of bug bounty to avoid attacks.
- Payment of audits before new Smart Contracts are deployed.
- Halting the Smart Contracts in case of an on going attack.
- Signaling and Mechansim for payout after an attack.
- Plan In Case of Significant Loss Event (Hard Fork Scenario)

## Pre-Defined Cases Triggering Minor Payouts
Before the Smart Contracts go live on the Ethereum network here defined are the conditions under which the Protection Fund will pay out MOR or stETH.

## Types of Payments:
1. Bugs discovered and responsibly disclosed to the developers of Based Agent Capital, Code, Community or Protection Fund Smart Contracts.
2. Payment of audits before new Based Agent Smart Contracts are deployed.
3. User losses of BAAG or stETH in the case of an exploited Based Agent Smart Contract.
4. Making whole providers who didn’t receive BAAG emissions in the case of a failure of the Baesd Agent Smart Contract.

Amounts of payments from the protection fund should be in proportion to the bug, loss or emission error.

## Halting Conditions For Smart Contracts
Before payments for damages can be figured out, there should be conditions that trigger a halt of the Smart Contracts in the case of an on going attack.

## Signaling & Mechanism For Payout
Code Providers will participate in signaling when a payment should be triggered. First an incident will be detailed and posted on the GitHub repository of the affected Smart Contract. Including a list of affected addresses and amounts of BAAG and / or stETH.

If a majority of Code Providers (as measured by the weight of their BAAG tokens held) which participate in the Signaling period (no longer than 7 days) validate the report as TRUE, then a payment will be triggered.

Once a payment is triggered the software will message the developers to authorize a payment to the affected addresses in the amounts specified.

## Plan In Case of a Significant Loss Event
A Significant Loss Event is defined as an event in which the BAAG losses exceed the total resources of the Protection Fund. In this case, rather than make a payout of BAAG the Code Providers should deploy new Smart Contracts and correct the BAAG balances effected manually. This would effectively cause a hard fork in the code / BAAG balances and all Providers, token hodlers and other infrastructure providers would have to update their code to the new Smart Contracts.

In the case of stETH lost in a Significant Loss Event, the Protection Fund shall pay out to the maximum extent possible on a pro rata basis to the amount of each person’s losses.

## Conclusion
Bugs and errors in software are a reality and mark the history from the two unintentional hard forks of Bitcoin to The DAO during the early days of Ethereum. 

So planning ahead for different scenarios and cases and how to handle them is a wise approach for protecting against and otherwise mitigating risks. Fortunately, having set aside resources in advance with the Protection Fund, and also part of the protection fund earning LP rewards in the AMM the resources dedicated to protection of users ought to grow larger over time.

# 📄 License
Distributed under the MIT License.
