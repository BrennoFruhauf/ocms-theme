type scheme = 'dark' | 'light'

interface Theme {
  name: string
  color: string
  scheme: scheme
  background?: string
  override?: any
}
