# Mitigating Resource-Exhaustion Attacks (DDoS) on GraphQL APIs

This repository contains code examples that demonstrate strategies for protecting GraphQL APIs from resource-exhaustion attacks, which are a common form of distributed denial-of-service (DDoS) attack.

## Contents

The repository have different branches which contains the following code examples:

- [Query-Depth-Limit](https://github.com/huboh/graphql-resource-exhaustion-attack/tree/query-depth-limit-example): This example demonstrates how to set a query depth limit for your GraphQL server to prevent clients from sending overly complex or nested queries that can cause your server to become overwhelmed. The code is written in JavaScript and uses the graphql-depth-limit library.

- [Query-Cost-Complexity-Analysis](https://github.com/huboh/graphql-resource-exhaustion-attack/tree/query-cost-complexity-example): This example demonstrates how to use query complexity analysis to analyze incoming GraphQL queries and limit their complexity. The code is written in JavaScript and uses the graphql-query-complexity library.

- [Pre-Approved Queries](https://github.com/huboh/graphql-resource-exhaustion-attack/tree/pre-approved-queries-example): This example demonstrates how to use an approved-list approach that lists all of the allowed queries your server is allowed to execute.

## Getting Started

To use these code examples, simply clone the repository to your local machine and follow along the examples in the article. Each example branch in this repo is self-contained and includes all necessary dependencies.

## Installation

- clone the repository

```bash
git clone https://github.com/huboh/graphql-resource-exhaustion-attack.git
```

- enter the project directory

```bash
cd graphql-resource-exhaustion-attack
```

- install project dependencies

```bash
npm install
```

## Usage

To start the server, run the following commands :-

- The command below builds the typescript project and creates a `/build` directory containing `JavaScript` code in the project's root directory

```bash
npm run build
```

- In a separate terminal window, run the following command to start the server on port `4000`.

```bash
npm run start
```

![start the graphql server](</assets/images/Screenshot%20(145).png>)

- Go to the url the server is listening on in your browser to open Apollo GraphIQl Playground. (`http://localhost:4000/`)

![Apollo GraphIQL Playground](</assets/images/Screenshot%20(147).png>)

## Contributing

If you have additional code examples or suggestions for improving the existing examples, feel free to submit a pull request. Contributions are always welcome!

## License

This repository is licensed under the MIT license. See the [LICENSE](/LICENSE) file for details.

## References

- [Mitigating Resource-Exhaustion Attacks on GraphQL Servers (DDoS)](<http://www.knowledgemusa.com/articles/Mitigating-Resource-Exhaustion-Attacks-(DDoS)-on-GraphQL-APIs-Best-Practices-and-Strategies>)
