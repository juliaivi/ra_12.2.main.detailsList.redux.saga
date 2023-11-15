export const getSkills = async() => {
    const response = await fetch('http://localhost:7070/api/services');
    console.log(response);
    if (!response.ok) {
        throw new Error (response.statusText);
    }
    return await response.json();
}

export const getSkill = async() => {
    const id = window.localStorage.getItem('id'); //getItem()интерфейса Storage при передаче имени ключа вернет значение этого ключа или, nullесли ключ не существует, в данном Storageобъекте
    const response = await fetch(`http://localhost:7070/api/services/${id}`);
    console.log(response);
    if (!response.ok) {
        throw new Error (response.statusText);
    }
    return await response.json();
}