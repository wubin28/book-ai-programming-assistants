# Question

我在本地电脑开发node.js后端时，保存deepseek API的.env文件只在我本地电脑保存，不会push到git版本库。但现在我在bolt.new网页上写后端代码，当我把deepseek API key写入.env后，bolt.new如何保证这个key不会外泄？

# bolt.new

That's a great question about API key security in Bolt.new!

Bolt.new handles environment variables, including API keys, securely in the following ways:

* Encryption: Environment variables are encrypted at rest.
* Access Control: Access to environment variables is restricted to the application runtime.
* No Git Storage: .env files are not committed to Git repositories within the Bolt.new environment.
* Runtime Injection: Environment variables are injected into the application's runtime environment at deployment, without being persisted in the codebase.

This means that while you're working on your project within Bolt.new, your API keys are stored securely and are not exposed in your codebase or version control.