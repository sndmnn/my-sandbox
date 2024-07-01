You can download this folder using a tool like [GitZip](https://kinolien.github.io/gitzip/). Paste the URL to this folder (https://github.com/sndmnn/my-sandbox/tree/main/repro/side-panels) and click the "Download" button.

To start the project, run `npm run start` in the root directory.

# The Problem

Side panels don't seem to be re-rendering when the state changes

My solution would be to wrap it in a context
