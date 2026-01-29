import { useTranslation } from 'react-i18next';

const LanguageTest = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            background: '#ff4444',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            cursor: 'pointer'
        }}
            onClick={toggleLanguage}
        >
            <div style={{ fontSize: '14px', marginBottom: '5px' }}>
                Current: {i18n.language}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {t('FAST SERVICE')}
            </div>
            <div style={{ fontSize: '12px', marginTop: '5px' }}>
                Click to switch language
            </div>
        </div>
    );
};

export default LanguageTest;
