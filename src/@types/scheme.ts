interface Color {
	array: number
	position: number
	alpha?: number
}

interface Token {
	fontStyle?: string
	foreground?: string | Color
}

interface TokenColor {
	name?: string
	scope: string | string[]
	settings: Token
}

interface Scheme {
	name?: string
	type?: string
	semanticHighlighting?: boolean
	semanticTokenColors?: {
		[tokenName: string]: string | Token
	} 
	colors?: {
		[tokenName: string]: string | Color
	}
	tokenColors?: TokenColor[]
}
