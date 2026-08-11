# Borabu Builders Website V4

Visual direction: brighter V2 interface restored, with the current production enquiry functionality preserved.

## What changed
- Restored the brighter green / white visual direction and V2 page layout.
- Every **Start a project** CTA opens the enquiry form immediately in a responsive modal.
- Retains Netlify form name `project-enquiry` and the exact automation field names: `name`, `company`, `email`, `phone`, `service`, `location`, `message`, `project-file`.
- Retains file upload for PDF, Word, JPG and PNG.
- Uses `info@borabubuilders.com` and `borabubuilders.com`.
- Adds a dedicated `thank-you.html` success page.

## Deployment
Upload the contents of this folder to the existing GitHub repository. Netlify should redeploy automatically.

After deployment, confirm Netlify still detects the `project-enquiry` form before testing the Make / Google Drive automation.
