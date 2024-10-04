import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

type CustomText = { text: string }
type ParagraphElement = { type: 'paragraph'; children: CustomText[] }
type CodeElement = { type: 'code'; children: CustomText[] }

type CustomElement = ParagraphElement | CodeElement

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
