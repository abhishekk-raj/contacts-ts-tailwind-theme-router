const ContactForm = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Email" required />
      <input type="text" name="phone" placeholder="Phone" required />
      <button type="submit">Add</button>
    </form>
  )
}

export default ContactForm;