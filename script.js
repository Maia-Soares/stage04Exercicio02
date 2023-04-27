const students = [
  {
    name: 'Maria',
    note1: 6,
    note2: 10
  },
  {
    name: 'João',
    note1: 7,
    note2: 7
  },
  {
    name: 'Julia',
    note1: 5,
    note2: 3
  },
  {
    name: 'Letícia',
    note1: 9,
    note2: 10
  }
]

function media(note1, note2) {
  return ((note1 + note2) / 2).toFixed(2)
}

for (let student of students) {
  if (media(student.note1, student.note2) >= 7) {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${media(
        student.note1,
        student.note2
      )}\nParabéns, ${student.name}! Você foi aprovado(a) no concurso! `
    )
  } else {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${media(
        student.note1,
        student.note2
      )}\nNão foi dessa vez, ${student.name}! Tente novamente! `
    )
  }
}
