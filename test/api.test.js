//This application uses jest
test('Checking with correct params', async () => {
    url = 'http://localhost:3000/api/scenario?' + new URLSearchParams({
        technology: 'DevOps',
        role: 'Software Engineer',
        environment: 'Cloud Infrastructure'
    }).toString()
        const response = await fetch(url);
    expect(response.status).toBe(200);
});
test('missing technology', async () => {
    url = 'http://localhost:3000/api/scenario?' + new URLSearchParams({
        role: 'Software Engineer',
        environment: 'Cloud Infrastructure'
    }).toString()
    const response = await fetch(url);

    expect(response.status).toBe(400);
});
test('missing role', async () => {
    url = 'http://localhost:3000/api/scenario?' + new URLSearchParams({
        technology: 'DevOps',
        environment: 'Cloud Infrastructure'
    }).toString()
    const response = await fetch(url);

    expect(response.status).toBe(400);
});
test('missing environment', async () => {
    url = 'http://localhost:3000/api/scenario?' + new URLSearchParams({
        technology: 'DevOps',
        role: 'Software Engineer',
    }).toString()
    const response = await fetch(url);

    expect(response.status).toBe(400);
});
test('no params', async () => {
    url = 'http://localhost:3000/api/scenario?';
    const response = await fetch(url);
    expect(response.status).toBe(400);
});
test('Checking with invalid params', async () => {
    url = 'http://localhost:3000/api/scenario?' + new URLSearchParams({
        technology: 'DevOps23',
        role: 'Software Engineer',
        environment: 'Cloud Infrastructure21'
    }).toString()
    const response = await fetch(url);
    expect(response.status).toBe(400);
});

test('Checking options', async () => {
    url = 'http://localhost:3000/api/scenario/options';
    const response = await fetch(url);
    expect(response.status).toBe(200);
});
