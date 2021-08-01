// change your baseURL here
const BaseUrl = "https://astricksoftware.com/mobile-app/fetch-api/api";
const UserToken = '238ljasdfu!idsQp';

const Error = {
    'status': false,
    'reason': "error"
};

// make request and get JSON data GET
const getData = async (RequestPage) => {

    // start request using fetch Api
    try {
        let response = await fetch(BaseUrl + RequestPage, {
            // requested method
            method: 'GET',

            // headers
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-User-Token': UserToken
            }
        });

        let responseData = await response.json();
        if (responseData)
            return responseData;
        else
            return Error;

    } catch (error) {
        console.log(error);

        return Error;
    }
};

export default {
    getData,
}