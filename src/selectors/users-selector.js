

export const getUsers = (props) => {
    return props.usersPage.users;
}

export const getTotalCountPages = (props) => {
    return props.usersPage.totalCountPages;
}

export const getCurrentPage = (props) => {
    return props.usersPage.currentPage;
}

export const getSizePage = (props) => {
    return props.usersPage.sizePage;
}

export const getIsFetching = (props) => {
    return props.usersPage.isFetching;
}

export const getLoadFollowing = (props) => {
    return props.usersPage.loadFollowing;
}
