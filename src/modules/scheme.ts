import chroma from 'chroma-js'
import merge from 'lodash.merge'
import base from '../base/base'
import generatePalette from './palette'

/**
 * Generates a scheme.
 *
 * @param theme `Object` with data to create theme.
 * @returns `JSON` with color scheme created.
 */
const scheme = (theme: Theme) => {
	const colors: [string[], string[]] = generatePalette(theme)
	const draft: Scheme = base()

	if (theme.override != null) merge(draft, theme.override)

	transform(draft, (key: string, value: Color) => colorize(colors, key, value, theme.scheme))

	return draft
}

/**
 * Colorization transformation.
 *
 * @param colors A tuple containing arrays of colors.
 * @param value Key value with color position and alpha.
 * @returns RRGGBBAA | RRGGBB color in the hex format.
 */
const colorize = (colors: [string[], string[]], key: string, value: Color, scheme: scheme) => {
	let color: string = colors[value.array][value.position]

	if (scheme === 'light')
		color = keyToCheck.some(k => k === key) ? colors[1][0] : color	
	
	color = keyToCheck.some(k => k === key) ? checkContrast(colors, color) : color

	return chroma(color).alpha(value.alpha ?? 1).hex()
}

/**
 * Array containing predefined keys related to check color.
 *
 * @type `String[]`
 */
const keyToCheck: string[] = [
	'activityBarBadge.foreground',
	'statusBar.foreground',
	'menu.selectionForeground',
	'button.foreground',
	'inputOption.activeForeground',
	'badge.foreground',
	'terminalCursor.foreground',
	'notificationCenterHeader.foreground'
]

/**
 * Checks the contrast between two colors based on specific conditions.
 *
 * @param c A tuple containing two color arrays.
 * @param v Color information.
 * @returns `String` with color suitable contrast based on the conditions.
 */
const checkContrast = (cs: [string[], string[]], c: string): string => chroma.contrast(c, cs[0][0]) < 2 ? cs[1][0] : c

/**
 * Deep object transformer.
 *
 * @param object The object that the transformation function will be applied.
 * @param transformation The transformation function to be applied.
 * @returns `Object` transform applied.
 */
const transform = (object: Record<string, any>, transformation: Function) => {
	for (let key in object) {

		if (object[key] !== null && (typeof object[key] === 'object' && !object[key].hasOwnProperty('array'))) {
			object[key] = transform(object[key], transformation)
			continue
		}

		if (typeof object[key] !== 'object') continue
		object[key] = transformation.apply(this, [key, object[key]]) || object[key]
	}
	return object
}

export default scheme