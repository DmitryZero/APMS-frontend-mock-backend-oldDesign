//Генераторы для User
//===================================================================================================//
function* iterateUsers(users) {
    for (let i = 0; i < users.length; i++) {
        yield users[i];
    }
}

function findUserByLoginAndPassword(login, password, userList) {
    const genUser = iterateUsers(userList);
    let result = genUser.next();

    while (!result.done) {
        if (result.value.login === login && result.value.password === password) {
            return result.value;
        }
        else {
            result = genUser.next();
        }
    }
    console.log(`User с данными:  login:"${login}", password:"${password}" не был найден`);
    return false;
}

function findUserById(id, userList) {
    const genUser = iterateUsers(userList);
    let result = genUser.next();

    while (!result.done) {
        if (result.value.userId === id) {
            return result.value;
        }
        else {
            result = genUser.next();
        }
    }
    console.log(`User с данными:  id:"${id}" не был найден`);
    return false;
}
//===================================================================================================//


//Генераторы для Project
//===================================================================================================//
function* iterateProject(projects) {
    for (let i = 0; i < projects.length; i++) {
        yield projects[i];
    }
}

function* findProjectsById(idList, projectList) {
    const genProject = iterateProject(projectList);
    let result = genProject.next();
    let index = 0;

    while (!result.done && index < idList.length) {
        if (result.value.projectId === idList[index]) {
            index++;
            yield result.value;
        }
        else {
            result = genProject.next();
        }
    }
    return;
}
//===================================================================================================//