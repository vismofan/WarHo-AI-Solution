# WarHo AI Solutions

This is a modern React application powered by Vite.

## 🚀 How to Deploy from GitHub to IONOS

This is the recommended way to host your site. It updates automatically whenever you save code to GitHub.

### Phase 1: Push Code to GitHub

1.  **Initialize Git**
    Open your terminal in this project folder and run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create Repo on GitHub**
    *   Go to GitHub.com and create a **New Repository**.
    *   Name it `warho-ai`.
    *   **Do not** check "Add README" or "Add .gitignore" (we already have them).

3.  **Push Code**
    *   Copy the commands GitHub gives you under "…or push an existing repository from the command line".
    *   Paste them into your terminal. It usually looks like:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/warho-ai.git
    git branch -M main
    git push -u origin main
    ```

### Phase 2: Connect to IONOS

1.  Log in to **IONOS**.
2.  Go to **Menu > Deploy Now**.
3.  Click **Create Project**.
4.  Select **GitHub** as the source.
5.  Authorize IONOS to access your GitHub account.
6.  Select the `warho-ai` repository you just created.

### Phase 3: Configure Build Settings

IONOS might auto-detect the settings, but if it asks:

*   **Framework:** Vite (or React)
*   **Build Command:** `npm run build`
*   **Publish Directory:** `dist`
*   **Node Version:** 18 or higher

### Phase 4: Add Your API Key (CRITICAL)

Your AI features will not work without the key.

1.  In the IONOS Deploy Now dashboard, go to your Project Settings.
2.  Find **Environment Variables**.
3.  Add a new variable:
    *   **Key:** `API_KEY`
    *   **Value:** `(Paste your Gemini API key here)`
4.  Save and trigger a **Redeploy**.

---

### Alternative: Manual Upload (FTP)

If you do not want to use GitHub:

1.  Run `npm run build` on your computer.
2.  Upload the **contents** of the `dist` folder to your web host using FileZilla.
