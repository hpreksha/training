import dns from 'dns';
import validator from 'validator';

const email = 'user@marutitech.com';

if (!validator.isEmail(email)) {
  console.log('Invalid email format');
} else {
  const domain = email.split('@')[1];
  dns.resolveMx(domain, (err, addresses) => {
    if (err || !addresses.length) {
      console.log('No MX records found for domain:', domain);
    } else {
      console.log('MX Records for', domain, ':', addresses);
    }
  });
}
