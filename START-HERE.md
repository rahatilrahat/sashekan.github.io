# Your academic website

This package is a standalone website with Home, Research, Teaching, and CV pages. It uses no build tools or external fonts. Your Google account is not involved.

## Preview

Extract the ZIP, then double-click `index.html`. All four pages and the CV work locally. Keep the files and the `assets` folder together.

## Publish on GitHub Pages

1. Sign in to GitHub and create a **public** repository named **YOURUSERNAME.github.io**, replacing YOURUSERNAME with your actual GitHub username.
2. Choose **Add file → Upload files** (or the upload link in an empty repository).
3. Drag the **extracted contents** of this package into the upload area, including the `assets` folder. Upload the files, not the ZIP or a containing folder. `index.html` must be at the repository’s top level.
4. Commit the upload.
5. Open **Settings → Pages**. Under Build and deployment, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
6. Wait for deployment and open the website address shown there, normally `https://YOURUSERNAME.github.io`.

Upload only this website package, not your broader job-market folder. The published files, including the CV, will be public.

GitHub’s guides: [Pages quickstart](https://docs.github.com/en/pages/quickstart) · [Uploading files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

## Before publishing

- Review the biography, job-market year, teaching dates, and the two research summaries. The summaries are draft descriptions, not quotations of the paper abstracts.
- The included CV was compiled from your existing `cv_ashekan.tex`, without editing that source. Its displayed update date is June 10, 2026. Review it before publication: the abstract pairs an average markdown of 1.39 with a 46% wage comparison; those figures need reconciliation. The website summaries intentionally omit numerical findings.
- Add a headshot if desired; the initials currently serve as a deliberate placeholder.
- Add paper PDFs when you are ready to share them. The Research page currently provides summaries without paper-download links.

## Updating the website

You can edit these files with a text editor, or ask me to revise the package and upload the replacements.

| Change | File |
| --- | --- |
| Biography and job-market announcement | `index.html` |
| Paper titles and summaries | `research.html` |
| Courses and semesters | `teaching.html` |
| CV page text | `cv.html` |
| CV document | Replace `assets/cv.pdf` using the same filename |
| Colors, spacing, and fonts | `styles.css` |

For a portrait, save your image as `assets/portrait.jpg`. In `index.html`, replace the entire `div` with class `portrait-placeholder` with:

```html
<img class="portrait" src="assets/portrait.jpg" alt="Sheikh R Ashekan">
```

To add the job-market paper, put its PDF at `assets/job-market-paper.pdf` and add this link inside the first paper article in `research.html`:

```html
<p><a href="assets/job-market-paper.pdf">Read paper (PDF)</a></p>
```

Keep filenames lowercase and use the same spelling in links. After replacing files on GitHub, commit your changes and wait for Pages to redeploy.
