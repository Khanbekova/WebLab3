export const doPostFetch = async (link, body, headers) => {
    const response = await fetch(link, {
        method: "POST",
        body,
        headers
    })
    return response.text().then(v => v)
}

export const doGetFetch = async (link) => {
    const response = await fetch(link, {
        method: "GET",
    })
    return response.text().then(v => v)
}