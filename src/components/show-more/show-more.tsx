import * as React from "react";

interface Props {
  onShowMoreClick: () => void;
}

const ShowMore: React.FunctionComponent<Props> = (props: Props) => {
  const {onShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick = {onShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
