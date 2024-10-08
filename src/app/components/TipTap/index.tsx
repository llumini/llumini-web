'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Button } from '@/components/ui/button'
import api from '@/app/services/axios'

export const Tiptap = () => {
  const handleSave = async () => {
    if (editor) {
      const json = editor.getJSON().content
      const response = await api.post('/note', {
        title: 'New note',
        content: json,
      })
      console.log(response)
    }
  }

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: 'text-foreground',
          },
        },
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose m-5 focus:outline-none w-full max-w-[900px]',
      },
    },
    content: `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a basic <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
  `,
  })

  return (
    <>
      <Button onClick={handleSave}>Save</Button>
      <EditorContent editor={editor} />
    </>
  )
}
