interface IAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  transfer(amount: number): void;
  getAccountNumber(): number;
}

class Chequing implements IAccount { }
class Saving implements IAccount { }
class Investment implements IAccount { }

// facade class is a wrapper class

class BankService {
  constructor(private check: Chequing, private saving: Saving, private investment: Investment) { }
  
}