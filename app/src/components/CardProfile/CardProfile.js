import styles from './CardProfile.module.css'

function CardProfile({ name, avatar, bio, url }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={avatar} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className={styles.about}>
        <p>{bio}</p>
      </div>
      <div className={styles.link}>
        <a href={url} target="_blank">Saiba mais</a>
      </div>
    </div>
  )
}

export default CardProfile