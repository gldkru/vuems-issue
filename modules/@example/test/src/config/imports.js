export const Pages = {
  Index: () => import('@test/pages/index').then((m) => m.default || m),
}
