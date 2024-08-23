from datetime import date

class Tarefa:

    #método que é executada toda vez que a classe for instanciada e gera uma lista para cada informação
    def __init__(self):
        self.ids = []
        self.titulos = []
        self.data_criacao = []

    #método que adiciona tarefas nas listas geradas
    def adicionarTarefa(self, id, titulo):
        #testa se o tipo de dados do id é diferente de inteiro
        if (type(id) != int):
            return False
        #testa se o tipo de dados do titulo é diferente de texto ou se está vazio
        if (type(titulo) != str or titulo == ''):
            return False
        
        #gera a data atual
        data_atual = date.today()

        #adiciona as informações à ultima posição na lista
        self.ids.append(id)        
        self.titulos.append(titulo)
        self.data_criacao.append(data_atual)

        return True

    #método para exibir as tarefas no terminal
    def exibirTarefas(self):
        print("\nTarefas: ")
        #laço para obter as informações de forma organizada das listas e exibir no terminal
        for id, titulo, data_criacao in zip(self.ids, self.titulos, self.data_criacao):
            print(f"{id} - {titulo} - {data_criacao}")
        return True
    
    #método para atualizar as tarefas de acordo ao id da tarefa
    def atualizarTarefas(self, id, novo_titulo):
        #gera a data atual
        data_atual = date.today()

        #laço para comparar o id enviado com o id já armazenado
        for i in range(len(self.ids)):
            # se os ids forem iguais ele faz a atualização
            if (id == (i + 1)):
                self.titulos[i] = novo_titulo
                return True
        #se não houver um id igual ele retorna uma falha
        return False
    
    #método para deletar as tarefas de acordo ao id da tarefa
    def deletarTarefas(self, id):
        #laço para comparar o id enviado com o id já armazenado
        for i in range(len(self.ids)):
            #se os ids forem iguais ele deleta o valor na posição na lista
            if (id == (i + 1)):
                del(self.titulos[i])
                del(self.data_criacao[i])
                del(self.ids[i])
                return True
        #se não houver um id igual ele retorna uma falha
        return False