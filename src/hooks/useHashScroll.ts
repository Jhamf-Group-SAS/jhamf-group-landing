import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook that enables scrolling to a hash element after a page transition.
 * Standard React Router does not automatically scroll to `#hash` fragments 
 * when navigating from another page (e.g., from /azure to /#nosotros).
 */
export const useHashScroll = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's no hash in the URL, scroll to top whenever the pathname changes.
        if (hash === '') {
            window.scrollTo(0, 0);
        } else {
            // Give React a tick to paint the new DOM before we try to find the element
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname, hash]); // Trigger on route change or hash change
};
