describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const comp = await import('../components/TheHeader.vue')
    expect(comp).toBeDefined()
  })
  describe('import vue components', () => {
    test('normal imports as expected', async () => {
      const comp = await import(`../components/TheFooter.vue`)
      expect(comp).toBeDefined()
    })
  })
  describe('import vue components', () => {
    test('dynamic imports as expected', async () => {
      const name = 'HeroSection'
      const comp = await import(`../components/${name}.vue`)
      expect(comp).toBeDefined()
    })
  })
})
