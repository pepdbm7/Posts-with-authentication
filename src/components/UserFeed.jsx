import React from "react";
import Linkify from "react-linkify";

const UserFeed = props => {
  let userFeed = props.feedData.map((feedData, i) => (
    <div className="" key={i}>
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <p className="">
                <b>{props.name}</b>
                <Linkify>{feedData.feed}</Linkify>
                <br />
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <button
                id="del"
                className="btn btn-danger"
                onClick={props.deleteFeed}
                data={feedData.feed_id}
                value={props.index}
              >
                <i className="fa fa-user-times" aria-hidden="true" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div>{userFeed}</div>;
};

export default UserFeed;
