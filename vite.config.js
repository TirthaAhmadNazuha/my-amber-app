import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    reportCompressedSize: false,
  },
  esbuild: {
    jsxFactory: 'AmberJsx.createElement',
    jsxFragment: 'AmberJsx.Fragment',
    jsxImportSource: 'amber',
    jsxInject: "import { AmberJsx } from 'C:/Users/CITHA/Folder Nazu/project/amber/Amber';\n",
  },
});
