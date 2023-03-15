import { buildTitle } from "./titleView.js"

export function titleController(titleElement) {
  titleElement.innerHTML = buildTitle()
}