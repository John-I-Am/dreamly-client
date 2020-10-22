import React, {useState} from 'react'
import Modal from 'react-modal'
import Form from 'react-bootstrap/Form'
import {useDispatch, useSelector} from 'react-redux'
import { createDream } from '../reducers/dreamReducer'
import { closeModal } from '../reducers/modalReducer'

const DreamFormModal = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')

  const openOrClosed = useSelector(state => state.modal)
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (title === '' && content === '') {
      alert('please add title and content')
      return
    }

    const dream = {
      title: title,
      content: content,
    }
    
    setTitle('')
    setContent('')

    dispatch(createDream(dream))
    dispatch(closeModal())

  }

  return (
    <Modal className='modal' isOpen={openOrClosed} onRequestClose={() => dispatch(closeModal())}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="titleInput">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Dream Title" value={title} onChange={({target}) => setTitle(target.value)}/>
        </Form.Group>

        <Form.Group controlId="tagInput">
          <Form.Label>Tag</Form.Label>
          <Form.Control type="text" placeholder="Add tags seperated by space" value={tags} onChange={({target}) => setTags(target.value)}/>
        </Form.Group>

        <input type="radio" id="yesLucid" name="lucid" value="true"></input>
        <label for="yesLucid">lucid dream</label>
        <input type="radio" id="noLucid" name="lucid" value="false"></input>
        <label for="noLucid">non lucid dream</label>

        <Form.Group controlId="textAreaInput">
          <Form.Label>Dream Content</Form.Label>
          <Form.Control as="textarea" placeholder="Today I Dreamt That..." rows="5" value={content} onChange={({target}) => setContent(target.value)} maxLength='400'/>
        </Form.Group>
        <button type="submit">create</button>
      </Form>
    </Modal>
  )
}

export default DreamFormModal