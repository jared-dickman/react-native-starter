import create from 'zustand'

export {useAuthStore}

type iUserToken = number | undefined

interface iAuthState {
  userToken: iUserToken
  setUserToken(token: iUserToken): void
}

const useAuthStore = create<iAuthState>((set) => ({
  userToken: undefined,
  setUserToken: (newUserToken: iUserToken) => set(state => ({ userToken: newUserToken })),
}))