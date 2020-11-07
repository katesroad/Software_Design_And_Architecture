class Knife {
  protected type: string;
  constructor() { };

  polifsh() { }

  package() { }

  sharpen() { }
}

class SteakKnife extends Knife {
  readonly type = 'steak'
}
class ChiefKnief extends Knife {
  readonly type = 'cheif';
}

class KniefFactory {
  createKnief(type: string): Knife {
    if (type === 'steak') return new SteakKnife()
    else if (type === 'chief') return new ChiefKnief()
    else return new Knife()
  }
}

class KniefStore {
  constructor(private factory KniefFactory) { }

  orderKnkief(type: string): Knife {
    const knief = this.factory.createKnief(type);

    knief.sharpen()
    knief.polifsh()
    knief.package();

    return knief;
  }
}