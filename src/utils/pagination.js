export const getPagesCount = (totalItems, limitByPage) => {
    return Math.ceil(totalItems/limitByPage);
}