import { useEffect, useState } from "react";
import { api } from "./services/api";

import { Container, Card, DateView } from "./styles";

type Users = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

function App() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/user");

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      {users.map((user, index) => (
        <Card>
          <span>{user.name}</span>
          <small>{user.email}</small>
          <DateView>
            {new Intl.DateTimeFormat("pt-BR").format(new Date(user.created_at))}
          </DateView>
        </Card>
      ))}
    </Container>
  );
}

export default App;
