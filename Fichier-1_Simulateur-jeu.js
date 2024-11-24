class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
      this.nom = nom;
      this.pointsDeVie = pointsDeVie;
      this.attaque = attaque;
      this.precision = precision;
    }
  
    attaquer(adversaire) {
      if (this.verifierPrecision()) {
        afficherMessage(this.nom + " attaque " + adversaire.nom + " !");
        adversaire.pointsDeVie -= this.attaque;
        afficherMessage(adversaire.nom + " perd " + this.attaque + " points de vie.");
      } else {
        afficherMessage(this.nom + " rate son attaque !");
      }
    }
  
    verifierPrecision() {
      return Math.random() < this.precision;
    }
  }
  
  let combattant1 = new Combattant("Spartacus", 100, 20, 0.8);
  let combattant2 = new Combattant("Crixus", 120, 15, 0.8);
  
  const combatLog = document.getElementById("combatLog");
  
  function afficherMessage(message) {
    combatLog.textContent += message + "\n";
  }
  
  while (combattant1.pointsDeVie > 0 && combattant2.pointsDeVie > 0) {
    combattant1.attaquer(combattant2);
    if (combattant2.pointsDeVie <= 0) break;
    combattant2.attaquer(combattant1);
  }
  
  if (combattant1.pointsDeVie <= 0) {
    afficherMessage(combattant2.nom + " remporte le combat !");
  } else {
    afficherMessage(combattant1.nom + " remporte le combat !");
  }