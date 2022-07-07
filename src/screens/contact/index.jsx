import style from './contact.module.css'

export default function Contact() {

  return (
    <div className={style.contact} id='contact' >
      <div className={style.contact_container} >
        <h2>Sign up to our beta form</h2>
        <p>
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </p>
        <form
          className={style.contact_form}
          onSubmit={(e) => e.preventDefault()}
        >
          <input type='email' name='email' id='email' placeholder='email' />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
