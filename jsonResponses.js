const users = {};

const respondJSON = (request, response, status, object) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    response.writeHead(status, headers);
    response.write(JSON.stringify(object));
    response.end();
};

const respondJSONMeta = (request, response, status) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    response.writeHead(status, headers);
    response.end();
};

const getUsers = (request, response) => {
    const responseJSON = {
        users,
    };

    return respondJSON(request, response, 200, responseJSON);
};

const getUsersMeta = (request, response) => {
    return respondJSONMeta(request, response, 200);
};

const notFound = (request, response) => {
    const responseJSON = {
        message: 'The page was not found.',
        id: 'notFound'
    };

    return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => {
    return respondJSONMeta(request, response, 404);
};

const updateUser = (request, response) => {
    const newUser = {
        createdAt: Date.now(),
    };

    users[newUser.createdAt] = newUser;

    return respondJSON(request, response, 201, newUser);
};


module.exports = {
    getUsers,
    getUsersMeta,
    updateUser,
    notFound,
    notFoundMeta,
};