import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    reportCompressedSize: false,
  },
  esbuild: {
    jsxFactory: 'AmberJsx.createElement',
    jsxFragment: 'AmberJsx.Fragment',
    jsxImportSource: 'C:/Users/CITHA/Folder Nazu/project/amber/Amber',
    jsxInject: "import { AmberJsx } from 'C:/Users/CITHA/Folder Nazu/project/amber/Amber';\n",
  },
});
