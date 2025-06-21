const axios = require('axios')

test("comentario do teste", () =>{
    expect('teste').toBe("teste")
})

test("Testando API Json PLACEHOLDER", async () =>{
    const response = await axios.get('https:jsonplaceholder.typicode.com/todos')
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
})