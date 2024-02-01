# OCMS Theme [<img src="./assets/icon.png" alt="OCMS Theme" width="90" height="90" align="right">](https://github.com/BrennoFruhauf/ocms-theme)
> Your VS Code with your favorite color.

Table of Contents

- [OCMS Theme ](#ocms-theme-)
	- [Color Themes](#color-themes)
	- [Previews](#previews)
	- [Add Your Custom Theme](#add-your-custom-theme)
	- [Installation](#installation)
	- [Configuration Suggestion](#configuration-suggestion)
	- [Feedback](#feedback)

## Color Themes

| Theme Name                | Color                                            | HEX     |
| ------------------------- | ------------------------------------------------ | ------- |
| OCMS Pink Sherbet         | ![#f68d9b](https://fakeimg.pl/35/f68d9b/?text=+) | #F68D9B |
| OCMS Red                  | ![#ff0000](https://fakeimg.pl/35/ff0000/?text=+) | #FF0000 |
| OCMS Electric Crimson     | ![#ff0040](https://fakeimg.pl/35/ff0040/?text=+) | #FF0040 |
| OCMS Vivid Raspberry      | ![#ff0073](https://fakeimg.pl/35/ff0073/?text=+) | #FF0073 |
| OCMS Vivid Violet         | ![#9d00ff](https://fakeimg.pl/35/9d00ff/?text=+) | #9D00FF |
| OCMS Electric Indigo      | ![#6200ff](https://fakeimg.pl/35/6200ff/?text=+) | #6200FF |
| OCMS Blue                 | ![#0800ff](https://fakeimg.pl/35/0800ff/?text=+) | #0800FF |
| OCMS Brandeis Blue        | ![#006aff](https://fakeimg.pl/35/006aff/?text=+) | #006AFF |
| OCMS Vivid Sky Blue       | ![#00ccff](https://fakeimg.pl/35/00ccff/?text=+) | #00CCFF |
| OCMS Sea Green (Crayola)  | ![#00ffd0](https://fakeimg.pl/35/00ffd0/?text=+) | #00FFD0 |
| OCMS Medium Spring Green  | ![#00ff99](https://fakeimg.pl/35/00ff99/?text=+) | #00FF99 |
| OCMS Guppie Green         | ![#00ff73](https://fakeimg.pl/35/00ff73/?text=+) | #00FF73 |
| OCMS Electric Green       | ![#00ff04](https://fakeimg.pl/35/00ff04/?text=+) | #00FF04 |
| OCMS Spring Bud           | ![#aaff00](https://fakeimg.pl/35/aaff00/?text=+) | #AAFF00 |
| OCMS Lemon Glacier        | ![#f2ff00](https://fakeimg.pl/35/f2ff00/?text=+) | #F2FF00 |
| OCMS Cyber Yellow         | ![#ffd000](https://fakeimg.pl/35/ffd000/?text=+) | #FFD000 |
| OCMS Orange Peel          | ![#ff9d00](https://fakeimg.pl/35/ff9d00/?text=+) | #FF9D00 |
| OCMS Blaze Orange         | ![#ff6a00](https://fakeimg.pl/35/ff6a00/?text=+) | #FF6A00 |
| OCMS Orange (Aerospace)   | ![#ff4d00](https://fakeimg.pl/35/ff4d00/?text=+) | #FF4D00 |
| OCMS Conquelicot          | ![#ff3700](https://fakeimg.pl/35/ff3700/?text=+) | #FF3700 |

## Previews

<div align="center">

![OCMS Pink Sherbet](./assets/previews/OCMS%20Pink%20Sherbet.png)

![OCMS Red](./assets/previews/OCMS%20Red.png)

![OCMS Electric Crimson](./assets/previews/OCMS%20Electric%20Crimson.png)

![OCMS Vivid Raspberry](./assets/previews/OCMS%20Vivid%20Raspberry.png)

![OCMS Vivid Violet](./assets/previews/OCMS%20Vivid%20Violet.png)

![OCMS Electric Indigo](./assets/previews/OCMS%20Electric%20Indigo.png)

![OCMS Blue](./assets/previews/OCMS%20Blue.png)

![OCMS Brandeis Blue](./assets/previews/OCMS%20Brandeis%20Blue.png)

![OCMS Vivid Sky Blue](./assets/previews/OCMS%20Vivid%20Sky%20Blue.png)

![OCMS Sea Green (Crayola)](./assets/previews/OCMS%20Sea%20Green%20(Crayola).png)

![OCMS Medium Spring Green](./assets/previews/OCMS%20Medium%20Spring%20Green.png)

![OCMS Guppie Green](./assets/previews/OCMS%20Guppie%20Green.png)

![OCMS Electric Green](./assets/previews/OCMS%20Electric%20Green.png)

![OCMS Spring Bud](./assets/previews/OCMS%20Spring%20Bud.png)

![OCMS Lemon Glacier](./assets/previews/OCMS%20Lemon%20Glacier.png)

![OCMS Cyber Yellow](./assets/previews/OCMS%20Cyber%20Yellow.png)

![OCMS Orange Peel](./assets/previews/OCMS%20Orange%20Peel.png)

![OCMS Blaze Orange](./assets/previews/OCMS%20Blaze%20Orange.png)

![OCMS Orange (Aerospace)](./assets/previews/OCMS%20Orange%20(Aerospace).png)

![OCMS Conquelicot](./assets/previews/OCMS%20Coquelicot.png)

</div>

## Add Your Custom Theme

1. Clone the repository to your local machine:
```shell
git clone https://github.com/BrennoFruhauf/ocms-theme.git
```
2. Open `themes.ts` and configure your theme. Example:
```ts
const schemes: Theme[] = [
  {
    // Name of your theme.
    name: 'your-theme-name', 

    // Your favorite color.
    color: '#FFF000',

    // "light" or "dark" scheme.
    scheme: "dark",

    // (Optional) Background Color. Default value is #131313.
    background: '#292200',

    // (Optional) Overwrite properties. Use Hex Alpha color or Color Object.
    override: {}
  }
]
```
3. Run the `npm run build` script to create your JSON.
4. To debug, add your theme to `package.json` and press `F5`:
```json
"contributes": {
  "themes": [
    {
      // Name of your theme.
      "label": "Your Theme Name",

      // "vs", "vs-dark", "hc-black" or "hc-light".
      "uiTheme": "vs-dark",

      // Path of your JSON file.
      "path": "./themes/${scheme}/${your-theme-name}.json"
    }
  ]
}
```

> If you want me to add it to the collection, please open a [request](https://github.com/BrennoFruhauf/ocms-theme/issues) with the generated theme data.

## Installation

1. Click `Ctrl + Shift + X` or `⌘ + Shift + X` to Open **Extensions** sidebar panel in Visual Studio Code.
2. Search for `OCMS Theme`
3. Click **Install**.
4. Click `Ctrl + Shift + P` or `⌘ + Shift + P` to `Show Command Palette`.
5. Type `theme` and choose `Preferences: Color Theme`.
6. Choose your favorite color theme.

## Configuration Suggestion

1. Click `Ctrl + Shift + P` or `⌘ + Shift + P` and Open `Preferences: Open User Settings (JSON)`.
2. Download and install [Fira Code Font](https://github.com/tonsky/FiraCode?tab=readme-ov-file#download--install).

```json
"editor.tabSize": 2,
"editor.fontSize": 13,
"editor.lineHeight": 1.8,
"editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
```

3. Install [Symbols](vscode:extension/miguelsolorio.symbols) Extension.
```json
"workbench.iconTheme": "symbols",
"symbols.hidesExplorerArrows": false,
```

4. Install [Fluent Icons](vscode:extension/miguelsolorio.fluent-icons) Extension.
```json
"workbench.productIconTheme": "fluent-icons",
```

5. Install [APC Customize UI++](vscode:extension/drcika.apc-extension) Extension.
```json
"apc.header": {
  "height": 36
},
"apc.listRow": {
  "height": 26
},
"apc.electron": {
  "frame": false,
  "titleBarStyle": "hidden"
},
"apc.stylesheet": {
  ".pane-header": "padding: 0 8px;",
  ".title-label > h2": "display: none",
  ".monaco-list-row": "border-radius: 4px;",
  ".nosidebar .inline-tabs-placeholder": "width: 75px;",
  ".monaco-workbench .part.titlebar>.titlebar-container>.titlebar-center": "display: none !important;",
},
```

6. The following properties don't require any extensions.
```json
"workbench.tree.indent": 8,
"breadcrumbs.enabled": false,
"workbench.sideBar.location": "right",
"workbench.editor.labelFormat": "short",
"workbench.startupEditor": "newUntitledFile",

"editor.rulers": [80, 120],
"editor.insertSpaces": false,
"editor.fontLigatures": true,
"editor.minimap.enabled": false,
"editor.cursorBlinking": "expand",
"editor.scrollbar.vertical": "hidden",
"editor.renderLineHighlight": "gutter",
"editor.scrollbar.horizontal": "hidden",
"editor.cursorSmoothCaretAnimation": "on",
"editor.semanticHighlighting.enabled": false,
"editor.guides.bracketPairsHorizontal": false,
"editor.bracketPairColorization.enabled": false,

"explorer.compactFolders": false,
"explorer.fileNesting.enabled": true,
"explorer.confirmDragAndDrop": false,
"explorer.sortOrder": "foldersNestsFiles",
"explorer.fileNesting.patterns": {
  ".env": ".env*",
  ".env.local": ".env*",
  "tailwind.config*": "tailwind.config*, postcss.config*",
  "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-lock*, bun.lockb, nest*, package-lock*",
},
```

## Feedback

If you have suggestions, please [open an issue](https://github.com/brennofruhauf/ocms-theme/issues) or better yet, a [pull request](https://github.com/brennofruhauf/ocms-theme/issues/pulls).

</br>

<p align="center">
  <img src="https://github.com/BrennoFruhauf/BrennoFruhauf/assets/102325604/d1ddec26-7cd5-4775-8fbc-869045cc3d60" width="400" alt="Divider" />
</p>

<p align="center">
  Created with ❤️ by <a href="https://github.com/brennofruhauf" target="_blank">Brenno Fruhauf</a>.
</p>