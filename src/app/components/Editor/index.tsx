'use client'

import { useCallback, useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { Editable, RenderElementProps, Slate, withReact } from 'slate-react'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

export const RichEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable renderElement={renderElement} />
    </Slate>
  )
}

const CodeElement = ({ attributes, children }: RenderElementProps) => {
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  )
}

const DefaultElement = ({ attributes, children }: RenderElementProps) => {
  return <p {...attributes}>{children}</p>
}
