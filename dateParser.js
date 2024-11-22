function dateParser(info, time = false) {
    const date = new Date(info);
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    if (time) {
        let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        return `${day}-${month}-${date.getFullYear()} / ${hours}:${minutes}`;
    }

    return `${day}-${month}-${date.getFullYear()}`;
}