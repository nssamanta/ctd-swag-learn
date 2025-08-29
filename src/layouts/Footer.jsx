import { useRef} from 'react';

function Footer() {
 const year = useRef(new Date().getFullYear());
return (
 <footer>
   <p>
     Made with ❤️ | &copy; {year.current}{' '}
     <a href="http://codethedream.org/">CTD</a>
   </p>
 </footer>
 );
}
export default Footer;