const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>Your link: <a href={link.to} target='_blank' rel='noopent noreferrer'>{link.to}</a></p>
      <p>From: <a href={link.from} target='_blank' rel='noopent noreferrer'>{link.from}</a></p>
      <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
      <p>Date of create: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}

LinkCard.propTypes = {}

export default LinkCard
