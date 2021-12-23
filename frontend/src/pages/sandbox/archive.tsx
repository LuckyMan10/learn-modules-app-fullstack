import React, {useState} from 'react';

const Archive: React.FC = () => {
  const [moduleFromArchiveId, setModuleFromArchiveId] = useState<string>();
  const getArchiveHandler = () => {
    console.log('archive');
  };
  const deleteByIdHandler = (e: any) => {
    e.preventDefault;
  };
  const deleteAllHandler = () => {
    console.log('delete all!');
  };
  return (
    <>
      <button onClick={getArchiveHandler} className="get-archive">
        get archive
      </button>

      <div className="delete-archive">
        <div className="by-id">
          <form onSubmit={deleteByIdHandler} action="">
            <input
              type="text"
              value={moduleFromArchiveId}
              onChange={e => setModuleFromArchiveId(e.target.value)}
            />
            <button>delete!</button>
          </form>
        </div>
        <button onClick={deleteAllHandler}>
          delete all from archive(for authenticated users)
        </button>
      </div>
    </>
  );
};

export {Archive};
