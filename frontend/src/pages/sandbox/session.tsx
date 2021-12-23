import React, {useState} from 'react';
import {logout, getAccountInfo, updateAccountInfo} from './api';

const Session: React.FC = () => {
  const [successfulTests, setSuccessfulTests] = useState<number>();
  const [failedTests, setFailedTests] = useState<number>();
  const logoutHandler = () => {
    logout().then(data => {
      console.log('logout data: ', data);
    });
  };
  const accountInfoHandler = () => {
    getAccountInfo().then(data => {
      console.log('acc data: ', data);
    });
  };
  const updateAccInfoHandler = (e: any) => {
    e.preventDefault();
    updateAccountInfo({successfulTests, failedTests}).then(data => {
      console.log('updated data: ', data);
    });
  };
  return (
    <>
      <button onClick={logoutHandler} className="logout-btn" id="logout">
        Logout
      </button>

      <button
        onClick={accountInfoHandler}
        className="acc-info-btn"
        id="accInfo"
      >
        Get account Info(for authenticated users)
      </button>
      <div className="update-acc-info">
        <form action="">
          <input
            value={successfulTests}
            onChange={e => setSuccessfulTests(Number(e.target.value))}
            type="number"
            name="successfulTests"
            placeholder="successful tests..."
            id="successfulTests"
          />
          <input
            value={failedTests}
            onChange={e => setFailedTests(Number(e.target.value))}
            type="number"
            name="failedTests"
            placeholder="failed tests..."
            id="failedTests"
          />
          <button onClick={updateAccInfoHandler} type="submit">
            update account info
          </button>
        </form>
      </div>
    </>
  );
};

export {Session};
