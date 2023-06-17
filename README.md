# CICD-GCP

This repository contains a basic CI/CD workflow using GitHub Actions and Google Cloud Platform (GCP). The workflow automates the build, push, and deployment of a Docker image to Cloud Run.

## Workflow Overview

The workflow defined in this repository performs the following steps:

1. Checkout: Retrieves the repository's code using the `actions/checkout` action.

2. Setup Node.js: Sets up the Node.js environment using the `actions/setup-node` action and specifies the Node.js version.

3. Build and Push Docker Image: Builds a Docker image from the code and pushes it to the specified Docker registry. This step uses the `mr-smithers-excellent/docker-build-push` action.

4. Deploy Service to Cloud Run: Deploys the Docker image as a service on Cloud Run. This step utilizes the `stefda/action-cloud-run` action.

## Usage

To use this CI/CD workflow in your own project, follow these steps:

1. Fork this repository to your own GitHub account.

2. Make any necessary modifications to the `.github/workflows/main.yml` file based on your project's requirements. For example, you may need to update the Docker image name, registry information, Cloud Run service details, or the Google Cloud project ID.

3. Create a Google Cloud service account and obtain its private key JSON file.

4. Add the private key JSON file as a secret in your GitHub repository. In the repository settings, go to "Secrets" and create a new secret named `GCP_SERVICE_ACCOUNT_PK_JSON`. Paste the contents of the private key JSON file into the secret.

5. Add the base64-encoded private key JSON file, you can create another secret named `GCP_SERVICE_ACCOUNT_PK_JSON_BASE64` and provide the base64-encoded string instead.

6. Trigger the workflow by pushing changes to the repository or by creating a pull request.

7. Monitor the workflow execution in the "Actions" tab of your repository. You will see the build, push, and deployment steps being executed.

8. Verify the deployed service on Cloud Run.

## Contributing

Contributions to this repository are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
