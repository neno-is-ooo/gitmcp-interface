# getGitMCP

A quick tool to convert GitHub URLs to GitMCP endpoints. This tool allows you to easily generate MCP (Model Context Protocol) endpoints from GitHub repositories, pages, or user/organization URLs.

🔗 **Live here**: [https://neno-is-ooo.github.io/gitmcp-interface/](https://neno-is-ooo.github.io/gitmcp-interface/)

## About

getGitMCP is powered by [GitMCP](https://gitmcp.io/), created by [@idosal](https://github.com/idosal/git-mcp). It provides a simple interface to convert:

- GitHub repository URLs → GitMCP endpoints
- GitHub Pages URLs → GitMCP endpoints
- GitHub user/organization URLs → List of repositories with their GitMCP endpoints

With these MCP endpoints, your AI agents can fetch and gather context from repositories and their documentation.

## Features

- Clean, modern UI for URL conversion
- Support for multiple GitHub URL formats
- Automatic sanitization of pasted URLs
- Quick conversion of GitHub repository URLs to GitMCP endpoints
- Support for GitHub Pages URLs
- Repository listing for user/organization URLs
- Single-click opening of converted URLs

## How It Works

1. Paste a GitHub URL (repository, pages, or user/organization)
2. The tool instantly converts it to the corresponding GitMCP endpoint
3. Use the generated endpoint with your AI assistants to access repository content

## URL Conversion Examples

### GitHub Repository
```
github.com/username/repo → gitmcp.io/username/repo
```

### GitHub Pages
```
username.github.io/repo → username.gitmcp.io/repo
```

## Use Cases

- Allow AI assistants to access code repositories
- Enable AI tools to reference documentation
- Simplify the process of working with GitHub content in AI workflows
- Quickly generate MCP endpoints for multiple repositories

## Related Links

- [GitMCP Repository](https://github.com/idosal/git-mcp)
- [GitMCP Documentation](https://gitmcp.io/docs)

## License

This project is open source and available for modification and distribution.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this tool.
