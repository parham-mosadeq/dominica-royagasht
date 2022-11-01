import React, { useContext } from 'react';
// *context
import { formContext } from '../context/FormController';

const Inputs = () => {
  const { state, dispatch } = useContext(formContext);

  const { firstName, lastName } = state;
  //  preventing forms default Behavior
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const resetFrom = () => {
    window.location.reload();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* name lastName section start */}
        <input
          className=' w-full bg-clr-blue-main block m-2 cursor-pointer placeholder:text-black focus:outline-none rounded-md pl-2 pr-2 pt-1 pm-1'
          type='text'
          placeholder='نام'
          value={firstName}
          onChange={(e) =>
            dispatch({ type: 'FIRST_NAME', payload: e.target.value })
          }
        />
        <input
          className=' w-full bg-clr-blue-main block m-2 cursor-pointer placeholder:text-black focus:outline-none rounded-md pl-2 pr-2 pt-1 pm-1'
          type='text'
          placeholder='نام خانوادگی'
          value={lastName}
          onChange={(e) =>
            dispatch({ type: 'LAST_NAME', payload: e.target.value })
          }
        />
        {/* name lastName section end */}

        {/* maritalStatus section start */}
        <div>
          <label className='border-' htmlFor='marital-status ' value='married'>
            متاهل
          </label>
          <input
            type='radio'
            value='married'
            name='marital-status'
            onChange={(e) =>
              dispatch({ type: 'COUPLE_RADIO', payload: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor='single'>مجرد</label>
          <input
            type='radio'
            value='single'
            name='marital-status'
            onChange={(e) =>
              dispatch({ type: 'SINGLE_RADIO', payload: e.target.checked })
            }
          />
        </div>
        {/* maritalStatus section end */}

        <div>
          <label className='border-b-2 ' htmlFor='kids'>
            {' '}
            فرزند بالای 16 سال
          </label>
          <input
            onClick={(e) =>
              dispatch({ type: 'CHILDREN_ABOVE', payload: e.target.checked })
            }
            className='h-3 w-3  align-middle hover:bg-gray-300 hover:cursor-pointer  '
            type='checkbox'
            name='kids'
          />

          {state.isChildrenAboveSixteen ? (
            <input
              onClick={(e) =>
                dispatch({
                  type: 'CHILDREN_ABOVE_COUNT',
                  payload: e.target.value,
                })
              }
              className='w-full bg-clr-blue-main block m-2 cursor-pointer placeholder:text-black focus:outline-none rounded-md pl-2 pr-2 pt-1 pm-1'
              type='number'
              min={0}
              max={100}
              name='children'
              defaultValue={0}
              placeholder=' تعداد فرزندان بالای 16 سال'
            />
          ) : (
            <input
              className='w-full bg-clr-gray-300 block m-2 cursor-pointer placeholder:text-black focus:outline-none rounded-md pl-2 pr-2 pt-1 pm-1'
              disabled
              type='number'
              min={0}
              max={100}
              name='children'
              defaultValue={0}
              placeholder=' تعداد فرزندان بالای 16 سال'
            />
          )}
        </div>
        <div>
          <label htmlFor='kids'> فرزند زیر 16 سال</label>

          <input
            onClick={(e) =>
              dispatch({ type: 'CHILDREN_BELOW', payload: e.target.checked })
            }
            className='h-3 w-3  align-middle hover:bg-gray-300 hover:cursor-pointer  '
            type='checkbox'
            name='kids'
          />
          {state.isChildrenBelowSixteen ? (
            <input
              onClick={(e) =>
                dispatch({
                  type: 'CHILDREN_BELOW_COUNT',
                  payload: e.target.value,
                })
              }
              className='w-full bg-clr-blue-main block m-2 cursor-pointer placeholder:text-black focus:outline-none rounded-md pl-2 pr-2 pt-1 pm-1'
              type='number'
              min={0}
              max={100}
              defaultValue={0}
              name='children'
            />
          ) : (
            <input
              disabled
              className='w-full bg-clr-gray-300 block m-2 cursor-pointer placeholder:text-black focus:outline-none rounded-md pl-2 pr-2 pt-1 pm-1'
              type='number'
              min={0}
              max={100}
              defaultValue={0}
              name='children'
            />
          )}
        </div>

        {/* children count start */}

        {/* children count end */}

        <div>
          <label className='border-b-2' htmlFor='parents'>
            پدر و مادر بالای 65سال
          </label>
          <input
            className='h-3 w-3  align-middle hover:bg-gray-300 hover:cursor-pointer  '
            type='checkbox'
            name='parents'
            onClick={(e) =>
              dispatch({ type: 'PARENT_CHECKBOX', payload: e.target.checked })
            }
          />
          {state.isParents ? (
            <input
              className='w-full  m-2 cursor-pointer placeholder:text-black focus:outline-none rounded-md pl-2 pr-2 pt-1 pm-1  bg-clr-blue-main'
              type='number'
              min={0}
              max={4}
              placeholder='تعداد والدین زوجین'
              onChange={(e) =>
                dispatch({ type: 'PARENT_COUNT', payload: e.target.value })
              }
            />
          ) : (
            <input
              className='w-full  m-2 cursor-pointer placeholder:text-black focus:outline-none rounded-md pl-2 pr-2 pt-1 pm-1  bg-clr-gray-300'
              type='number'
              min={0}
              max={4}
              placeholder='تعداد والدین زوجین'
              disabled
            />
          )}
        </div>

        {/* btn container start */}
        <div className='flex  justify-between items-center'>
          {/* submit button start */}
          <button
            className='block bg-clr-purple-main p-1 mt-4 rounded-md text-clr-yellow-main hover:shadow-lg  '
            onClick={(e) => dispatch({ type: 'SUBMIT_FORM', payload: e })}
          >
            submit
          </button>
          {/* submit button end */}
          {/* clear btn start */}
          <button
            className='block bg-teal-900 p-1 mt-4 rounded-md text-white capitalize hover:shadow-lg  '
            onClick={(e) => resetFrom()}
          >
            {' '}
            clear form{' '}
          </button>
          {/* clear btn end */}
        </div>
        {/* btn container end */}
      </form>

      <div className=''>{` هزینه برای آقا/خانم ${state.showDetails} `}</div>
    </div>
  );
};

export default Inputs;
