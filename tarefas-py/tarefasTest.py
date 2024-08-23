from tarefas import Tarefa

def verificaResultado(expected, actual, message):
    if (expected == actual and type(expected) == type(actual)):
        print(f"✔️  OK, '{message}' passou no teste")
    else:
        print(f"❌  Falhou, '{message}' não passou no testes. \nEsperado: {expected}, Obtido: {actual}")

tarefa = Tarefa()

verificaResultado(True, tarefa.adicionarTarefa(1, "Acordar"), "01 - Teste para adicionar tarefa")
verificaResultado(True, tarefa.adicionarTarefa(2, "Tomar café da manha"), "02 - Teste para adicionar tarefa")
verificaResultado(True, tarefa.exibirTarefas(), "03 - Teste para exibir as tarefas")
verificaResultado(True, tarefa.atualizarTarefas(2, "Tomar pré-treino"), "04 - Teste para atualizar tarefa")
verificaResultado(True, tarefa.exibirTarefas(), "05 - Teste para exibir as tarefas")