import React, { useState } from 'react';
import PartnerApplicationForm from './partner/PartnerApplicationForm';
import StaggeredMenu from './ui/StaggeredMenu';
import LanguageSwitcher from './LanguageSwitcher';
import { socialLinks } from '../constants/socialLinks';

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  const menuItems = [
    { label: 'Home', link: '#', ariaLabel: 'Go to home' },
    { label: 'Book Now', link: '#booking', ariaLabel: 'Book a transfer' },
    { label: 'How It Works', link: '#how-it-works', ariaLabel: 'Learn how it works' },
    { label: 'Partners', link: '#partners', ariaLabel: 'View our partners' },
  ];

  const socialItems = socialLinks.map(link => ({
    label: link.name,
    link: link.url
  }));

  return (
    <>
      <StaggeredMenu
        position="right"
        colors={['#0ea5e9', '#2563eb']}
        items={menuItems.map(item => ({
          ...item,
          link: `#${item.link.replace('#', '')}`
        }))}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        logoUrl="/favicon.svg"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        accentColor="#0ea5e9"
        changeMenuColorOnOpen={false}
        isFixed={true}
        closeOnClickAway={true}
        ctaButton={{
          label: 'Become Partner',
          onClick: () => setShowForm(true)
        }}
        languageSwitcher={<LanguageSwitcher />}
      />

      {showForm && <PartnerApplicationForm onClose={() => setShowForm(false)} />}
    </>
  );
}