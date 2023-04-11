export const timeFetcher = async () => {
    const res = await fetch(
        'https://timezone.abstractapi.com/v1/current_time/?api_key=7b1951fd0e5341a8afce8c5ec4bb33f1&location=Oxford, United Kingdom',
        {
            method: 'GET',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        }
    );

    return res.json();
};
