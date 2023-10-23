# Especificação do Projeto

## Perfis de Usuários


<table>
  <tbody>
    <tr align=center>
      <th colspan="2">Perfil: Gestor de PCP</th>
    </tr>
    <tr>
      <td width="150px">
        <b>Descrição</b>
      </td>
      <td width="600px">Funcionário de uma empresa do segmento industrial.</td>
    </tr>
    <tr>
      <td>
        <b>Necessidades</b>
      </td>
      <td>Solução para controle e gestão dos prazos de produção e entrega dos produtos.</td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr align=center>
      <th colspan="2">Perfil: Analista Financeiro - Contas a Pagar </th>
    </tr>
    <tr>
      <td width="150px">
        <b>Descrição</b>
      </td>
      <td width="600px">Funcionário de uma empresa do segmento de automação industrial.</td>
    </tr>
    <tr>
      <td>
        <b>Necessidades</b>
      </td>
      <td>Solução para controle das atividades relacionadas à rotina diária do “contas a pagar” e tesouraria.</td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr align=center>
      <th colspan="2">Perfil: Prestador de serviços autônomo </th>
    </tr>
    <tr>
      <td width="150px">
        <b>Descrição</b>
      </td>
      <td width="600px">Prestador de serviços diversos que trabalha por conta própria.</td>
    </tr>
    <tr>
      <td>
        <b>Necessidades</b>
      </td>
      <td>Solução que torne o controle mais prático de sua agenda diária.</td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr align=center>
      <th colspan="2">Perfil: Dona de Casa </th>
    </tr>
    <tr>
      <td width="150px">
        <b>Descrição</b>
      </td>
      <td width="600px">Pessoa que cuida dos afazeres domésticos e cuidados com a família.</td>
    </tr>
    <tr>
      <td>
        <b>Necessidades</b>
      </td>
      <td>Obter um recurso que auxilie na agenda diária das suas atividades pessoais e de sua família.</td>
    </tr>
  </tbody>
</table>


## Histórias de Usuários

|`QUEM`   | `O QUE` |`PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Gestor de PCP (Projetista controlador de produção) Segmento Industrial | Controlar e acompanhar a execução da produção diária. | Para agilizar a comunicação entre os processos de produção para cumprimento da meta diária e entrega dos produtos.|
| Analista Financeiro - Contas à Pagar | Fazer checklist digital das rotinas diárias de conciliação financeira e bancária, inclusão de pagamentos, e processos de tesouraria. | Fazer a gestão das atividades relacionadas ao contas a pagar, buscando agilidade e autonomia nos processos de rotina financeira.|                         
| Profissional Prestador de Serviços Gerais      | Criar agenda de atendimento de prestação de serviços diários | Para acompanhar e controlar os horários de atendimento, agendamentos, prazo para retorno de manutenção realizado, orçamentos e propostas. |
| Uma dona de casa com filhos | Criar agenda de compromissos diários dos afazeres dos filhos e da casa. | Para facilitar sua rotina diária buscando promover tempo para cuidado com casa, filhos e sua vida pessoal. |

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | Um usuário deve poder fazer login no sistema usando seu nome de usuário e senha. | Alta | 
| RF-02 | Se o usuário for de conta pessoal ou gestor de projetos, ele deverá poder criar “Cards” de organização. | Alta |
| RF-03 | Usuário responsável pela criação dos “Cards” poderá editar as informações nele, bem como adicionar tarefas, prazos, check-list, colaboradores. | Alta |
| RF-04 | A criação do “Card” de tarefa deverá conter um título. | Alta |
| RF-05 | Usuário terá acesso a um calendário para ver e definir prazos de entregas. | Alta |
| RF-06 | O usuário poderá adicionar comentários à tarefa | Média |
| RF-07 | A aplicação permitirá ao usuário a customização dos “Cards” | Média |
| RF-08 | Aplicação permitirá a integração de colaboradores no projeto | Média |
| RF-09 | A aplicação permitirá ao usuário a customização do plano de fundo | Baixa |
| RF-10 | A aplicação terá a função de alertas e lembretes na tarefa | Baixa |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.| Alta  | 
| RNF-02 |Usuário terá segurança em seu login, ao tentar se conectar com login ou senha errado não acessaram o site e terá retorno de erro| Média | 


**Prioridade: Alta / Média / Baixa. 

