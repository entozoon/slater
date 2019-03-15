import { component } from 'picoapp'

export default component((node, ctx) => {
  const cartCount = node.querySelector('.js-cart-count')
  const cartToggles = node.querySelectorAll('.js-cart-drawer-toggle')

  for (let i = 0; i < cartToggles.length; i++) {
    cartToggles[i].addEventListener('click', e => {
      e.preventDefault()

      ctx.emit('cart:toggle', state => ({ cartOpen: !state.cartOpen }))
      // ctx.emit('cartOpen', state => !state.cartOpen)
    })
  }

  ctx.on('cart:update', state => {
    cartCount.innerHTML = state.cart.item_count
  })

  cartCount.innerHTML = ctx.state.cart.item_count
})
