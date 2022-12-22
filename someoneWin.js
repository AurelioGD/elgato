const someoneWin = (board) => {
    let winner = {won: false, who: ""}
    
    if(!board) return winner
    const turns = ["o", "x"]
    const a1 = board[0][0]
    const a2 = board[0][1]
    const a3 = board[0][2]
    const b1 = board[1][0]
    const b2 = board[1][1]
    const b3 = board[1][2]
    const c1 = board[2][0]
    const c2 = board[2][1]
    const c3 = board[2][2]
    
    const row1 = [a1, a2, a3]
    const row2 = [b1, b2, b3]
    const row3 = [c1, c2, c3]
    
    const col1 = [a1, b1, c1]
    const col2 = [a2, b2, c2]
    const col3 = [a3, b3, c3]
    
    const rightCrossLine = [c1, b2, a3]
    const leftCrossLine = [a1, b2, c3]
    
    
    
    turns.forEach((turn) => {
      const row1Check = row1.every((cord) => cord === turn)
      const row2Check = row2.every((cord) => cord === turn)
      const row3Check = row3.every((cord) => cord === turn)
      
      const col1Check = col1.every((cord) => cord === turn)
      const col2Check = col2.every((cord) => cord === turn)
      const col3Check = col3.every((cord) => cord === turn)
      
      const rightCrossLineCheck = rightCrossLine.every((cord) => cord === turn)
      const leftCrossLineCheck = leftCrossLine.every((cord) => cord === turn)
      
      if(row1Check) winner = {won: true, who: turn}
      if(row2Check) winner = {won: true, who: turn}
      if(row3Check) winner = {won: true, who: turn}
      if(col1Check) winner = {won: true, who: turn}
      if(col2Check) winner = {won: true, who: turn}
      if(col3Check) winner = {won: true, who: turn}
      if(rightCrossLineCheck) winner = {won: true, who: turn}
      if(leftCrossLineCheck) winner = {won: true, who: turn}
    })
    return winner
  }

  export default someoneWin