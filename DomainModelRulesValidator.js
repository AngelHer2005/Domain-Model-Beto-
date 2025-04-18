class WarrantyCardValidator {
  static validate(warrantyCard) {
    const errors = [];

    // WarrantyCard rules
    if (!warrantyCard.cardId) {
      errors.push("WarrantyCard: cardId must be unique and not empty.");
    }
    if (!warrantyCard.frontSide || !warrantyCard.backSide) {
      errors.push("WarrantyCard: Must have both FrontSide and BackSide.");
    }

    // FrontSide rules
    if (warrantyCard.frontSide) {
      const frontSide = warrantyCard.frontSide;
      if (!frontSide.mainTitle) {
        errors.push("FrontSide: mainTitle must not be empty.");
      }
      if (!isValidUrl(frontSide.pageLink)) {
        errors.push("FrontSide: pageLink must be a valid URL.");
      }
      if (!frontSide.callToAction) {
        errors.push("FrontSide: callToAction must be present.");
      }
      if (frontSide.qrCodes && frontSide.qrCodes.length > 5) {
        errors.push("FrontSide: Can have up to 5 QR codes.");
      }
    }

    // BackSide rules
    if (warrantyCard.backSide) {
      const backSide = warrantyCard.backSide;
      if (!backSide.welcomeMessage || backSide.welcomeMessage.length < 10) {
        errors.push(
          "BackSide: welcomeMessage must contain at least 10 characters."
        );
      }
      if (!backSide.contactInfo || backSide.contactInfo.length < 1) {
        errors.push("BackSide: Must have at least one ContactInfo.");
      }
      if (backSide.qrCodes && backSide.qrCodes.length > 2) {
        errors.push("BackSide: Can have up to 2 QR codes.");
      }
    }

    // QRCode rules
    [
      ...(warrantyCard.frontSide?.qrCodes || []),
      ...(warrantyCard.backSide?.qrCodes || []),
    ].forEach((qrCode, index) => {
      if (!["link", "video", "document"].includes(qrCode.type)) {
        errors.push(
          `QRCode ${index}: type must be "link", "video", or "document".`
        );
      }
      if (!isValidUrl(qrCode.url)) {
        errors.push(`QRCode ${index}: URL must be valid.`);
      }
    });

    // ContactInfo rules
    (warrantyCard.backSide?.contactInfo || []).forEach((contact, index) => {
      if (!isValidEmail(contact.email)) {
        errors.push(`ContactInfo ${index}: email must be valid.`);
      }
      if (!contact.physicalAddress) {
        errors.push(`ContactInfo ${index}: physicalAddress must not be empty.`);
      }
    });

    // Image rules
    [
      ...(warrantyCard.frontSide?.images || []),
      ...(warrantyCard.backSide?.images || []),
    ].forEach((image, index) => {
      if (image.width <= 0 || image.height <= 0) {
        errors.push(`Image ${index}: width and height must be greater than 0.`);
      }
      if (image.altText.length < 5 || image.altText.length > 100) {
        errors.push(
          `Image ${index}: altText must have between 5 and 100 characters.`
        );
      }
      // Assuming x and y limits are defined elsewhere
    });

    return errors;
  }
}

// Helper functions
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = WarrantyCardValidator;
