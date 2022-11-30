import './Editor.css'
import Navbar from './Navbar/Navbar'

const Editor = () => {
  return (
    <div className='editor'>

        <nav>
          <Navbar/>
        </nav>
      <main>
       <textarea className='editor-input'  />
      </main>

      <button className='submit-btn'> Submit</button>
    </div>
  )
}

export default Editor
