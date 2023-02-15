import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';


const navigation = {
    social : [
        { name: 'Instagram', icon: <FontAwesomeIcon icon={faInstagram} />, href: 'instagram.com/harcerstwoargentyna/' },
        { name: 'Facebook', icon: <FontAwesomeIcon icon={faFacebookSquare} />, href: 'facebook.com/harcerstwo.argentyna/' },
    ]
}

const NavBarSocial = () => {
    return (
        <>
            <div className="border-t border-neutral-200 py-6 flex flex-row text-3xl text-neutral-900 dark:text-white">
                {navigation.social.map((page) => (
                    <div key={page.name} className="flow-root px-4">
                        <a key={page.name} href={"https://" + page.href} target="_blank" rel="noopener noreferrer">
                            {page.icon}
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NavBarSocial;