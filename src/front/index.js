import React, { useState } from 'react'
import Comment from '../components/comments'

function Index() {
  const [state, setState] = useState({
    chat: false,
    menu: false,
  })

  const handleClick = () => {
    setState({ ...state, chat: !state.chat })
  }
  return (
    <div className='main__container'>
      <aside className={` ${state.menu && 'showmenu'}`}>
        <div className='top'>
          <span className='material-icons-sharp'>web_stories</span>
          <h5>Mardy</h5>
          <span
            className='material-icons-sharp close'
            onClick={() => setState({ ...state, menu: !state.menu })}
          >
            close
          </span>
        </div>
        <div className={`sidebar `}>
          <a href='#'>
            <span className='material-icons-sharp'>home</span>
            <h3>Home</h3>
          </a>
          <a href='#'>
            <div className='left'>
              <span className='material-icons-sharp'>splitscreen</span>
              <h3>Projects</h3>
            </div>
            <span className='material-icons-sharp add'>add</span>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>assignment</span>
            <h3>Tasks</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>people</span>
            <h3>Team</h3>
          </a>
          <a href='#' onClick={() => setState({ ...state, chat: !state.chat })}>
            <span className='material-icons-sharp'>chat</span>
            <h3>Chat</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>settings</span>
            <h3>Settings</h3>
          </a>
          <div className='bottom'>
            <div className='upgrade-ap'></div>
            <a href=''>
              <span className='material-icons-sharp'>
                <span class='material-icons-sharp'>info</span>
              </span>
              <h3>Help and Information </h3>
            </a>
            <a href=''>
              <span className='material-icons-sharp'>settings_power</span>
              <h3>Logout </h3>
            </a>
          </div>
        </div>
      </aside>
      <main>
        <div className='top'>
          <div className='intro'>
            <h2>Hello, Mordecai</h2>
            <h5>{state.chat && 'chatstateistrue'}</h5>
            <div className='date'>
              <span className='date-text'>16 May,2023</span>
              <span className='material-icons-sharp'>date_range</span>
            </div>
            <span
              className='material-icons-sharp menu'
              onClick={() => setState({ ...state, menu: !state.menu })}
            >
              menu
            </span>
          </div>
          <span>Track Team progress here,You almost reach a goal.</span>
        </div>

        <div className='project__progress'>
          <article>
            <i className='fa-solid fa-thumbs-up'></i>
            <div className='right'>
              <span className='text'>Finished</span>
              <div className='details'>
                <span className='number'>18</span>
                <div className='detail-info'>
                  <sub>
                    <span className='material-icons-sharp arrow-down'>
                      expand_more
                    </span>
                  </sub>
                  <span className='material-icons-sharp'>add</span>8 tasks
                </div>
              </div>
            </div>
          </article>

          <article>
            <i className='fa-regular fa-clock'></i>
            <div className='right'>
              <span className='text'>Tracked</span>
              <div className='details'>
                <span className='number'>31</span>
                <div className='detail-info'>
                  <sub>
                    <span className='material-icons-sharp arrow-down'>
                      expand_more
                    </span>
                  </sub>
                  <span className='material-icons-sharp'>add</span>6hours
                </div>
              </div>
            </div>
          </article>

          <article>
            <i class='fa-solid fa-chart-line'></i>
            <div className='right'>
              <span className='text'>Efficiency</span>
              <div className='details'>
                <span className='number'>93%</span>
                <div className='detail-info'>
                  <sub>
                    <span className='material-icons-sharp arrow-down'>
                      expand_more
                    </span>
                  </sub>
                  <span className='material-icons-sharp'>remove</span>12%
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className='performance'>
          <h2>welcome to the canvas of the performance slot</h2>
        </div>

        <div className='task__container'>
          <div className='top'>
            <div className='left'>
              <h4>Current Task</h4>
              <span>Done 30%</span>
            </div>

            <select name='cars' id='cars'>
              <option value='volvo'>Volvo</option>
            </select>
          </div>

          <table>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>

            <tbody>
              <tr>
                <td className='icon'>
                  <span className='material-icons-sharp'>work</span>
                  <span>Product review of UI 8 market</span>
                </td>
                <td>
                  <div className='status progress'></div>
                  <div>In progress</div>
                </td>
                <td>
                  <span className='material-icons-sharp'>watch_later</span>
                  <div className='text'>4h</div>
                </td>
                <td>
                  <span className='material-icons-sharp'>more_horiz</span>
                </td>
              </tr>
              <tr>
                <td className='icon'>
                  <span className='material-icons-sharp'>
                    directions_car_filled
                  </span>
                  <span>UX research for product</span>
                </td>
                <td>
                  <div className='status hold'></div> <div>Hold</div>
                </td>
                <td>
                  <span className='material-icons-sharp'>watch_later</span>
                  <div className='text'>4h</div>
                </td>
                <td>
                  <span className='material-icons-sharp'>more_horiz</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Comment status={state} handleClick={handleClick} />

      {JSON.stringify(state)}
    </div>
  )
}

export default Index
