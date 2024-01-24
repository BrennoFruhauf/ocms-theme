import chroma from "chroma-js"

/**
 * Generates a palette based on the provided theme.
 *
 * @param theme The theme configuration.
 * @returns A tuple containing arrays of main colors and monochromatic colors.
 */
const generatePalette = (theme: Theme): [string[], string[]] => {
	let colors: [string[], string[]]
	const defaultLuminance: Luminance = {min: 0, max: 1, amount: 10, step: 0}

	if (theme.scheme === 'dark') {
		colors = generateDarkPalette(theme, defaultLuminance)
	} else {
		colors = generateLightPalette(theme, defaultLuminance)
	}

	return colors
}

/**
 * Generates a palette for a dark theme.
 *
 * @param theme The theme configuration.
 * @param luminance The luminance configuration.
 * @returns A tuple containing arrays of main colors and monochromatic colors to dark theme.
 */
const generateDarkPalette = (theme: Theme, luminance: Luminance): [string[], string[]] => {
	const defaultBackground = '#131313'
	theme.background = theme.background ?? defaultBackground
	
	validateContrast(theme)
	
	luminance.min = 0.4
	luminance.step = (luminance.max - luminance.min) / luminance.amount
	const luminanceValues = calculateLuminanceRange(theme.color, luminance, luminance.amount, 'ASC')

	const colors: string[] = [chroma(theme.color).hex()]
	colors.push(...generateColors(theme.color, luminanceValues))

	luminance.min = 0.2
	luminance.step = (luminance.max - luminance.min) / luminance.amount
	const hslBackground = chroma(theme.background).hsl()
	const amount = hslBackground[2] < luminance.min ? luminance.amount - 1 : luminance.amount
	const luminanceMonoValues = calculateLuminanceRange(theme.background, luminance, amount, 'DESC')

	const monoColors: string[] = [chroma(theme.background).hex()]
	monoColors.push(...generateColors(theme.background, luminanceMonoValues))

	return [colors, monoColors]
}

/**
 * Generates a palette for a light theme.
 *
 * @param theme The theme configuration.
 * @param luminance The luminance configuration.
 * @returns A tuple containing arrays of main colors and monochromatic colors to light theme.
 */
const generateLightPalette = (theme: Theme, luminance: Luminance): [string[], string[]] => {
	const defaultBackground = '#FFFFFF'
	theme.background = theme.background ?? defaultBackground
	
	validateContrast(theme)
	
	luminance.max = 0.5
	luminance.step = luminance.max / luminance.amount
	const luminanceValues = calculateLuminanceRange(theme.color, luminance, luminance.amount, 'DESC')

	const colors: string[] = [chroma(theme.color).hex()]
	colors.push(...generateColors(theme.color, luminanceValues))

	luminance.step = luminance.max / luminance.amount
	const hslBackground = chroma(theme.background).hsl()
	const amount = hslBackground[2] > luminance.max ? luminance.amount - 1 : luminance.amount
	const luminanceMonoValues = calculateLuminanceRange(theme.background, luminance, amount, 'ASC')

	const monoColors: string[] = [chroma(theme.background).hex()]
	monoColors.push(...generateColors(theme.background, luminanceMonoValues))

	return [colors, monoColors]
}

/**
 * Generates an array of hex color values based on the provided color and luminance values.
 *
 * @param color The hex color value.
 * @param luminanceValues An array of luminance values.
 * @returns An array of hex color values.
 */
const generateColors = (color: string, luminanceValues: number[]): string[] => {
	const hsl = chroma(color).hsl()
  return luminanceValues.map((l) => chroma(hsl[0], hsl[1], l, 'hsl').hex())
};

/**
 * Calculates a range of luminance values based on the provided configuration.
 *
 * @param color The hex color value.
 * @param luminance The luminance configuration.
 * @param amount The number of luminance values to generate.
 * @param order The luminance ordering method.
 * @returns `Array` with calculated luminance values.
 */
const calculateLuminanceRange = (color: string, luminance: Luminance, amount: number, order: order): number[] => {
	const result: number[] = []
	const hsl = chroma(color).hsl()

	let lumi = order === 'ASC' ? luminance.min : luminance.max

	while (amount > 0) {
		const diff = Math.abs(hsl[2] - lumi)
		if (diff > luminance.step / 2) result.push(lumi)
		
		lumi = order === 'ASC' ? lumi + luminance.step : lumi - luminance.step
		amount--
	}

	return result
}

/**
 * Validates the contrast between the given color and background color.
 *
 * @param theme The theme configuration.
 * @throws Throws an error if the contrast is below the acceptable threshold.
 */
const validateContrast = (theme: Theme): void => {
	const contrast = chroma.contrast(theme.color, theme.background!)

	if (contrast < 2)
		throwMessage(`The color ${theme.color} from theme ${theme.name} doesn't have decent contrast with the background color.'`)
}

/**
 * Throws an error with the specified message.
 *
 * @param message The error message.
 * @throws Throws an error with the specified message.
 */
const throwMessage = (message: string): void => {
	const error = new Error(message)
	error.stack = ''
  throw error
}

export default generatePalette