To avoid cloning the project, you can download this folder using a tool like [GitZip](https://kinolien.github.io/gitzip/). Paste the URL to this folder (https://github.com/sndmnn/my-sandbox/tree/main/repro/side-panels) and click the "Download" button.

To start the project, run `npm run start` in the root directory.

# The Problem

Side panels don't seem to be re-rendering when the state changes. You can see that the list is being updated in the background, but the icons in the side panel are only updated after closing and reopening the panel.

https://github.com/sndmnn/my-sandbox/assets/50667385/8a03fb9b-cb82-4fa7-929a-679b315723d2
