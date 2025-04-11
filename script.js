document.addEventListener("DOMContentLoaded", () => {
  const githubUrlInput = document.getElementById("github-url")
  const convertBtn = document.getElementById("convert-btn")
  const loadingElement = document.getElementById("loading")
  const errorMessageElement = document.getElementById("error-message")
  const resultElement = document.getElementById("result")
  const resultLinkElement = document.getElementById("result-link")
  const reposListElement = document.getElementById("repos-list")
  const reposContainerElement = document.getElementById("repos-container")

  // Regular expressions for URL validation and parsing
  const githubRepoRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^/]+)\/([^/]+)(?:\/.*)?$/i
  const githubPagesRegex = /^(?:https?:\/\/)?([^/]+)\.github\.io\/([^/]+)(?:\/.*)?$/i
  const githubUserRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^/]+)\/?$/i

  // Handle input on Enter key
  githubUrlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      processUrl()
    }
  })

  // Handle paste event
  githubUrlInput.addEventListener("paste", (e) => {
    // Use setTimeout to allow the paste to complete before processing
    setTimeout(() => {
      const pastedUrl = githubUrlInput.value.trim()
      if (pastedUrl) {
        const sanitizedUrl = sanitizeUrl(pastedUrl)
        githubUrlInput.value = sanitizedUrl
        processUrl()
      }
    }, 0)
  })

  // Handle button click
  convertBtn.addEventListener("click", processUrl)