export const timeFetcher = async () => {
    const res = await fetch(
        'https://timezone.abstractapi.com/v1/current_time/?api_key=0153d30904324028b7e200b4fdff21c3&location=Oxford, United Kingdom',
        {
            method: 'GET',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        }
    );

    return res.json();
};
