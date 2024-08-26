import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import useListConversations from '../../zustand/useListConversations'

const SearchInput = () => {
  const {conversations , setFilteredConversations} = useListConversations()

  const handleSubmit = (e) => e.preventDefault()
  
  const handleSearch = (e) => {
    if(!e.target.value) return setFilteredConversations(conversations)

    const filteredConversations = conversations.filter(conversation => {    
      return conversation.firstName.toLowerCase().includes(e.target.value.toLowerCase() ||
      conversation.lastName.toLowerCase().includes(e.target.value.toLowerCase()) )
    })
    setFilteredConversations(filteredConversations)
  }

    return (
        <>
        <form onSubmit={handleSubmit}>
          <div className='input-msg-container'>
            <input
              type='text'
              className='input-msg '
              placeholder='Type to Search..'
              onChange={handleSearch}
            />
            <button type='submit' className='btn-send-msg'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
		    </form>
      </>
    )
}

export default SearchInput