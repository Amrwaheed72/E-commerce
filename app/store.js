const { create } = require("zustand");

const useStore = create((set) => ({
    cart: 0,
    increaseCart: () => set((state) => ({ cart: state.cart + 1 })),
    decreaseCart: () => set((state) => ({ cart: state.cart - 1 })),
    clearCart: () => set(() => ({ cart: 0 }))
}))

export default useStore