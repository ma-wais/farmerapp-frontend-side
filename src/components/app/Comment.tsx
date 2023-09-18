import React from "react";
import { Typography } from "@mui/material";
import "../../styles/app/components/Comment.css";

const Comment = ({
  personName = "",
  profileImage = "",
  comment = "",
  commentTime = "",
  replies = "",
  liked = false,
}) => {
  const [showReplies, setShowReplies] = React.useState(false);

  return (
    <div className="comment">
      <div className="img">
        <img src={profileImage} alt="" />
      </div>
      <div className="content">
        <div>
          <div>
            <Typography className="textDark">
              {personName}
              <span className="time">{commentTime}</span>
            </Typography>
            <Typography>{comment}</Typography>
          </div>
          <div className="msAuto">
            {liked === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
              >
                <path
                  d="M11.6164 0C14.3902 0 16.2539 2.6075 16.2539 5.04C16.2539 9.96625 8.51891 14 8.37891 14C8.23891 14 0.503906 9.96625 0.503906 5.04C0.503906 2.6075 2.36766 0 5.14141 0C6.73391 0 7.77516 0.79625 8.37891 1.49625C8.98266 0.79625 10.0239 0 11.6164 0Z"
                  fill="#FF5858"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
              >
                <path
                  d="M12.6164 1.02295C15.3902 1.02295 17.2539 3.63045 17.2539 6.06295C17.2539 10.9892 9.51891 15.0229 9.37891 15.0229C9.23891 15.0229 1.50391 10.9892 1.50391 6.06295C1.50391 3.63045 3.36766 1.02295 6.14141 1.02295C7.73391 1.02295 8.77516 1.8192 9.37891 2.5192C9.98266 1.8192 11.0239 1.02295 12.6164 1.02295Z"
                  stroke="#ADB4C0"
                  stroke-width="1.98473"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <div>
          {replies.length <= 0 ? (
            <Typography>Reply</Typography>
          ) : (
            <>
              <Typography
                className="reply"
                onClick={() => setShowReplies(!showReplies)}
              >
                View Replies ( {replies.length} )
                <span style={{ marginLeft: "7.4px" }}>
                  {/* Arrow Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                  >
                    <path
                      d="M1.04541 1.90078L6.99961 7.85498L12.9538 1.90078"
                      stroke="#CA9B64"
                      stroke-width="1.98473"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div
                  className={`replies ${showReplies && "show"}`}
                  id="replies"
                >
                  {replies.map((v, i) => {
                    return <div key={i}>{v}</div>;
                  })}
                </div>
              </Typography>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
