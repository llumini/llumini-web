'use client'

import EditorJS from '@editorjs/editorjs'
import {
  ReactElement,
  MutableRefObject,
  useRef,
  useCallback,
  useEffect,
  memo,
} from 'react'

export interface IEditorJsProps extends EditorJS.EditorConfig {
  children?: ReactElement
  /**
   * Id of Element that should contain the Editor
   */
  holder?: string
  reinitializeOnPropsChange?: boolean
  editorInstance?: (instance: EditorJS) => void
}

const EditorJs = (props: IEditorJsProps): ReactElement => {
  const {
    holder,
    editorInstance,
    reinitializeOnPropsChange,
    children,
    tools,
    ...editorProps
  } = props

  const instance: MutableRefObject<EditorJS | null> = useRef(null)

  const initEditor = useCallback(async () => {
    if (!instance.current) {
      instance.current = new EditorJS({
        holder: holder || 'editorjs',
        tools,
        ...editorProps,
      })
    }

    if (editorInstance) {
      await instance.current.isReady
      editorInstance(instance.current)
    }
  }, [editorInstance, holder, tools, editorProps])

  const destroyEditor = useCallback(async () => {
    if (!instance.current) return true

    await instance.current.isReady
    instance.current.destroy()
    instance.current = null
    return true
  }, [instance])

  useEffect(() => {
    initEditor()

    return () => {
      destroyEditor()
    }
  }, [initEditor, destroyEditor])

  useEffect(() => {
    const doEffect = async () => {
      if (!reinitializeOnPropsChange) return

      await destroyEditor()
      initEditor()
    }

    doEffect()
  }, [reinitializeOnPropsChange, initEditor, destroyEditor])

  return children || <div id={holder}></div>
}

export default memo(EditorJs)
