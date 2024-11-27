import React, { useState } from 'react';
import { ProfileCard } from './ProfileCard';
import { ProfileModal } from './ProfileModal';
import { PersonalCard } from './PersonalCard';
import { playerProfile, businessValue } from '../../config/profileData';

export const ProfileCards: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'player' | 'business' | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <PersonalCard
          imageUrl="https://media.licdn.com/dms/image/v2/D4D03AQGUFnsuG9zpHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725519137225?e=1738195200&v=beta&t=s82v_pLJ6vBE0ZY4lD2EJ__z-9rl3FizBB4SFulZlu4"
          linkedinUrl="https://www.linkedin.com/in/cristian-geerken/"
        />
        <ProfileCard
          title={playerProfile.title}
          summary={playerProfile.summary}
          onClick={() => setActiveModal('player')}
        />
        <ProfileCard
          title={businessValue.title}
          summary={businessValue.summary}
          onClick={() => setActiveModal('business')}
        />
      </div>

      <ProfileModal
        isOpen={activeModal === 'player'}
        onClose={() => setActiveModal(null)}
        title={playerProfile.title}
        sections={playerProfile.sections}
      />
      <ProfileModal
        isOpen={activeModal === 'business'}
        onClose={() => setActiveModal(null)}
        title={businessValue.title}
        sections={businessValue.sections}
      />
    </>
  );
};