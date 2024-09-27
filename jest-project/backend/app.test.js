import { getUserById, connection } from "./db.js";

// Executado antes de todos os testes
beforeAll(async () => {
    await connection.query("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))");
    await connection.query("INSERT INTO users (name, email) VALUES ('Eliel Souza', 'elielsf@gmail.com')");
    await connection.query("INSERT INTO users (name, email) VALUES ('Marcos Vinicius', 'marcosvinicius@gmail.com')");
});

//Executado após todos os testes
afterAll(async () => {
    // await connection.query("DROP TABLE users");
    // await connection.query("TRUNCATE TABLE users");
    await connection.end();
});

//Bloco de código com testes similares
describe("Testes para obter o usuário pelo Id (getUserById)", () => {
    test("Deve retornar o usuário correto pelo Id", async () => {
        const user1 = await getUserById(1);

        expect(user1).toHaveProperty("name", "Eliel Souza");
        expect(user1).toHaveProperty("email", "elielsf@gmail.com");

        const user2 = await getUserById(2);

        expect(user2).toHaveProperty("name", "Marcos Vinicius");
        expect(user2).toHaveProperty("email", "marcosvinicius@gmail.com");
    });

    test("Deve retornar undefined se o usuário não existir", async () => {
        const user = await getUserById(999);
        expect(user).toBeUndefined();
    });
});