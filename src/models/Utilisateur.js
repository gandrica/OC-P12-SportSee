class Utilisateur {
  constructor(userData) {
    this.nom = userData.nom;
    this.prenom = userData.prenom;
    this.email = userData.email;
    this.role = userData.role;

    this.dateCreation = new Date();
    this.estActif = true;
  }
  getNomComplet() {
    return `${this.prenom} ${this.nom}`;
  }

  // Méthode de formatage : très utile pour préparer la donnée
  // avant de l'envoyer à un composant React ou une API
  formatPourAffichage() {
    return {
      identifiant: this.email.toLowerCase(),
      nomComplet: this.getNomComplet().toUpperCase(),
      statut: this.estActif ? "🟢 Actif" : "🔴 Inactif",
      role: this.role,
    };
  }
}
export default Utilisateur;
