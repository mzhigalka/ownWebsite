import { TFunction } from 'i18next';
import { FC } from 'react';
import { skillGroups } from '../../assets/constant/skills';

interface SkillsSectionProps {
    t: TFunction;
}

const SkillsSection: FC<SkillsSectionProps> = ({ t }) => {
    return (
        <>
            <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
                {t('about.skills.title')}
            </h3>

            <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-[22px] text-semigrey font-light leading-[35px] mb-[80px] max-md:grid-cols-1 max-md:gap-y-8 max-md:text-lg max-md:font-normal">
                {skillGroups.map((group) => (
                    <div key={group.id}>
                        <h4 className="font-medium text-black mb-2">{t(group.titleKey)}</h4>
                        {group.items.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default SkillsSection;
