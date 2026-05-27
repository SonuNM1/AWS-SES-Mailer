export const extractDetails =
  (email) => {
    const [
      localPart,
      domain,
    ] = email.split("@");

    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
    ];

    const isPersonal =
      personalDomains.includes(
        domain
      );

    const formattedName =
      localPart
        ?.split(/[._-]/)
        ?.map(
          (word) =>
            word.charAt(0)
              .toUpperCase() +
            word.slice(1)
        )
        ?.join(" ");

    return {
      name:
        formattedName || "there",

      website: isPersonal
        ? "your business"
        : domain,
    };
  };