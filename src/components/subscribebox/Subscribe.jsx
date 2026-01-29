import React, { useState } from "react";
import "./Subscribe.css";
import { useTranslation } from "react-i18next";

const SubscribeForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert(t("I agree to the terms and conditions and the privacy policy."));
      return;
    }
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div className="subscribe-container">
      <h3>{t('Subscribe to Our Newsletter')}</h3>
      <p>{t('Subscribe to our latest newsletter to get news about special discounts.')}</p>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <input
          type="email"
          placeholder={t('Enter your email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{t('Subscribe')}</button>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          {t('I agree to the terms and conditions and the privacy policy.')}
        </label>
      </form>
    </div>
  );
};

export default SubscribeForm;
