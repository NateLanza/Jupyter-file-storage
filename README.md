Abstract classes (as well as an implemented demo) for Jupyter widgets to store persistent data in a file on the backend.

Since this is a one-off, python deps are not included. All that you need is `anywidget`; you can run `test.ipynb` in any environment with `anywidget` installed.

After using your JS package manager of choice to install packages from `package.json` into `node_modules`, you can build the frontend JS by running `build_all.mjs` in node. Personally, I use hatch for this: `hatch run node build_all.mjs`. 

Once setup is complete, you should be able to play around with the code using `test.ipynb` as your entry point. I've only tested this in VSCode.