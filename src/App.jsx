import { use } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { Dialog } from "./components/Dialog"
import { ToDoForm } from "./components/ToDoForm"
import ToDoContext from "./components/ToDoProvider/ToDoContext"
import { ToDoGroup } from "./components/ToDoGroup"

function App() {

  const { todos, addTodo, showDialog, toggleDialog } = use(ToDoContext)

  const handleFormSubmit = (formData) => {
    addTodo(formData);
    toggleDialog ();
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <ToDoGroup 
          Heading="Para estudar"
          items={todos.filter(t => !t.completed)}
          />
          <ToDoGroup 
          Heading="Concluído"
          items={todos.filter(t => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <ToDoForm onSubmit={handleFormSubmit} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
