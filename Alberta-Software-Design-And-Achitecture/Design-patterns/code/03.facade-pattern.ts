interface IAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  transfer(amount: number): void;
  getAccountNumber(): number;
}

class Chequing implements IAccount {
  private amount = 0;
  constructor(initAmount: number, private readonly number: number) {
    this.amount = initAmount;
  }

  deposit(amount: number) {
    if (amount <= 0) return;
    this.amount += amount;
  }

  withdraw(amount: number) {
    if (this.amount - amount >= 0) {
      this, amount -= amount;
    } else {
      throw new Error('')
    }
  }

  getAccountNumber() {
    return this.number;
  }

  transfer(amount: number) {
    if (this.amount - amount >= 0) {
      this, amount -= amount;
    } else {
      throw new Error('')
    }
  }
}

class Saving implements IAccount { }
class Investment implements IAccount { }

// facade class is a wrapper class

class HashTable<T1, T> {
  private id: T1;
  private account: T;
}
class BankService {
  private bankAccounts: HashTable<number, IAccount>;

  public BanService() {
    this.bankAccounts = new HashTable<init, IAccount>;
  }

  public createAccount(type: string, initAmount: number) {
    let account: IAccount = null;
    switch (type) {
      case 'chequing':
        account = new Chequing(initAmount);
    }
  }
}