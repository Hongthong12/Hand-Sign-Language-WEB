import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faBuilding ,faPhone } from '@fortawesome/free-solid-svg-icons';



const ContactUs = () => {
    return (
        <div className="background">
            <div className="Board">
            <iframe 
                    className="map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092443!2d144.95373631531678!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d4bcbfdecd72!2sVictoria%20Harbour%2C%20Melbourne%20VIC%203005%2C%20Australia!5e0!3m2!1sen!2sth!4v1616403204820!5m2!1sen!2sth" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                ></iframe>

                  <div className='Contact'>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-icon"/>
                        <h1>ອີເມວ:</h1>
                        <p className='name'> jilayouthbank@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faBuilding} className="fa-icon"/>
                        <h2>ສະຖານທີ່:</h2>
                        <p className='address'>ມະຫາວິທະຍາໄລເເຫ່ງຊາດ, ຄະນະວິະສະວະກຳສາດ</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon"/>
                        <h3 >ທີ່ຢູ່:</h3>
                        <p className='location'>ບ້ານວັດນາກ, ເມືອງສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} className="fa-icon"/>
                        <h4> ເບີໂທຕິດຕໍ່:</h4>
                        <p className='phone'>+856 20 56 751 176</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default ContactUs;
