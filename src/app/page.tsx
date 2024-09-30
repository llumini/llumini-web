import MarkdownEditor from './components/markdownEditor'

export default function Home() {
  return (
    <div>
      <h1>Hello Word</h1>
      <MarkdownEditor reinitializeOnPropsChange />
      <div id="editorjs"></div>
    </div>
  )
}
