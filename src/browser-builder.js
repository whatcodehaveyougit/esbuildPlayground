require('esbuild').buildSync({
  entryPoints: ['src/app2.tsx'],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outdir: './public/dist'
})