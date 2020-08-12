export const Action = {
  CHANGE_FILTER: `Change filter`,
  SHOW_MORE: `Show more films`,
};

export const Creator = {
  filterFilms: (filter) => {
    return {
      type: Action.CHANGE_FILTER,
      payload: filter
    };
  },

  showMore: () => {
    return {
      type: Action.SHOW_MORE,
    };
  }
};
