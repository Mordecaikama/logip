import React from 'react'

function Comment({ status, handleClick }) {
  // console.log(handleClick)
  return (
    <section className={`main__right ${status.chat && 'showchat'}`}>
      <div className='profile-info'>
        <div className='profile-photo'>
          <img src={require('../assets/profile-1.jpg')} alt='nothing' />
        </div>
        <p>agyapongmordecai</p>
        <span style={{ fontSize: '0.7rem' }}> agyapongmordecai@gmail.com1</span>
        <div className='profile__icohandleClickns'>
          <span className='material-icons-sharp'>phone</span>
          <span className='material-icons-sharp'>video_camera_back</span>
          <span className='material-icons-sharp'>more_vert</span>
        </div>

        <span className='material-icons-sharp close' onClick={handleClick}>
          close
        </span>
      </div>

      <div className='middle__profile'>
        <div className='profile__activities'>
          <div className='profile__comment'>
            <div className='left'>
              <div className='profile-photo'>
                <img src={require('../assets/profile-2.jpg')} alt='' />
              </div>
              <div className='offline'></div>
            </div>
            <div className='middle'>
              <h5>Mordecai Agyapong</h5>
              <div className='comment'>
                <span className='start'>commented on</span>
                <span className='primary'> stark project</span>
              </div>
            </div>
            <div className='right'>
              <span>10:15AM</span>
            </div>
          </div>

          <div className='comments'>
            Hi Next week we will start a new project. i will tell you all the
            details later
            <div className='like'>
              <i class='fa-solid fa-thumbs-up'></i>
            </div>
          </div>
        </div>
        <div className='profile__activities'>
          <div className='profile__comment'>
            <div className='left'>
              <div className='profile-photo'>
                <img src={require('../assets/profile-3.jpg')} alt='' />
              </div>
              <div className='online'></div>
            </div>
            <div className='middle'>
              <h5>Grace Waters</h5>
              <div className='comment'>
                <span className='start'>Added a file</span>
                <span className='primary'> Adams project</span>
              </div>
            </div>
            <div className='right'>
              <span>12:07AM</span>
            </div>
          </div>

          <div className='comments'>
            Hi Next week we will start a new project. i will tell you all the
            details later
            <div className='like'>
              <i class='fa-solid fa-thumbs-up'></i>
            </div>
          </div>
        </div>
      </div>

      <div className='search__profile'>
        <span className='material-icons-sharp'>attachment</span>

        {/* <input type='text' className='text' /> */}

        <textarea placeholder='write a message....'></textarea>

        <div className='right'>
          <span class='material-icons-sharp arrow'>keyboard_arrow_right</span>
          <span class='material-icons-sharp'>sentiment_satisfied_alt</span>
          <span class='material-icons-sharp'>mic</span>
        </div>
      </div>
    </section>
  )
}

export default Comment
